import * as vscode from 'vscode';
import { SuperofficeAuthenticationProvider } from "../../providers/superofficeAuthenticationProvider";
import { INodeService } from '../../services/nodeService';

export async function executeLocallyAsync(fileUri: vscode.Uri, authProvider: SuperofficeAuthenticationProvider, nodeService: INodeService) {
    try {
        const session = await authProvider.getCurrentSession();

        if(!session) {
            throw new Error ('No active session');
        }

        if (fileUri && fileUri.fsPath) {
            const fileContent = await vscode.workspace.fs.readFile(fileUri);
            const decodedContent = new TextDecoder().decode(fileContent);

            // Send the script content to the server for execution
            const result = await nodeService.executeScriptLocallyAsync(session, decodedContent);
            vscode.window.showInformationMessage(`Result: ${result}`);
        }
        else {
            vscode.window.showErrorMessage('No file selected!');
        }

    } catch (err) {
        vscode.window.showErrorMessage(`Failed to execute script: ${err}`);
    }
}