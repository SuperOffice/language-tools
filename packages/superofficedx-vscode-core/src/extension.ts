import { ExtensionContext, workspace, window } from 'vscode';
import { CustomTextDocumentContentProvider } from "./providers/textDocumentContentProvider";
import { SuperofficeAuthenticationProvider } from "./providers/superofficeAuthenticationProvider";
import { TreeViewDataProvider } from "./providers/treeViewDataProvider";
import { DummyTreeViewDataProvider } from "./providers/dummyTreeViewDataProvider";
import { registerCommands } from './commands/commandRegistration';
import { getCustomScheme } from './utils';
import { createContainer } from './container/containerRegistration';
import { ConfigurationKeys } from './container/configurations/configurationKeys';

export async function activate(context: ExtensionContext): Promise<void> {
    console.log('SuperOffice Core Tools is now active.');

    // Create and configure DI container
    const container = createContainer(context);

    // Resolve services from container
    const textContentProvider = container.resolve<CustomTextDocumentContentProvider>(ConfigurationKeys.TextDocumentContentProvider);
    const authProvider = container.resolve<SuperofficeAuthenticationProvider>(ConfigurationKeys.AuthenticationProvider);
    const treeViewDataProvider = container.resolve<TreeViewDataProvider>(ConfigurationKeys.TreeViewDataProvider);
    const dummyTreeViewDataProvider = container.resolve<DummyTreeViewDataProvider>(ConfigurationKeys.DummyTreeViewDataProvider);

    // Register providers with VS Code
    context.subscriptions.push(workspace.registerTextDocumentContentProvider(getCustomScheme(), textContentProvider));
    context.subscriptions.push(authProvider);

    const treeviewProvider = window.registerTreeDataProvider(TreeViewDataProvider.viewId, treeViewDataProvider);
    const dummyTreeviewProvider = window.registerTreeDataProvider(DummyTreeViewDataProvider.viewId, dummyTreeViewDataProvider);
    context.subscriptions.push(treeviewProvider);
    context.subscriptions.push(dummyTreeviewProvider);

    // Listen for authentication session changes to refresh the tree view
    authProvider.onDidChangeSessions(() => {
        treeViewDataProvider.refresh();
    });

    // Register commands
    registerCommands(container);
}

export function deactivate(): void { }
