import * as vscode from 'vscode';
import { readDataFromFile, writeDataToFile } from '../workspace/workspaceFileManager';
import { TokenSet } from 'openid-client';
import { scriptsTreeViewDataProvider } from '../extension';

export let authenticationContext: TokenSet | null = null;

// Private function to update the authentication context and VS Code context state
const setContext = async (tokenSet: TokenSet | null) => {
    authenticationContext = tokenSet;

    const isLoggedIn = tokenSet !== null;
    vscode.commands.executeCommand('setContext', 'isLoggedIn', isLoggedIn);
    scriptsTreeViewDataProvider.setLoggedIn(isLoggedIn);

    if (tokenSet) {
        await writeDataToFile(JSON.stringify(tokenSet), 'debug.json');
    }
};

export const storeTokenSet = async (tokenSet: TokenSet) => {
    await setContext(tokenSet);
};

export const clearTokenSet = async () => {
    await setContext(null);
};

export const setTokenSetFromFile = async () => {
    await setContext(new TokenSet(await readDataFromFile('debug.json')));
};

