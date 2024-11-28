import {
    authentication,
    AuthenticationProvider,
    AuthenticationProviderAuthenticationSessionsChangeEvent,
    Disposable,
    EventEmitter,
    ExtensionContext,
    window,
    commands,
    Uri,
    env,
} from 'vscode';

import { v4 as uuid } from 'uuid';
import { State, SuoFile, SuperOfficeAuthenticationSession, UserClaims } from '../types/index';
import { AuthFlow, AuthProvider } from '../constants';
import { IFileSystemService } from '../services/fileSystemService';
import { IAuthenticationService } from '../services/authenticationService';
import { IHttpService } from '../services/httpService';
import { TokenSet } from 'openid-client';


export class SuperofficeAuthenticationProvider implements AuthenticationProvider, Disposable {
    private readonly id = AuthProvider.ID;
    private readonly label = AuthProvider.LABEL;
    private currentSession: SuperOfficeAuthenticationSession | undefined;
    private disposables: Disposable[] = [];

    private _onDidChangeSessions = new EventEmitter<AuthenticationProviderAuthenticationSessionsChangeEvent>();
    public readonly onDidChangeSessions = this._onDidChangeSessions.event;

    constructor(
        private readonly context: ExtensionContext,
        private fileSystemService: IFileSystemService,
        private authenticationService: IAuthenticationService,
        private httpService: IHttpService
    ) {
        const disposableProvider = authentication.registerAuthenticationProvider(this.id, this.label, this, {
            supportsMultipleAccounts: false
        });
        this.disposables.push(disposableProvider);
    }

    // Session Management Methods
    private isSessionExpired(session: SuperOfficeAuthenticationSession): boolean {
        return session.expiresAt! < Date.now();
    }

    private async getAllSessions(): Promise<SuperOfficeAuthenticationSession[]> {
        const allSessions = await this.context.secrets.get(`${this.id}.sessions`);
        return allSessions ? JSON.parse(allSessions) : [];
    }

    private async retrieveSessionData(): Promise<SuperOfficeAuthenticationSession[] | null> {
        const sessionData = await this.context.secrets.get(`${this.id}.sessions`);
        return sessionData ? JSON.parse(sessionData) : null;
    }

    private async retrieveSuoFile(): Promise<SuoFile | undefined> {
        return await this.fileSystemService.readSuoFile();
    }

    private findSessionByIdentifier(sessions: SuperOfficeAuthenticationSession[], contextIdentifier: string): SuperOfficeAuthenticationSession | undefined {
        return sessions.find(obj => obj.contextIdentifier === contextIdentifier);
    }

    private removeSessionById(sessions: SuperOfficeAuthenticationSession[], sessionId: string): [SuperOfficeAuthenticationSession[], SuperOfficeAuthenticationSession | undefined] {
        const sessionIdx = sessions.findIndex(s => s.id === sessionId);
        const removedSession = sessionIdx !== -1 ? sessions.splice(sessionIdx, 1)[0] : undefined;
        return [sessions, removedSession];
    }

    private async updateStoredSessions(sessions: SuperOfficeAuthenticationSession[]): Promise<void> {
        await this.context.secrets.store(`${this.id}.sessions`, JSON.stringify(sessions));
    }

    public async getSessions(): Promise<SuperOfficeAuthenticationSession[]> {
        try {
            if (this.currentSession && !this.isSessionExpired(this.currentSession)) {
                return [this.currentSession];
            }

            const sessions = await this.retrieveSessionData();
            if (!sessions) return [];

            const suoFile = await this.retrieveSuoFile();
            if (!suoFile) return [];

            const session = this.findSessionByIdentifier(sessions, suoFile.contextIdentifier);
            if (!session || this.isSessionExpired(session)) {
                if (session) this.removeSession(session.id);
                return [];
            }

            this.setSession(session);
            return [session];
        } catch (error) {
            console.error("Failed to retrieve or parse sessions:", error);
            return [];
        }
    }

