import * as vscode from 'vscode';
import { superofficeLogin } from './Authentication/login';
import { clearTokenSet, onlineTreeViewDataProvider } from './Helpers/tokenHelper';
import { MyTreeDataProvider } from './TreeviewProvider/TestProvider';
import { ScriptEntity } from './Api/getScripts';

const openedScripts: Map<string, vscode.TextDocument> = new Map();

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

    const previewScriptCommand = vscode.commands.registerCommand('vscode-superoffice.showScript', async (script: ScriptEntity) => {
        if (openedScripts.has(script.PrimaryKey)) {
            // Script is already open, switch to its tab
            const doc = openedScripts.get(script.PrimaryKey);
            if (doc) {
                vscode.window.showTextDocument(doc);
                return;  // Early exit as we don't need to open it again
            }
        }

        const jsonString = JSON.stringify(script, null, 2);  // Pretty print JSON
        const document = await vscode.workspace.openTextDocument({ content: jsonString, language: 'json' });
        vscode.window.showTextDocument(document);
        openedScripts.set(script.PrimaryKey, document);
    });

    const helloWorldCommand = vscode.commands.registerCommand('vscode-superoffice.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from vscode-superoffice!');
    });

    context.subscriptions.push(signInCommand, signOutCommand, helloWorldCommand, previewScriptCommand);
}

export function deactivate() {}
