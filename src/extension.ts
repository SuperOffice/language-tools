import * as vscode from 'vscode';
import { ScriptsTreeViewDataProvider } from './providers/scriptsTreeViewDataProvider';
import { downloadScriptCommand, executeScriptCommand, previewScriptCommand, showScriptInfoCommand, signInCommand, signOutCommand } from './commands';
import { VirtualFileSystemProvider } from './workspace/virtualWorkspaceFileManager';
import { CONFIG_COMMANDS } from './config';
import { SuperofficeAuthenticationProvider } from './providers/authenticationProvider';
import { WebviewViewProvider } from './dev/webviewViewProvider';

export const scriptsTreeViewDataProvider = new ScriptsTreeViewDataProvider();
export const vfsProvider = new VirtualFileSystemProvider();
export const superofficeAuthenticationProvider = new SuperofficeAuthenticationProvider();
const webviewViewProvider = new WebviewViewProvider();

export function activate(context: vscode.ExtensionContext) {
    console.log('"superoffice-vscode" extension is now active.');

    // Register Virtual File System Provider
    const vfsProviderRegistration = vscode.workspace.registerFileSystemProvider(CONFIG_COMMANDS.VFS_SCHEME, vfsProvider, { isCaseSensitive: true });
    // Register Tree View Data Provider
    const scriptsProvider = vscode.window.registerTreeDataProvider('scriptsTreeView', scriptsTreeViewDataProvider);
    // Register Authentication Provider
    const authentcationProvider = vscode.authentication.registerAuthenticationProvider('superofficeAuthentication', 'superofficeAuthenticationProvider', superofficeAuthenticationProvider);

    //DEV
    const webviewProvider = vscode.window.registerWebviewViewProvider('scriptsWebview', webviewViewProvider);

    // Add to the extension context's subscriptions
    context.subscriptions.push(scriptsProvider, signInCommand, signOutCommand, showScriptInfoCommand, previewScriptCommand, downloadScriptCommand, executeScriptCommand, vfsProviderRegistration, authentcationProvider, webviewProvider);
}

export function deactivate() {}
