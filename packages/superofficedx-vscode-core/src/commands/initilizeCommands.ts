// src/commands/registerCommands.ts
import * as vscode from 'vscode';
import { Commands } from '../constants';
import { SuperofficeAuthenticationProvider } from '../providers/superofficeAuthenticationProvider';
import { startNativeAppFlow } from './startNativeAppFlow';
import { viewScriptDetails } from './viewScriptDetails';
import { Node } from '../providers/treeViewDataProvider';
import { IHttpService } from '../services/httpService';
import { previewScript } from './previewScript';
import { VirtualFileSystemProvider } from '../workspace/virtualWorkspaceFileManager';

export function initializeCommands(context: vscode.ExtensionContext, authProvider: SuperofficeAuthenticationProvider, httpService: IHttpService, vfsProvider: VirtualFileSystemProvider) {
    context.subscriptions.push(
        vscode.commands.registerCommand(Commands.START_NATIVE_APP_FLOW, startNativeAppFlow),
        vscode.commands.registerCommand(Commands.VIEW_SCRIPT_DETAILS, viewScriptDetails),
        vscode.commands.registerCommand(Commands.PREVIEW_SCRIPT, async (node: Node) => previewScript(node, authProvider, httpService, vfsProvider))
    );
}
