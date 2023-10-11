import { authentication, AuthenticationProvider, AuthenticationProviderAuthenticationSessionsChangeEvent, AuthenticationSession, Disposable, EventEmitter, ExtensionContext, window } from "vscode";
import { CustomAuthenticationSession, UserClaims } from "../types/types";
import { authenticate } from "../services/authenticationService";
import { TokenSet } from "openid-client";
import { ENVIRONMENTS } from '../config';
import { getTenantState } from "../services/systemService";

export const AUTH_TYPE = `superoffice-auth0`;
const AUTH_NAME = `superoffice`;
const SESSIONS_SECRET_KEY = `${AUTH_TYPE}.sessions`;
let contextIdentifier: string | null = null;
export let webapiUrl: string | null = null;

export class SuperofficeAuthenticationProviderNew implements AuthenticationProvider, Disposable {
    private _sessionChangeEmitter = new EventEmitter<AuthenticationProviderAuthenticationSessionsChangeEvent>();
    private _disposable: Disposable;

    public static readonly authenticationProviderId = 'superofficeAuthentication';
    
    constructor(private readonly context: ExtensionContext) {
        this._disposable = Disposable.from(
            authentication.registerAuthenticationProvider(AUTH_TYPE, AUTH_NAME, this, { supportsMultipleAccounts: false })
        );
    }

    get onDidChangeSessions() {
        return this._sessionChangeEmitter.event;
    }

    /**
     * Get the existing sessions
     * @param scopes 
     * @returns 
     */
    public async getSessions(_scopes?: string[]): Promise<readonly AuthenticationSession[]> {
        const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);
    
        if (allSessions) {
          return JSON.parse(allSessions) as AuthenticationSession[];
        }
    
        return [];
      }

    /**
     * Create a new auth session
     * @param scopes 
     * @returns 
     */
    public async createSession(scopes: string[]): Promise<AuthenticationSession> {
        try {
            const environment = await this.selectEnvironment();

            //Run Authorization Code Flow with PKCE
            const tokenSet = await authenticate(environment) as TokenSet;
            this.validateTokenSet(tokenSet);

            //Get Claims and tenant Status
            const claims: UserClaims = tokenSet.claims() as UserClaims;
            contextIdentifier = `${claims['http://schemes.superoffice.net/identity/ctx']}`;

            const state = await getTenantState(environment, contextIdentifier);
            if (!state.IsRunning) {
                throw new Error('The tenant is not running');
            }

            const session: CustomAuthenticationSession = {
                id: contextIdentifier,
                accessToken: tokenSet.access_token!,
                refreshToken: tokenSet.refresh_token,
                account: {
                    label: 'userLabel',
                    id: 'userId'
                },
                scopes: scopes,
                claims: claims
            };

            await this.context.secrets.store(SESSIONS_SECRET_KEY, JSON.stringify([session]));

            this._sessionChangeEmitter.fire({ added: [session], removed: [], changed: [] });

            return session;
        } catch (e) {
            window.showErrorMessage(`Sign in failed: ${e}`);
            throw e;
        }
    }

    async selectEnvironment(): Promise<string> {
        const environment = await window.showQuickPick(ENVIRONMENTS, {
            placeHolder: 'Select an environment',
            canPickMany: false
        });

        if (!environment) {
            throw new Error('Environment selection was canceled by the user.');
        }

        return environment;
    }

    async validateTokenSet(tokenSet: TokenSet): Promise<void> { // You might need to define the type TokenSetType
        if (!tokenSet.access_token) {
            throw new Error('Access token is missing from the authentication response.');
        }

        // ... any other validation you might want to add in the future ...
    }

    /**
     * Remove an existing session
     * @param sessionId 
     */
    public async removeSession(sessionId: string): Promise<void> {
        const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);
        if (allSessions) {
          let sessions = JSON.parse(allSessions) as AuthenticationSession[];
          const sessionIdx = sessions.findIndex(s => s.id === sessionId);
          const session = sessions[sessionIdx];
          sessions.splice(sessionIdx, 1);
    
          await this.context.secrets.store(SESSIONS_SECRET_KEY, JSON.stringify(sessions));
    
          if (session) {
            this._sessionChangeEmitter.fire({ added: [], removed: [session], changed: [] });
          }      
        }
      }

    /**
     * Dispose the registered services
     */
    public async dispose() {
        this._disposable.dispose();
    }
}