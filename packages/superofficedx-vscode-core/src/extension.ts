import * as vscode from 'vscode';
import { FileExtensions } from './constants';

import { TreeViewDataProvider } from './providers/treeViewDataProvider';
import { SuperofficeAuthenticationProvider } from './providers/superofficeAuthenticationProvider';
import { VirtualFileSystemProvider } from './providers/virtualFileSystemProvider';

import { FileSystemHandler } from './handlers/fileSystemHandler';
import { HttpHandler } from './handlers/httpHandler';

import { FileSystemService } from './services/fileSystemService';
import { AuthenticationService } from './services/authenticationService';
import { HttpService } from './services/httpService';
import { NodeService } from './services/nodeService';

import { registerCommands } from './commands/registerCommands';

export async function activate(context: vscode.ExtensionContext) {
    console.log('"vscode-superoffice" extension is now active.');

    // Virtual filesystem provider
    const vfsProvider = new VirtualFileSystemProvider();
    const vfsProviderRegistration = vscode.workspace.registerFileSystemProvider(FileExtensions.VFS_SCHEME, vfsProvider, { isCaseSensitive: true });
    context.subscriptions.push(vfsProviderRegistration);

    // Filesystem handler
    const fileSystemHandler = new FileSystemHandler();
    const fileSystemService = new FileSystemService(fileSystemHandler);

    // Http handler
    const httpHandler = new HttpHandler();
    const httpService = new HttpService(httpHandler, fileSystemService);
  
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

    const nodeService = new NodeService(httpHandler);

    registerCommands(context, authProvider, httpService, vfsProvider, nodeService);
}

export function deactivate() {}
