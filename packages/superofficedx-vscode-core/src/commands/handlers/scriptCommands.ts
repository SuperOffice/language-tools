import { ExtensionContext, commands, Uri, window } from 'vscode';
import { DIContainer, ConfigurationKeys } from '../../container';
import { CommandKeys } from '../commandKeys';
import { Node, SuperofficeAuthenticationProvider } from '../../providers';
import { IHttpService, INodeService } from '../../services';
import { ScriptInfo } from '../../types';

// Import strict interfaces and types
import {
    ScriptPreviewParams,
    ScriptExecuteParams,
    ScriptExecuteLocallyParams,
    ScriptDownloadParams,
    ScriptDownloadFolderParams,
    ScriptUploadParams,
    ScriptViewDetailsParams,
    CommandResult,
    IScriptCommands,
    ScriptExecutionResult,
    ScriptDownloadResult
} from '../types';

// Import implementations for commands
import { download, downloadFolder, execute, executeLocally, upload, viewDetails, preview } from '../implementations/script';

/**
 * Strict script command factory with custom authentication provider
 * Implements the IScriptCommands interface for type safety
 */
class ScriptCommandFactory implements IScriptCommands {
    constructor(private container: DIContainer) { }

    // ========================================================================
    // Strict Interface Methods (return CommandResult)
    // ========================================================================

    async preview(params: ScriptPreviewParams): Promise<CommandResult<void>> {
        return await preview(params);
    }

    async execute(params: ScriptExecuteParams): Promise<CommandResult<ScriptExecutionResult>> {
        return await execute(params);
    }

    async executeLocally(params: ScriptExecuteLocallyParams): Promise<CommandResult<ScriptExecutionResult>> {
        return await executeLocally(params);
    }

    async download(params: ScriptDownloadParams): Promise<CommandResult<ScriptDownloadResult>> {
        return await download(params);
    }

    async downloadFolder(params: ScriptDownloadFolderParams): Promise<CommandResult<ScriptDownloadResult>> {
        return await downloadFolder(params);
    }

    async upload(params: ScriptUploadParams): Promise<CommandResult<void>> {
        return await upload(params);
    }

    async viewDetails(params: ScriptViewDetailsParams): Promise<CommandResult<void>> {
        return await viewDetails(params);
    }

    // ========================================================================
    // VS Code Command Wrappers (with custom auth provider injection)
    // ========================================================================

    createPreviewCommand() {
        const httpService = this.container.resolve<IHttpService>(ConfigurationKeys.HttpService);
        const context = this.container.resolve<ExtensionContext>(ConfigurationKeys.ExtensionContext);
        const authProvider = this.container.resolve<SuperofficeAuthenticationProvider>(ConfigurationKeys.AuthenticationProvider);

        return async (node: Node): Promise<void> => {
            const result = await this.preview({ node, context, httpService, authProvider });

            if (!result.success) {
                window.showErrorMessage(result.message || 'Preview failed');
                return;
            }

            if (result.message) {
                window.showInformationMessage(result.message);
            }
        };
    }

    createExecuteCommand() {
        const httpService = this.container.resolve<IHttpService>(ConfigurationKeys.HttpService);
        const context = this.container.resolve<ExtensionContext>(ConfigurationKeys.ExtensionContext);
        const authProvider = this.container.resolve<SuperofficeAuthenticationProvider>(ConfigurationKeys.AuthenticationProvider);

        return async (fileUri: Uri): Promise<void> => {
            const result = await this.execute({ fileUri, context, httpService, authProvider });

            if (!result.success) {
                window.showErrorMessage(result.message || 'Execution failed');
                return;
            }

            if (result.message) {
                window.showInformationMessage(result.message);
            }
        };
    }

