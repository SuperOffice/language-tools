import * as vscode from 'vscode';
import { TreeViewDataProvider } from './providers/views/treeViewDataProvider';
import { registerCommands } from './commands';
import { VirtualFileSystemProvider } from './workspace/virtualWorkspaceFileManager';
import { CONFIG_COMMANDS } from './config';
import { SuperofficeAuthenticationProvider } from './providers/authentication/authenticationProvider';
import { WebViewDataProvider } from './providers/views/webViewDataProvider';
import { startLanguageFeatures } from './languageFeatures';

//Volar
import { createLabsInfo } from '@volar/vscode';
import * as serverProtocol from '@volar/language-server/protocol';

export const treeViewDataProvider = new TreeViewDataProvider();
export const vfsProvider = new VirtualFileSystemProvider();


export async function activate(context: vscode.ExtensionContext) {
    console.log('"vscode-superoffice" extension is now active.');

    const languageClient = await startLanguageFeatures(context);      

    // Register Virtual File System Provider
    const vfsProviderRegistration = vscode.workspace.registerFileSystemProvider(CONFIG_COMMANDS.VFS_SCHEME, vfsProvider, { isCaseSensitive: true });
    // Register Tree View Data Provider
    const treeviewProvider = vscode.window.registerTreeDataProvider(TreeViewDataProvider.viewId, treeViewDataProvider);
    
    // Register Authentication Provider
    context.subscriptions.push(
		new SuperofficeAuthenticationProvider(context)
	);

    // Register webview
    const webviewViewProvider = new WebViewDataProvider(context.extensionUri);
    vscode.window.registerWebviewViewProvider(WebViewDataProvider.viewId, webviewViewProvider);

    //Register Commands
    await registerCommands(context);
    // Add to the extension context's subscriptions
    context.subscriptions.push(vfsProviderRegistration, treeviewProvider);

    //Volar labs
	const labsInfo = createLabsInfo(serverProtocol);
	labsInfo.addLanguageClient(languageClient);
	return labsInfo.extensionExports;
}

export function deactivate() {}
