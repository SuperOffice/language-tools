import * as vscode from 'vscode';
import { OnlineTreeViewDataProvider } from '../TreeviewProvider/onlineTreeViewDataProvider';
import { saveDataLocally } from './documentHelper';
import { debug } from '../extension';

interface AuthenticationContext {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    refreshToken?: string;
    idToken?: string;
    webapiUrl?: string;
}

export const onlineTreeViewDataProvider = new OnlineTreeViewDataProvider();

export let authenticationContext: AuthenticationContext | null = null;

export const getTokenSet = () => {
    return authenticationContext;
};

export const storeTokenSet = async (tokenSet: any) => {
    setAuthenticationContext(tokenSet);
    // Set the context to indicate that the user is logged in
    vscode.commands.executeCommand('setContext', 'isLoggedIn', true);
    onlineTreeViewDataProvider.setLoggedIn(true);
};

export const clearTokenSet = () => {
    authenticationContext = null;
    // Clear the context to indicate that the user is not logged in
    vscode.commands.executeCommand('setContext', 'isLoggedIn', false);
    onlineTreeViewDataProvider.setLoggedIn(false);
};

export async function setAuthenticationContext(tokenSet: any) {
    authenticationContext = {
        accessToken: tokenSet.access_token,
        tokenType: tokenSet.token_type,
        expiresIn: tokenSet.expires_in,
        refreshToken: tokenSet.refresh_token,
        idToken: tokenSet.id_token,
        webapiUrl: tokenSet.claims()['http://schemes.superoffice.net/identity/webapi_url']
    };
    await saveDataLocally(authenticationContext, 'debug.json');
}

export async function setDebugAuthenticationContext(context: AuthenticationContext) {
    authenticationContext = context;
    vscode.commands.executeCommand('setContext', 'isLoggedIn', true);
    onlineTreeViewDataProvider.setLoggedIn(true);
}