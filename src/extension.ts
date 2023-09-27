import * as vscode from 'vscode';
import { superofficeLogin } from './Authentication/login';
import { clearTokenSet, onlineTreeViewDataProvider } from './Helpers/tokenHelper';
import { MyTreeDataProvider } from './TreeviewProvider/TestProvider';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vscode-superoffice" is now active!');

    context.subscriptions.push(vscode.window.registerTreeDataProvider('OnlineTreeView', onlineTreeViewDataProvider));
    
    const treeDataProvider = new MyTreeDataProvider();
    context.subscriptions.push(vscode.window.registerTreeDataProvider('SuperOfficeView', treeDataProvider));
    //treeDataProvider.fetchData();

    const signInCommand = vscode.commands.registerCommand('vscode-superoffice.signIn', async () => {
        await superofficeLogin();
        vscode.window.showInformationMessage('Signed Inn!');
    });

    const signOutCommand = vscode.commands.registerCommand('vscode-superoffice.signOut', () => {
        clearTokenSet();
        vscode.window.showInformationMessage('Signed Out!');
    });

    const helloWorldCommand = vscode.commands.registerCommand('vscode-superoffice.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from vscode-superoffice!');
    });

    context.subscriptions.push(signInCommand, signOutCommand, helloWorldCommand);
}

export function deactivate() {}
