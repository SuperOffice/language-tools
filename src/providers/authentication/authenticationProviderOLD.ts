// import * as vscode from 'vscode';
// import { authenticate, exchangeRefreshToken } from '../services/authenticationService';
// import { TokenSet } from 'openid-client';
// import { SuperOfficeAuthenticationSession, UserClaims } from '../types/types';
// import { getTenantState } from '../services/systemService';
// import { ENVIRONMENTS } from '../config';
// import { treeViewDataProvider } from '../extension';

// let contextIdentifier: string | null = null;
// export let webapiUrl: string | null = null;

// export class SuperofficeAuthenticationProvider implements vscode.AuthenticationProvider {
//     private _sessions: vscode.AuthenticationSession[] = [];
//     private _onDidChangeSessions: vscode.EventEmitter<vscode.AuthenticationProviderAuthenticationSessionsChangeEvent> = new vscode.EventEmitter<vscode.AuthenticationProviderAuthenticationSessionsChangeEvent>();
//     readonly onDidChangeSessions: vscode.Event<vscode.AuthenticationProviderAuthenticationSessionsChangeEvent> = this._onDidChangeSessions.event;

//     public static readonly authenticationProviderId = 'superofficeAuthentication';

//     public authenticated: boolean = false;

//     async getSessions(): Promise<vscode.AuthenticationSession[]> {
//         return this._sessions;
//     }

//    async createSession(scopes: string[]): Promise<vscode.AuthenticationSession> {
//         try {
//             const environment = await this.selectEnvironment();

//             //Run Authorization Code Flow with PKCE
//             const tokenSet = await authenticate(environment) as TokenSet;
//             this.validateTokenSet(tokenSet);

//             //Get Claims and tenant Status
//             const claims: UserClaims = tokenSet.claims() as UserClaims;
//             contextIdentifier = `${claims['http://schemes.superoffice.net/identity/ctx']}`;

//             const state = await getTenantState(environment, contextIdentifier);
//             if(!state.IsRunning){
//                 throw new Error('The tenant is not running');
//             }

//             const newSession: SuperOfficeAuthenticationSession = {
//                 id: contextIdentifier, 
//                 accessToken: tokenSet.access_token!, 
//                 refreshToken: tokenSet.refresh_token,
//                 //expiresAt: Date.now() + 3600 * 1000,
//                 account: {
//                     label: 'userLabel', 
//                     id: 'userId'         
//                 }, 
//                 scopes: scopes,
//                 claims: claims
//             };
            
//             this._sessions.push(newSession);
//             this._onDidChangeSessions.fire({
//                 added: [newSession],
//                 removed: [],
//                 changed: []
//             });
            
//             //Update treeview
//             this.setLoggedIn(true);

//             return newSession;
//         } catch (error) {
//             throw error;  // Re-throwing the error to ensure VS Code is aware of the failed authentication attempt.
//         }
//     }

//     async removeSession(): Promise<void> {
//         const sessionIndex = this._sessions.findIndex(session => session.id === contextIdentifier);
//         if (sessionIndex !== -1) {
//             const removedSession = this._sessions[sessionIndex];
//             this._sessions.splice(sessionIndex, 1);
//             this._onDidChangeSessions.fire({ 
//                 added: [],
//                 removed: [removedSession],  // Provide the removed AuthenticationSession
//                 changed: []
//             });
//         }
//         //Update treeview
//         this.setLoggedIn(false);
//     }

//     async getSessionById(sessionId: string | null): Promise<SuperOfficeAuthenticationSession | null> {
//         return this._sessions.find(session => session.id === sessionId) || null;
//     }

//     async getCurrentSession(): Promise<SuperOfficeAuthenticationSession | null> {
//         return this.getSessionById(contextIdentifier);
//     }

//     async refreshAccessToken(session: SuperOfficeAuthenticationSession): Promise<SuperOfficeAuthenticationSession>{    
//         if (!session) {
//             throw new Error('Session not found');
//         }
    
//         // Step 2: Use the exchangeRefreshToken() method to get a new access_token
//         const newTokenSet = await exchangeRefreshToken(session);
    
//         if (!newTokenSet.access_token) {
//             throw new Error('Failed to get a new access token');
//         }
    
//         // Step 3: Create a new session object with the updated token
//         const newSession: SuperOfficeAuthenticationSession = {
//             ...session,  // copy all properties of the old session
//             accessToken: newTokenSet.access_token  // overwrite the accessToken property
//         };
    
//         // Step 4: Find the index of the old session and replace it with the new session
//         const sessionIndex = this._sessions.findIndex(s => s.id === session.id);
//         if (sessionIndex !== -1) {
//             this._sessions[sessionIndex] = newSession;
//         }
    
//         // Step 4: Optionally fire the this._onDidChangeSessions event
//         this._onDidChangeSessions.fire({
//             added: [],
//             removed: [],
//             changed: [session]
//         });
//         return newSession;
//     }
    
//     async selectEnvironment(): Promise<string> {
//         const environment = await vscode.window.showQuickPick(ENVIRONMENTS, {
//             placeHolder: 'Select an environment',
//             canPickMany: false
//         });
        
//         if (!environment) {
//             throw new Error('Environment selection was canceled by the user.');
//         }
        
//         return environment;
//     }

//     async validateTokenSet(tokenSet: TokenSet): Promise<void> { // You might need to define the type TokenSetType
//         if (!tokenSet.access_token) {
//             throw new Error('Access token is missing from the authentication response.');
//         }

//         // ... any other validation you might want to add in the future ...
//     }

//     // This method is used to update the login status and refresh the tree
//     public setLoggedIn(state: boolean): void {
//         this.authenticated = state;
//         //Needed to help the package.json figure out if you are logged inn or not
//         vscode.commands.executeCommand('setContext', 'authenticated', state);
//         treeViewDataProvider.refresh();
//     }

//     public get isLoggedIn(): boolean {
//         return this.authenticated;
//     }
// }