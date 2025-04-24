// src/commands/registerCommands.ts
import { ExtensionContext, commands, Uri } from 'vscode';
import { startNativeAppFlow } from './startNativeAppFlow';
import { viewDetails } from './script/viewDetails';
import { Node } from '../providers/treeViewDataProvider';
import { IHttpService } from '../services/httpService';
import { preview } from './script/preview';
import { download } from './script/download';
import { downloadFolder } from './script/downloadFolder';
import { execute } from './script/execute';
import { executeLocally } from './script/executeLocally';
import { INodeService } from '../services/nodeService';

export function registerCommands(
    context: ExtensionContext,
    httpService: IHttpService,
    nodeService: INodeService
) {
    context.subscriptions.push(
        commands.registerCommand('superOfficeDX.startNativeAppFlow', startNativeAppFlow),
        commands.registerCommand('superOfficeDX.viewScriptDetails', viewDetails),
        commands.registerCommand('superOfficeDX.previewScript', async (node: Node) => preview(node, context, httpService)),
        commands.registerCommand('superOfficeDX.downloadScript', async (node: Node) => download(node, context, httpService)),
        commands.registerCommand('superOfficeDX.downloadScriptFolder', async (node: Node) => downloadFolder(node, context, httpService)),
        commands.registerCommand('superOfficeDX.executeTypeScript', async (fileUri: Uri) => execute(fileUri, context, httpService)),
        commands.registerCommand('superOfficeDX.executeTypeScriptLocally', async (fileUri: Uri) => executeLocally(fileUri, context, nodeService)),
    );
}
