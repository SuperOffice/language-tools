import * as vscode from 'vscode';
import { SuperOfficeDataProvider } from '../superOfficeDataProvider';

export const dataProvider = new SuperOfficeDataProvider();
let currentTokenSet: any = null; // Store the token set here

export const getTokenSet = () => {
    return currentTokenSet;
};

export const storeTokenSet = (tokenSet: any) => {
    currentTokenSet = tokenSet;
    
    // Set the context to indicate that the user is logged in
    vscode.commands.executeCommand('setContext', 'isLoggedIn', true);
    dataProvider.setLoggedIn(true);
};

export const clearTokenSet = () => {
    currentTokenSet = null;

    // Clear the context to indicate that the user is not logged in
    vscode.commands.executeCommand('setContext', 'isLoggedIn', false);
    dataProvider.setLoggedIn(false);
};