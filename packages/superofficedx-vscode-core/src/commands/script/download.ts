import * as vscode from 'vscode';
import { SuperofficeAuthenticationProvider } from "../../providers/superofficeAuthenticationProvider";
import { IHttpService } from "../../services/httpService";
import { Node } from '../../providers/treeViewDataProvider';
import { ScriptInfo } from "../../types/index";

export async function downloadAsync(node: Node, authProvider: SuperofficeAuthenticationProvider, httpService: IHttpService) {
    if (node?.scriptInfo) {
        try {
            const session = await authProvider.getCurrentSession();

            if(!session) {
                throw new Error ('No active session');
            }

            const scriptInfo: ScriptInfo = node.scriptInfo;
            if (vscode.workspace.workspaceFolders !== undefined) {
                try {
                    const fullPath = await httpService.downloadScriptAsync(session, scriptInfo.uniqueIdentifier);
                    const document = await vscode.workspace.openTextDocument(fullPath);
                    vscode.window.showTextDocument(document);
                } catch (err) {
                    throw new Error(`Failed to download script: ${err}`);
                }
            }
            else {
                vscode.window.showErrorMessage("superoffice-vscode: Working folder not found, open a folder an try again");
            }

        } catch (err) {
            vscode.window.showErrorMessage(`Failed to preview script: ${err}`);
        }
    }
}