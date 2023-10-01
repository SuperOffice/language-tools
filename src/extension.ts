import * as vscode from 'vscode';
import { ScriptsTreeViewDataProvider } from './providers/scriptsTreeViewDataProvider';
import { VFS_SCHEME, downloadScriptCommand, previewScriptCommand, showScriptInfoCommand, signInCommand, signOutCommand } from './commands';
import { VirtualFileSystemProvider } from './workspace/virtualWorkspaceFileManager';

export const scriptsTreeViewDataProvider = new ScriptsTreeViewDataProvider();
export const vfsProvider = new VirtualFileSystemProvider();

export function activate(context: vscode.ExtensionContext) {
    console.log('"vscode-superoffice" extension is now active.');

    // Register Virtual File System Provider
    const vfsProviderRegistration = vscode.workspace.registerFileSystemProvider(VFS_SCHEME, vfsProvider, { isCaseSensitive: true });
    // Register Tree View Data Provider
    const scriptsProvider = vscode.window.registerTreeDataProvider('scriptsTreeView', scriptsTreeViewDataProvider);

    // Add to the extension context's subscriptions
    context.subscriptions.push(scriptsProvider, signInCommand, signOutCommand, showScriptInfoCommand, previewScriptCommand, downloadScriptCommand, vfsProviderRegistration);
}

export function deactivate() {}