    createExecuteLocallyCommand() {
        const nodeService = this.container.resolve<INodeService>(ConfigurationKeys.NodeService);
        const context = this.container.resolve<ExtensionContext>(ConfigurationKeys.ExtensionContext);
        const authProvider = this.container.resolve<SuperofficeAuthenticationProvider>(ConfigurationKeys.AuthenticationProvider);

        return async (fileUri: Uri): Promise<void> => {
            const result = await this.executeLocally({ fileUri, context, nodeService, authProvider });

            if (!result.success) {
                window.showErrorMessage(result.message || 'Local execution failed');
                return;
            }

            if (result.message) {
                window.showInformationMessage(result.message);
            }
        };
    }

    createDownloadCommand() {
        const httpService = this.container.resolve<IHttpService>(ConfigurationKeys.HttpService);
        const context = this.container.resolve<ExtensionContext>(ConfigurationKeys.ExtensionContext);
        const authProvider = this.container.resolve<SuperofficeAuthenticationProvider>(ConfigurationKeys.AuthenticationProvider);

        return async (node: Node): Promise<void> => {
            const result = await this.download({ node, context, httpService, authProvider });

            if (!result.success) {
                window.showErrorMessage(result.message || 'Download failed');
                return;
            }

            if (result.message) {
                window.showInformationMessage(result.message);
            }
        };
    }

    createDownloadFolderCommand() {
        const httpService = this.container.resolve<IHttpService>(ConfigurationKeys.HttpService);
        const context = this.container.resolve<ExtensionContext>(ConfigurationKeys.ExtensionContext);
        const authProvider = this.container.resolve<SuperofficeAuthenticationProvider>(ConfigurationKeys.AuthenticationProvider);

        return async (node: Node): Promise<void> => {
            const result = await this.downloadFolder({ node, context, httpService, authProvider });

            if (!result.success) {
                window.showErrorMessage(result.message || 'Folder download failed');
                return;
            }

            if (result.message) {
                window.showInformationMessage(result.message);
            }
        };
    }

    createUploadCommand() {
        const httpService = this.container.resolve<IHttpService>(ConfigurationKeys.HttpService);
        const context = this.container.resolve<ExtensionContext>(ConfigurationKeys.ExtensionContext);
        const authProvider = this.container.resolve<SuperofficeAuthenticationProvider>(ConfigurationKeys.AuthenticationProvider);

        return async (fileUri: Uri): Promise<void> => {
            const result = await this.upload({ fileUri, context, httpService, authProvider });

            if (!result.success) {
                window.showErrorMessage(result.message || 'Upload failed');
                return;
            }

            if (result.message) {
                window.showInformationMessage(result.message);
            }
        };
    }

    createViewDetailsCommand() {
        return async (scriptInfo: ScriptInfo): Promise<void> => {
            const result = await this.viewDetails({ scriptInfo });

            if (!result.success) {
                window.showErrorMessage(result.message || 'View details failed');
                return;
            }

            if (result.message) {
                window.showInformationMessage(result.message);
            }
        };
    }
}

/**
 * Register script commands using the strict factory with custom authentication
 */
export function registerScriptCommands(container: DIContainer): void {
    const context = container.resolve<ExtensionContext>(ConfigurationKeys.ExtensionContext);
    const scriptFactory = new ScriptCommandFactory(container);

    context.subscriptions.push(
        commands.registerCommand(CommandKeys.ViewScriptDetails, scriptFactory.createViewDetailsCommand()),
        commands.registerCommand(CommandKeys.PreviewScript, scriptFactory.createPreviewCommand()),
        commands.registerCommand(CommandKeys.DownloadScript, scriptFactory.createDownloadCommand()),
        commands.registerCommand(CommandKeys.DownloadScriptFolder, scriptFactory.createDownloadFolderCommand()),
        commands.registerCommand(CommandKeys.ExecuteTypeScript, scriptFactory.createExecuteCommand()),
        commands.registerCommand(CommandKeys.ExecuteTypeScriptLocally, scriptFactory.createExecuteLocallyCommand()),
        commands.registerCommand(CommandKeys.UploadScript, scriptFactory.createUploadCommand()),
    );
}
