import {
    authentication,
    AuthenticationProvider,
    AuthenticationProviderAuthenticationSessionsChangeEvent,
    Disposable,
    EventEmitter,
    ExtensionContext,
    window,
    commands
} from 'vscode';

import { v4 as uuid } from 'uuid';
import { State, SuoFile, SuperOfficeAuthenticationSession, Token, UserClaims } from '../types/index';
import { IFileSystemService, IAuthenticationService, IHttpService } from '../services';
import { getPackagePublisher } from '../utils';

export class SuperofficeAuthenticationProvider implements AuthenticationProvider, Disposable {
    private currentSession: SuperOfficeAuthenticationSession | undefined;
    private disposables: Disposable[] = [];
    private _onDidChangeSessions = new EventEmitter<AuthenticationProviderAuthenticationSessionsChangeEvent>();
    public readonly onDidChangeSessions = this._onDidChangeSessions.event;

    private displayName: string;

    constructor(
        private readonly context: ExtensionContext,
        private fileSystemService: IFileSystemService,
        private authenticationService: IAuthenticationService,
        private httpService: IHttpService
    ) {
        this.displayName = getPackagePublisher(context);

        const disposableProvider = authentication.registerAuthenticationProvider(this.displayName.toLowerCase(), this.displayName, this, {
            supportsMultipleAccounts: false
        });
        this.disposables.push(disposableProvider);
    }

    // Session Management Methods
    private isSessionExpired(session: SuperOfficeAuthenticationSession): boolean {
        return session.expiresAt! < Date.now();
    }

    private async getAllSessions(): Promise<SuperOfficeAuthenticationSession[]> {
        const allSessions = await this.context.secrets.get(`${this.displayName.toLowerCase()}.sessions`);
        return allSessions ? JSON.parse(allSessions) : [];
    }

    private async retrieveSessionData(): Promise<SuperOfficeAuthenticationSession[] | null> {
        const sessionData = await this.context.secrets.get(`${this.displayName.toLowerCase()}.sessions`);
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
        await this.context.secrets.store(`${this.displayName.toLowerCase()}.sessions`, JSON.stringify(sessions));
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

    private async verifyTenantState(claims: UserClaims): Promise<State> {
        const state = await this.httpService.getTenantState(claims);
        if (!state.IsRunning) {
            throw new Error('The tenant is not running');
        }
        return state;
    }

    private createSessionObject(claims: UserClaims, tokenInformation: Token, state: State): SuperOfficeAuthenticationSession {
        return {
            id: uuid(),
            contextIdentifier: claims['http://schemes.superoffice.net/identity/ctx'],
            accessToken: tokenInformation.access_token!,
            refreshToken: tokenInformation.refresh_token,
            webApiUri: state.Api,
            expiresAt: Date.now() + 3600 * 1000,
            claims: claims,
            account: { label: claims['http://schemes.superoffice.net/identity/ctx'], id: claims['http://schemes.superoffice.net/identity/ctx'] },
            scopes: []
        };
    }

    private async storeSessionData(session: SuperOfficeAuthenticationSession): Promise<void> {
        await this.context.secrets.store(`${this.displayName.toLowerCase()}.sessions`, JSON.stringify([session]));
        await this.fileSystemService.writeSuoFile(JSON.stringify({ contextIdentifier: session.contextIdentifier }));
    }

    public async createSession(): Promise<SuperOfficeAuthenticationSession> {
        const environment = await this.selectEnvironment();

        const tokenInformation = await this.authenticationService.login(environment) as Token;
        const userClaims = this.authenticationService.getClaimsFromToken(tokenInformation.id_token) as UserClaims;

        const state = await this.verifyTenantState(userClaims);
        const session = this.createSessionObject(userClaims, tokenInformation, state);

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

    async setSession(session: SuperOfficeAuthenticationSession): Promise<void> {
        this.currentSession = session;
        this._onDidChangeSessions.fire({ added: [session], removed: [], changed: [] });
        await this.updateContextKey(true);
    }

    // Utilities
    async selectEnvironment(): Promise<string> {
        const environment = await window.showQuickPick(['sod', 'online'], {
            placeHolder: 'Select an environment',
            canPickMany: false
        });

        if (!environment) {
            throw new Error('Environment selection was canceled by the user.');
        }

        return environment
    }

    getCurrentSession(): SuperOfficeAuthenticationSession | undefined {
        return this.currentSession;
    }

    private async updateContextKey(isAuthenticated: boolean): Promise<void> {
        await commands.executeCommand('setContext', 'extension.isAuthenticated', isAuthenticated);
    }

    public async dispose(): Promise<void> {
        this.disposables.forEach(d => d.dispose());
        this.disposables = [];
        this._onDidChangeSessions.dispose();
    }
}
