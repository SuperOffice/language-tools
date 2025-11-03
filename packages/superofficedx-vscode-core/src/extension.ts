import { ExtensionContext, workspace, window } from 'vscode';

import { TreeViewDataProvider, SuperofficeAuthenticationProvider, CustomTextDocumentContentProvider } from './providers';
import { registerCommands } from './commands';
import { getCustomScheme } from './utils';
import { createContainer, ServiceKeys } from './container';

export async function activate(context: ExtensionContext): Promise<void> {
    console.log('"vscode-superoffice" extension is now active.');

    // Create and configure DI container
    const container = createContainer(context);

    // Resolve services from container
    const textContentProvider = container.resolve<CustomTextDocumentContentProvider>(ServiceKeys.TextDocumentContentProvider);
    const authProvider = container.resolve<SuperofficeAuthenticationProvider>(ServiceKeys.AuthenticationProvider);
    const treeViewDataProvider = container.resolve<TreeViewDataProvider>(ServiceKeys.TreeViewDataProvider);

    // Register providers with VS Code
    context.subscriptions.push(workspace.registerTextDocumentContentProvider(getCustomScheme(), textContentProvider));
    context.subscriptions.push(authProvider);

    const treeviewProvider = window.registerTreeDataProvider(TreeViewDataProvider.viewId, treeViewDataProvider);
    context.subscriptions.push(treeviewProvider);

    // Listen for authentication session changes to refresh the tree view
    authProvider.onDidChangeSessions(() => {
        treeViewDataProvider.refresh();
    });

    // Register commands
    registerCommands(container);
}

export function deactivate(): void { }
