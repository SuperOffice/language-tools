import * as vscode from 'vscode';
import { Node, ScriptsTreeViewDataProvider } from './providers/scriptsTreeViewDataProvider';
import { previewScriptCommand, showScriptInfoCommand, signInCommand, signOutCommand } from './commands';

export const scriptsTreeViewDataProvider = new ScriptsTreeViewDataProvider();

export function activate(context: vscode.ExtensionContext) {
    console.log('"vscode-superoffice" extension is now active.');

    // Register Tree View Data Provider
    const scriptsProvider = vscode.window.registerTreeDataProvider('scriptsTreeView', scriptsTreeViewDataProvider);

    // Add to the extension context's subscriptions
    context.subscriptions.push(scriptsProvider, signInCommand, signOutCommand, showScriptInfoCommand, previewScriptCommand);
}

export function deactivate() {}