    // Authentication Methods
    private async authenticateWithPKCE(environment: typeof AuthFlow.ENVIRONMENT[number]): Promise<TokenSet> {
        const url = await this.authenticationService.generateAuthorizeUrl(environment);
        await env.openExternal(Uri.parse(url));
        const tokenSet = await this.authenticationService.startServer(30000);
        //const tokenSet = await this.authenticationService.authenticate(environment);
        return tokenSet;
    }

    private async verifyTenantState(environment: typeof AuthFlow.ENVIRONMENT[number], contextIdentifier: string): Promise<State> {
        const state = await this.httpService.getTenantStateAsync(environment, contextIdentifier);
        if (!state.IsRunning) {
            throw new Error('The tenant is not running');
        }
        return state;
    }

    private createSessionObject(tokenSet: TokenSet, state: State, contextIdentifier: string): SuperOfficeAuthenticationSession {
        return {
            id: uuid(),
            contextIdentifier: contextIdentifier,
            accessToken: tokenSet.access_token!,
            refreshToken: tokenSet.refresh_token,
            webApiUri: state.Api,
            expiresAt: Date.now() + 3600 * 1000,
            claims: tokenSet.claims() as UserClaims,
            account: { label: contextIdentifier, id: contextIdentifier },
            scopes: []
        };
    }

    private async storeSessionData(session: SuperOfficeAuthenticationSession): Promise<void> {
        await this.context.secrets.store(`${this.id}.sessions`, JSON.stringify([session]));
        await this.fileSystemService.writeSuoFile(JSON.stringify({ contextIdentifier: session.contextIdentifier }));
    }

    public async createSession(): Promise<SuperOfficeAuthenticationSession> {
        const environment = await this.selectEnvironment();
        const tokenSet = await this.authenticateWithPKCE(environment);

        const claims = tokenSet.claims() as UserClaims;
        const contextIdentifier = `${claims['http://schemes.superoffice.net/identity/ctx']}`;

        const state = await this.verifyTenantState(environment, contextIdentifier);
        const session = this.createSessionObject(tokenSet, state, contextIdentifier);

        await this.storeSessionData(session);
        this.setSession(session);

        return session;
    }

    // Event Management Methods
    private fireSessionChangeEvent(removedSession?: SuperOfficeAuthenticationSession): void {
        if (removedSession) {
            this._onDidChangeSessions.fire({ added: [], removed: [removedSession], changed: [] });
        }
    }

    public async removeSession(sessionId: string): Promise<void> {
        const sessions = await this.getAllSessions();
        const [updatedSessions, removedSession] = this.removeSessionById(sessions, sessionId);

        await this.updateStoredSessions(updatedSessions);
        this.fireSessionChangeEvent(removedSession);

        this.currentSession = undefined;
        await this.updateContextKey(false);
    }

    async setSession(session: SuperOfficeAuthenticationSession) {
        this.currentSession = session;
        this._onDidChangeSessions.fire({ added: [session], removed: [], changed: [] });
        await this.updateContextKey(true);
    }

    // Utilities
    async selectEnvironment(): Promise<typeof AuthFlow.ENVIRONMENT[number]> {
        const environment = await window.showQuickPick(AuthFlow.ENVIRONMENT, {
            placeHolder: 'Select an environment',
            canPickMany: false
        });

        if (!environment) {
            throw new Error('Environment selection was canceled by the user.');
        }

        return environment as typeof AuthFlow.ENVIRONMENT[number];
    }

    getCurrentSession(): SuperOfficeAuthenticationSession | undefined {
        return this.currentSession;
    }

    private async updateContextKey(isAuthenticated: boolean): Promise<void> {
        await commands.executeCommand('setContext', 'extension.isAuthenticated', isAuthenticated);
    }

    public async dispose() {
        this.disposables.forEach(d => d.dispose());
        this.disposables = [];
        this._onDidChangeSessions.dispose();
    }
}
