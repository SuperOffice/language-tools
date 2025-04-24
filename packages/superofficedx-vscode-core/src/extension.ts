import { ExtensionContext, workspace, window } from 'vscode';

import { TreeViewDataProvider } from './providers/treeViewDataProvider';
import { SuperofficeAuthenticationProvider } from './providers/superofficeAuthenticationProvider';

import { FileSystemHandler } from './handlers/fileSystemHandler';
import { HttpHandler } from './handlers/httpHandler';

import { FileSystemService } from './services/fileSystemService';
import { AuthenticationService } from './services/authenticationService';
import { HttpService } from './services/httpService';
import { NodeService } from './services/nodeService';

import { registerCommands } from './commands/registerCommands';
import { getCustomScheme } from './utils';
import { CustomTextDocumentContentProvider } from './providers/textDocumentContentProvider';

export async function activate(context: ExtensionContext) {
    console.log('"vscode-superoffice" extension is now active.');

    // Filesystem handler
    const fileSystemHandler = new FileSystemHandler();
    const fileSystemService = new FileSystemService(fileSystemHandler);

    // Http handler
    const httpHandler = new HttpHandler();
    const httpService = new HttpService(httpHandler, fileSystemService);

    // TextDocumentContentProvider
    const textContentProvider = new CustomTextDocumentContentProvider();
    context.subscriptions.push(workspace.registerTextDocumentContentProvider(getCustomScheme(), textContentProvider));

    // Authentication provider
    const authenticationService = new AuthenticationService();
    const authProvider = new SuperofficeAuthenticationProvider(context, fileSystemService, authenticationService, httpService);
    context.subscriptions.push(authProvider);

    // Instantiate TreeViewDataProvider
    const treeViewDataProvider = new TreeViewDataProvider(context, authProvider, httpService);
    const treeviewProvider = window.registerTreeDataProvider(TreeViewDataProvider.viewId, treeViewDataProvider);
    context.subscriptions.push(treeviewProvider);

    // Listen for authentication session changes to refresh the tree view
    authProvider.onDidChangeSessions(() => {
        treeViewDataProvider.refresh();
    });

    const nodeService = new NodeService(context, httpHandler);

    registerCommands(context, httpService, nodeService);
}

export function deactivate() { }
