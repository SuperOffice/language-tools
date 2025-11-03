// import { ExtensionContext, commands, Uri } from 'vscode';
// import { DIContainer, ServiceKeys } from '../container';
// import { CommandKeys } from './commandKeys';
// import { startNativeAppFlow } from './implementations/auth/startNativeAppFlow';
// import { viewDetails, preview, download, downloadFolder, execute, executeLocally, upload } from './implementations/script';
// import { Node } from '../providers';
// import { IHttpService, INodeService } from '../services';
// import { ScriptInfo } from '../types';

// /**
//  * Command factory functions - these create command handlers with injected dependencies
//  */
// class CommandFactory {
//     constructor(private container: DIContainer) { }

//     createStartNativeAppFlowCommand() {
//         return async (): Promise<void> => startNativeAppFlow();
//     }

//     createViewDetailsCommand() {
//         //viewDetails(params: ScriptViewDetailsParams): Promise<CommandResult<void>>
//         return async (script: ScriptInfo): Promise<void> => viewDetails(script);
//     }

//     createPreviewCommand() {
//         const httpService = this.container.resolve<IHttpService>(ServiceKeys.HttpService);
//         const context = this.container.resolve<ExtensionContext>(ServiceKeys.ExtensionContext);
//         return async (node: Node): Promise<void> => preview(node, context, httpService);
//     }

//     createDownloadCommand() {
//         const httpService = this.container.resolve<IHttpService>(ServiceKeys.HttpService);
//         const context = this.container.resolve<ExtensionContext>(ServiceKeys.ExtensionContext);
//         return async (node: Node): Promise<void> => download(node, context, httpService);
//     }

//     createDownloadFolderCommand() {
//         const httpService = this.container.resolve<IHttpService>(ServiceKeys.HttpService);
//         const context = this.container.resolve<ExtensionContext>(ServiceKeys.ExtensionContext);
//         return async (node: Node): Promise<void> => downloadFolder(node, context, httpService);
//     }

//     createExecuteCommand() {
//         const httpService = this.container.resolve<IHttpService>(ServiceKeys.HttpService);
//         const context = this.container.resolve<ExtensionContext>(ServiceKeys.ExtensionContext);
//         return async (fileUri: Uri): Promise<void> => execute(fileUri, context, httpService);
//     }

//     createExecuteLocallyCommand() {
//         const nodeService = this.container.resolve<INodeService>(ServiceKeys.NodeService);
//         const context = this.container.resolve<ExtensionContext>(ServiceKeys.ExtensionContext);
//         return async (fileUri: Uri): Promise<void> => executeLocally(fileUri, context, nodeService);
//     }

//     createUploadCommand() {
//         const httpService = this.container.resolve<IHttpService>(ServiceKeys.HttpService);
//         const context = this.container.resolve<ExtensionContext>(ServiceKeys.ExtensionContext);
//         return async (fileUri: Uri): Promise<void> => upload(fileUri, context, httpService);
//     }
// }

// /**
//  * Register all commands using the DI container for dependency resolution
//  */
// export function registerCommands(container: DIContainer) {
//     const context = container.resolve<ExtensionContext>(ServiceKeys.ExtensionContext);
//     const commandFactory = new CommandFactory(container);

//     context.subscriptions.push(
//         commands.registerCommand(CommandKeys.StartNativeAppFlow, commandFactory.createStartNativeAppFlowCommand()),
//         commands.registerCommand(CommandKeys.ViewScriptDetails, commandFactory.createViewDetailsCommand()),
//         commands.registerCommand(CommandKeys.PreviewScript, commandFactory.createPreviewCommand()),
//         commands.registerCommand(CommandKeys.DownloadScript, commandFactory.createDownloadCommand()),
//         commands.registerCommand(CommandKeys.DownloadScriptFolder, commandFactory.createDownloadFolderCommand()),
//         commands.registerCommand(CommandKeys.ExecuteTypeScript, commandFactory.createExecuteCommand()),
//         commands.registerCommand(CommandKeys.ExecuteTypeScriptLocally, commandFactory.createExecuteLocallyCommand()),
//         commands.registerCommand(CommandKeys.UploadScript, commandFactory.createUploadCommand()),
//     );
// }
