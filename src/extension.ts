import * as vscode from 'vscode';
import { TreeViewDataProvider } from './providers/views/treeViewDataProvider';
import { downloadScriptCommand, executeScriptCommand, previewScriptCommand, showScriptInfoCommand, signInCommand, signOutCommand } from './commands';
import { VirtualFileSystemProvider } from './workspace/virtualWorkspaceFileManager';
import { CONFIG_COMMANDS } from './config';
import { SuperofficeAuthenticationProvider } from './providers/authenticationProvider';
import { WebViewDataProvider } from './providers/views/webViewDataProvider';

export const treeViewDataProvider = new TreeViewDataProvider();
export const vfsProvider = new VirtualFileSystemProvider();
export const superofficeAuthenticationProvider = new SuperofficeAuthenticationProvider();

export function activate(context: vscode.ExtensionContext) {
    console.log('"superoffice-vscode" extension is now active.');

    // Register Virtual File System Provider
    const vfsProviderRegistration = vscode.workspace.registerFileSystemProvider(CONFIG_COMMANDS.VFS_SCHEME, vfsProvider, { isCaseSensitive: true });
    // Register Tree View Data Provider
    const scriptsProvider = vscode.window.registerTreeDataProvider(TreeViewDataProvider.viewId, treeViewDataProvider);
    // Register Authentication Provider
    const authentcationProvider = vscode.authentication.registerAuthenticationProvider(SuperofficeAuthenticationProvider.authenticationProviderId, 'superofficeAuthenticationProvider', superofficeAuthenticationProvider);

    //DEV
    const webviewViewProvider = new WebViewDataProvider(context.extensionUri);
    const webviewProvider = vscode.window.registerWebviewViewProvider(WebViewDataProvider.viewId, webviewViewProvider);
    //const webviewProvider = vscode.window.registerWebviewViewProvider('scriptsWebview', webviewViewProvider);

    // Add to the extension context's subscriptions
    context.subscriptions.push(scriptsProvider, signInCommand, signOutCommand, showScriptInfoCommand, previewScriptCommand, downloadScriptCommand, executeScriptCommand, vfsProviderRegistration, authentcationProvider, webviewProvider);
}

export function deactivate() {}
