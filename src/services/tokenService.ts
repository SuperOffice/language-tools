import * as vscode from 'vscode';
import { saveDataLocally } from '../workspace/workspaceFileManager';
import { TokenSet } from 'openid-client';
import { onlineTreeViewDataProvider } from '../extension';

export let authenticationContext: TokenSet | null = null;

export const getTokenSet = () => {
    return authenticationContext;
};

export const storeTokenSet = async (tokenSet: TokenSet) => {
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

export async function setAuthenticationContext(tokenSet: TokenSet) {
    authenticationContext = tokenSet;
    await saveDataLocally(authenticationContext, 'debug.json');
}

export async function setDebugAuthenticationContext(context: TokenSet) {
    authenticationContext = context;
    vscode.commands.executeCommand('setContext', 'isLoggedIn', true);
    onlineTreeViewDataProvider.setLoggedIn(true);
}