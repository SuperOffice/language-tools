import * as vscode from 'vscode';
import { superofficeLogin } from './services/authService';
import { clearTokenSet } from './services/tokenService';
import { MyTreeDataProvider } from './TreeviewProvider/TestProvider';
import { ScriptInfo } from './services/types';
import { Node, OnlineTreeViewDataProvider } from './providers/onlineTreeViewDataProvider';
import { getScriptEntity } from './services/scriptService';

const openedScripts: Map<string, vscode.TextDocument> = new Map();
export const onlineTreeViewDataProvider = new OnlineTreeViewDataProvider();

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vscode-superoffice" is now active!');

    context.subscriptions.push(vscode.window.registerTreeDataProvider('OnlineTreeView', onlineTreeViewDataProvider));
    
    const treeDataProvider = new MyTreeDataProvider();
    context.subscriptions.push(vscode.window.registerTreeDataProvider('SuperOfficeView', treeDataProvider));

    const signInCommand = vscode.commands.registerCommand('vscode-superoffice.signIn', async () => {
        await superofficeLogin();
        vscode.window.showInformationMessage('Signed Inn!');
    });

    const signOutCommand = vscode.commands.registerCommand('vscode-superoffice.signOut', () => {
        clearTokenSet();
        vscode.window.showInformationMessage('Signed Out!');
    });

    const showScriptInfo = vscode.commands.registerCommand('vscode-superoffice.showScriptInfo', async (script: ScriptInfo) => {
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
    
    const previewScript = vscode.commands.registerCommand('vscode-superoffice.previewScript', async (node: Node) => {
        // 'node' here is the clicked item
        if (node && node.scriptInfo) {
            const scriptInfo: ScriptInfo = node.scriptInfo;
            try {
                const scriptEntity = await getScriptEntity(scriptInfo.PrimaryKey);
                const document = await vscode.workspace.openTextDocument({ content: scriptEntity, language: 'txt' });
                vscode.window.showTextDocument(document);
            } catch (err) {
                vscode.window.showErrorMessage(`Failed to preview script: ${err}`);
            }
        }
    });

   const helloWorldCommand = vscode.commands.registerCommand('vscode-superoffice.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from vscode-superoffice!');
    });

    context.subscriptions.push(signInCommand, signOutCommand, helloWorldCommand, showScriptInfo, previewScript);
}

export function deactivate() {}
