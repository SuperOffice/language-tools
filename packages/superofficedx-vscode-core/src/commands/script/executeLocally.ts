import { Uri, workspace, window, authentication, ExtensionContext } from 'vscode';
import { INodeService } from '../../services/nodeService';
import { SuperOfficeAuthenticationSession } from '../../types';
import { getPackagePublisher } from '../../utils';

export async function executeLocally(fileUri: Uri, context: ExtensionContext, nodeService: INodeService) {
    try {
        const session = await authentication.getSession(getPackagePublisher(context), [], { createIfNone: true }) as SuperOfficeAuthenticationSession;

        if (!session) {
            throw new Error('No active session');
        }

        if (fileUri && fileUri.fsPath) {
            const fileContent = await workspace.fs.readFile(fileUri);
            const decodedContent = new TextDecoder().decode(fileContent);

            // Send the script content to the server for execution
            const result = await nodeService.executeScriptLocally(session, decodedContent);
            window.showInformationMessage(`Result: ${result}`);
        }
        else {
            window.showErrorMessage('No file selected!');
        }

    } catch (err) {
        window.showErrorMessage(`Failed to execute script: ${err}`);
    }
}