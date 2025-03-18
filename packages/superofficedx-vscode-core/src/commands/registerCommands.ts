// src/commands/registerCommands.ts
import * as vscode from 'vscode';
import { Commands } from '../constants';
import { SuperofficeAuthenticationProvider } from '../providers/superofficeAuthenticationProvider';
import { startNativeAppFlowAsync } from './startNativeAppFlow';
import { viewDetailsAsync } from './script/viewDetails';
import { Node } from '../providers/treeViewDataProvider';
import { IHttpService } from '../services/httpService';
import { previewAsync } from './script/preview';
import { VirtualFileSystemProvider } from '../providers/virtualFileSystemProvider';
import { downloadAsync } from './script/download';
import { downloadFolderAsync } from './script/downloadFolder';
import { executeAsync } from './script/execute';
import { executeLocallyAsync } from './script/executeLocally';
import { INodeService } from '../services/nodeService';

export function registerCommands(
    context: vscode.ExtensionContext, 
    authProvider: SuperofficeAuthenticationProvider, 
    httpService: IHttpService, 
    vfsProvider: VirtualFileSystemProvider, 
    nodeService: INodeService) 
    {
    context.subscriptions.push(
        vscode.commands.registerCommand(Commands.START_NATIVE_APP_FLOW, startNativeAppFlowAsync),
        vscode.commands.registerCommand(Commands.VIEW_SCRIPT_DETAILS, viewDetailsAsync),
        vscode.commands.registerCommand(Commands.PREVIEW_SCRIPT, async (node: Node) => previewAsync(node, authProvider, httpService, vfsProvider)),
        vscode.commands.registerCommand(Commands.DOWNLOAD_SCRIPT, async (node: Node) => downloadAsync(node, authProvider, httpService)),
        vscode.commands.registerCommand(Commands.DOWNLOAD_SCRIPT_FOLDER, async (node: Node) => downloadFolderAsync(node, authProvider, httpService)),
        vscode.commands.registerCommand(Commands.EXECUTE_SCRIPT, async (fileUri: vscode.Uri) => executeAsync(fileUri, authProvider, httpService)),
        vscode.commands.registerCommand(Commands.EXECUTE_SCRIPT_Locally, async (fileUri: vscode.Uri) => executeLocallyAsync(fileUri, authProvider, nodeService))
    );
}
