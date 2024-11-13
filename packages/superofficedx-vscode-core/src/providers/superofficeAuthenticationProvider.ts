//import * as vscode from 'vscode';
import {
	authentication,
	AuthenticationProvider,
	AuthenticationProviderAuthenticationSessionsChangeEvent,
    AuthenticationSession,
	Disposable,
	EventEmitter,
	ExtensionContext,
	window,
} from 'vscode';

import { v4 as uuid } from 'uuid';
import { SuperOfficeAuthenticationSession, UserClaims } from '../types/types';
import { AuthFlow, AuthProvider } from '../constants';
import { IFileSystemService } from '../services/fileSystemService';
import { IAuthenticationService } from '../services/authenticationService';
import { IHttpService } from '../services/httpService';

export let currentSession: SuperOfficeAuthenticationSession | null = null;

export class SuperofficeAuthenticationProvider implements AuthenticationProvider, Disposable {
    private readonly id = AuthProvider.ID; // Unique ID for your provider
    private readonly label = AuthProvider.LABEL;
    private currentSession: SuperOfficeAuthenticationSession | undefined;

    // Event emitter for session changes
    private _onDidChangeSessions = new EventEmitter<AuthenticationProviderAuthenticationSessionsChangeEvent>();
    public readonly onDidChangeSessions = this._onDidChangeSessions.event;

    private disposables: Disposable[] = [];

    constructor(private readonly context: ExtensionContext, private fileSystemService: IFileSystemService, private authenticationService: IAuthenticationService, private httpService: IHttpService) {
        const disposableProvider = authentication.registerAuthenticationProvider(this.id, this.label, this, { supportsMultipleAccounts: false });
        this.disposables.push(disposableProvider);
    }

    /**
     * Get the existing sessions
     * @param scopes 
     * @returns 
     */
    public async getSessions(_scopes?: string[]): Promise<SuperOfficeAuthenticationSession[]> {
        try {
            if(this.currentSession){
                    // Check if session has expired
                if (this.currentSession.expiresAt! < Date.now()) {
                    this.removeSession(this.currentSession.id);
                    return [];
                }
                return [this.currentSession];
            }
            // Attempt to retrieve sessions from SecretStorage
            const sessionData = await this.context.secrets.get(`${this.id}.sessions`);
            if(!sessionData){
                return []; // No sessions found, return an empty array
            }

              // Attempt to parse session data
             let sessions: SuperOfficeAuthenticationSession[] = JSON.parse(sessionData);

             const suoFile = await this.fileSystemService.readSuoFile();
             if(suoFile === undefined){
                return [];
             }
             const session = sessions.find(obj => obj.contextIdentifier === suoFile.contextIdentifier);

             if(!session){
                 return [];
             }

              // Check if session has expired
              if (session.expiresAt! < Date.now()) {
                console.log("Session expired");
                this.removeSession(session.id);
                return [];
            }
            window.showInformationMessage(`Session still valid for tenant: ${session.contextIdentifier}`);
            this.setSession(session);
            return [session];

        }
        catch (error) {
            console.error("Failed to retrieve or parse sessions:", error);
            return []; // Return an empty array on error to prevent application crashes
        }
    }


    /**
     * Create a new auth session
     * @param scopes 
     * @returns 
     */
    public async createSession(_scopes: string[]): Promise<SuperOfficeAuthenticationSession> {
        try {
            const environment = await this.selectEnvironment();

            // //Run Authorization Code Flow with PKCE
            const tokenSet = await this.authenticationService.authenticate(environment);

            if (!tokenSet.access_token) {
                throw new Error('Access token is missing from the authentication response.');
            }

            // //Get Claims and tenant Status
            const claims: UserClaims = tokenSet.claims() as UserClaims;
            let contextIdentifier = `${claims['http://schemes.superoffice.net/identity/ctx']}`;

            const state = await this.httpService.getTenantStateAsync(environment, contextIdentifier);
            if(!state.IsRunning){
                throw new Error('The tenant is not running');
            }

            const session: SuperOfficeAuthenticationSession = {
                id: uuid(),
                contextIdentifier: contextIdentifier,
                accessToken: tokenSet.access_token,
                refreshToken: tokenSet.refresh_token,
                webApiUri: state.Api,
                expiresAt: Date.now() + 3600 * 1000,
                claims: claims,
                account: {
                    label: contextIdentifier,
                    id: contextIdentifier
                },
                scopes: []
            };

            await this.context.secrets.store(`${this.id}.sessions`, JSON.stringify([session]));
            await this.fileSystemService.writeSuoFile(JSON.stringify({ contextIdentifier: contextIdentifier }));

            this.setSession(session);
            return session;
        } catch (e) {
            window.showErrorMessage(`Sign in failed: ${e}`);
            throw e;
        }
    }

    /**
   * Remove an existing session
   * @param sessionId 
   */
    public async removeSession(sessionId: string): Promise<void> {
        const allSessions = await this.context.secrets.get(`${this.id}.sessions`);
        if (allSessions) {
            let sessions = JSON.parse(allSessions) as SuperOfficeAuthenticationSession[];
            const sessionIdx = sessions.findIndex(s => s.id === sessionId);
            const session = sessions[sessionIdx];
            sessions.splice(sessionIdx, 1);

            await this.context.secrets.store(`${this.id}.sessions`, JSON.stringify(sessions));

            if (session) {
                this._onDidChangeSessions.fire({ added: [], removed: [session], changed: [] });
            }

            this.currentSession = undefined;
            this._onDidChangeSessions.fire({ added: [], removed: [session], changed: [] });

            //TODO: WORKAROUND UNTIL HTTPSERVICE IS FIXED
            currentSession = null;
        }
    }

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

    setSession(session: SuperOfficeAuthenticationSession) {
        this.currentSession = session;
        // Notify listeners about the session change
        this._onDidChangeSessions.fire({
            added: [session],
            removed: [],
            changed: [],
        });
        
        
        //TODO: WORKAROUND UNTIL HTTPSERVICE IS FIXED
        currentSession = session;
    }

    /**
     * Dispose the registered services
     */
    public async dispose() {
        this.disposables.forEach(d => d.dispose());
        this.disposables = [];
        this._onDidChangeSessions.dispose();
    }
}