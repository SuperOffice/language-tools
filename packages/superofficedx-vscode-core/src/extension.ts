import { ExtensionContext, workspace, window } from 'vscode';
import { CustomTextDocumentContentProvider } from "./providers/textDocumentContentProvider";
import { SuperofficeAuthenticationProvider } from "./providers/superofficeAuthenticationProvider";
import { TreeViewDataProvider } from "./providers/treeViewDataProvider";
import { ExtraTablesTreeViewDataProvider } from "./providers/extraTablesTreeViewDataProvider";
import { SuperofficeDocumentContentProvider } from "./providers/superofficeDocumentContentProvider";
import { SourceControlService } from "./services/sourceControlService";
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
    const extraTablesTreeViewDataProvider = container.resolve<ExtraTablesTreeViewDataProvider>(ConfigurationKeys.ExtraTablesTreeViewDataProvider);

    // Phase 2: Resolve source control providers and service
    const superofficeDocumentProvider = container.resolve<SuperofficeDocumentContentProvider>(ConfigurationKeys.SuperofficeDocumentContentProvider);
    const sourceControlService = container.resolve<SourceControlService>(ConfigurationKeys.SourceControlService);

    // Register providers with VS Code
    context.subscriptions.push(workspace.registerTextDocumentContentProvider(getCustomScheme(), textContentProvider));
    context.subscriptions.push(authProvider);

    // Phase 2: Register SuperOffice document content providers
    context.subscriptions.push(workspace.registerTextDocumentContentProvider('superoffice-script', superofficeDocumentProvider));
    context.subscriptions.push(workspace.registerTextDocumentContentProvider('superoffice-original', superofficeDocumentProvider));

    const treeviewProvider = window.registerTreeDataProvider(TreeViewDataProvider.viewId, treeViewDataProvider);
    const extraTablesTreeviewProvider = window.registerTreeDataProvider(ExtraTablesTreeViewDataProvider.viewId, extraTablesTreeViewDataProvider);
    context.subscriptions.push(treeviewProvider);
    context.subscriptions.push(extraTablesTreeviewProvider);

    // Listen for authentication session changes to refresh the tree view
    authProvider.onDidChangeSessions(() => {
        treeViewDataProvider.refresh();
        extraTablesTreeViewDataProvider.refresh();
    });

    // Phase 2: Initialize source control
    try {
        await sourceControlService.initialize();
        console.log('SuperOffice Source Control initialized successfully');
    } catch (error) {
        console.error('Failed to initialize SuperOffice Source Control:', error);
    }

    // Register commands
    registerCommands(container);
}

export function deactivate(): void {
    console.log('SuperOffice Core Tools is deactivating...');
    // Any cleanup would go here
}
