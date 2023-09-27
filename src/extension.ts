import * as vscode from 'vscode';
import { SuperOfficeDataProvider } from './superOfficeDataProvider';
import { superofficeLogin } from './SuperOfficeCommands/login';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vscode-superoffice" is now active!');

    const dataProvider = new SuperOfficeDataProvider();
    context.subscriptions.push(vscode.window.registerTreeDataProvider('OnlineTreeView', dataProvider));
    
    const signInCommand = vscode.commands.registerCommand('vscode-superoffice.signIn', async () => {
        
        if(await superofficeLogin()){
             // Update the login state of the data provider and refresh the tree view
             dataProvider.setLoggedIn(true);

             // Optionally, if you still want to use context for other purposes
             vscode.commands.executeCommand('setContext', 'isLoggedIn', true);
        }
        
    });

    const signOutCommand = vscode.commands.registerCommand('vscode-superoffice.signOut', () => {
        // Implement the sign-out logic
        vscode.window.showInformationMessage('Signed Out!');

        // Update the login state of the data provider and refresh the tree view
        dataProvider.setLoggedIn(false);

        // Optionally, if you still want to use context for other purposes
         vscode.commands.executeCommand('setContext', 'isLoggedIn', false);
    });

    const helloWorldCommand = vscode.commands.registerCommand('vscode-superoffice.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from vscode-superoffice!');
    });

    context.subscriptions.push(signInCommand, signOutCommand, helloWorldCommand);
}

export function deactivate() {}
