import * as vscode from 'vscode';
import { writeDataToFile } from '../workspace/workspaceFileManager';
import { TokenSet } from 'openid-client';
import { scriptsTreeViewDataProvider } from '../extension';

export let authenticationContext: TokenSet | null = null;
const suoFile: string = ".suo";

// Private function to update the authentication context and VS Code context state
const setContext = async (fromFile: boolean, tokenSet: TokenSet | null) => {
    authenticationContext = tokenSet;

    const isLoggedIn = tokenSet !== null;
    vscode.commands.executeCommand('setContext', 'isLoggedIn', isLoggedIn);
    scriptsTreeViewDataProvider.setLoggedIn(isLoggedIn);

    //check if tokenSet is null and check if it was already read from file
    if (tokenSet && !fromFile) {
        await writeDataToFile(JSON.stringify(tokenSet), suoFile);
    }
};

export const storeTokenSet = async (tokenSet: TokenSet) => {
    await setContext(false, tokenSet);
};

export const clearTokenSet = async () => {
    await setContext(false, null);
};

export const setTokenSetFromFile = async (tokenSet: TokenSet) => {
    await setContext(true, tokenSet);
};