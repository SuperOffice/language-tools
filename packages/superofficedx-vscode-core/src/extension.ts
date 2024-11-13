import * as vscode from 'vscode';
import { TreeViewDataProvider } from './providers/treeViewDataProvider';
import { initializeCommands } from './commands/initilizeCommands';
import { VirtualFileSystemProvider } from './workspace/virtualWorkspaceFileManager';
//import { Commands } from './config';
// import { SuperofficeAuthenticationProvider } from './providers/authentication/authenticationProvider';
// import { WebViewDataProvider } from './providers/views/webViewDataProvider';
import { startLanguageFeatures } from './languageFeatures';
import { FileSystemHandler } from './handlers/fileSystemHandler';
import { FileSystemService } from './services/fileSystemService';
import { SuperofficeAuthenticationProvider } from './providers/superofficeAuthenticationProvider';
import { AuthenticationService } from './services/authenticationService';
import { HttpHandler } from './handlers/httpHandler';
import { HttpService } from './services/httpService';
import { Commands } from './constants';

//Volar
// import { createLabsInfo } from '@volar/vscode';
// import * as serverProtocol from '@volar/language-server/protocol';


export async function activate(context: vscode.ExtensionContext) {
    console.log('"vscode-superoffice" extension is now active.');

    //const languageClient = await startLanguageFeatures(context);      

    // Register webview
    // const webviewViewProvider = new WebViewDataProvider(context.extensionUri);
    // vscode.window.registerWebviewViewProvider(WebViewDataProvider.viewId, webviewViewProvider);
    
    // Virtual filesystem provider
    const vfsProvider = new VirtualFileSystemProvider();
    const vfsProviderRegistration = vscode.workspace.registerFileSystemProvider(Commands.VFS_SCHEME, vfsProvider, { isCaseSensitive: true });
    context.subscriptions.push(vfsProviderRegistration);

    // Http handler
    const httpHandler = new HttpHandler();
    const httpService = new HttpService(httpHandler);

    // Filesystem handler
    const fileSystemHandler = new FileSystemHandler();
    const fileSystemService = new FileSystemService(fileSystemHandler);
    
    // Authentication provider
    const authenticationService = new AuthenticationService();
    const authProvider = new SuperofficeAuthenticationProvider(context, fileSystemService, authenticationService, httpService);
    context.subscriptions.push(authProvider);
    
    // Instantiate TreeViewDataProvider with the authentication provider
    const treeViewDataProvider = new TreeViewDataProvider(authProvider, httpService);
    const treeviewProvider = vscode.window.registerTreeDataProvider(TreeViewDataProvider.viewId, treeViewDataProvider);
    context.subscriptions.push(treeviewProvider);
    
    // Listen for authentication session changes to refresh the tree view
    authProvider.onDidChangeSessions(() => {
        treeViewDataProvider.refresh();
    });

    initializeCommands(context, authProvider, httpService, vfsProvider);
    

    //Volar labs
	// const labsInfo = createLabsInfo(serverProtocol);
	// labsInfo.addLanguageClient(languageClient);
	// return labsInfo.extensionExports;
}

export function deactivate() {}
