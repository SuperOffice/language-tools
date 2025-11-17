import * as vscode from 'vscode';
import { startLanguageFeatures } from './languageFeatures';

import { createLabsInfo, LabsInfo } from '@volar/vscode';
import * as serverProtocol from '@volar/language-server/protocol';

export async function activate(context: vscode.ExtensionContext): Promise<LabsInfo> {
    const languageClient = await startLanguageFeatures(context);

    //Volar labs
    const labsInfo = createLabsInfo(serverProtocol);
    labsInfo.addLanguageClient(languageClient);
    return labsInfo.extensionExports;
}

export function deactivate(): void { }
