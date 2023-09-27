import * as vscode from 'vscode';
import { OnlineTreeViewDataProvider } from '../TreeviewProvider/onlineTreeViewDataProvider';

export const onlineTreeViewDataProvider = new OnlineTreeViewDataProvider();
let currentTokenSet: any = null; // Store the token set here

export const getTokenSet = () => {
    return currentTokenSet;
};

export const storeTokenSet = (tokenSet: any) => {
    currentTokenSet = tokenSet;

    // Set the context to indicate that the user is logged in
    vscode.commands.executeCommand('setContext', 'isLoggedIn', true);
    onlineTreeViewDataProvider.setLoggedIn(true);
    onlineTreeViewDataProvider.refresh();
};

export const clearTokenSet = () => {
    currentTokenSet = null;

    // Clear the context to indicate that the user is not logged in
    vscode.commands.executeCommand('setContext', 'isLoggedIn', false);
    onlineTreeViewDataProvider.setLoggedIn(false);
    onlineTreeViewDataProvider.refresh();
};