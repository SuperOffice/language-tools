
import * as vscode from 'vscode';
import { SuperofficeAuthenticationProvider } from '../../providers/superofficeAuthenticationProvider';
import { Node } from '../../providers/treeViewDataProvider';
import { IHttpService } from '../../services/httpService';
import { ScriptInfo } from '../../types/index';
import { FileExtensions } from '../../constants';
import { VirtualFileSystemProvider } from '../../providers/virtualFileSystemProvider';

export async function previewAsync(node: Node, authProvider: SuperofficeAuthenticationProvider, httpService: IHttpService, vfsProvider: VirtualFileSystemProvider) {
    if (node?.scriptInfo) {
        const scriptInfo: ScriptInfo = node.scriptInfo;
        try {
            const session = await authProvider.getCurrentSession();

            if(!session) {
                throw new Error ('No active session');
            }
            const scriptEntity = await httpService.getScriptEntityAsync(session, scriptInfo.uniqueIdentifier);
            
            // Create a virtual URI for the file based on the desired filename
            const filename = `${scriptInfo.name}.js`;
            const virtualUri = vscode.Uri.parse(`${FileExtensions.VFS_SCHEME}:/scripts/${filename}`);

            // "Write" the content to the virtual file
            vfsProvider.writeFile(virtualUri, Buffer.from(scriptEntity.Source, 'utf8'));

            // Open the virtual file in VSCode
            const document = await vscode.workspace.openTextDocument(virtualUri);
            vscode.window.showTextDocument(document);

        } catch (err) {
            vscode.window.showErrorMessage(`Failed to preview script: ${err}`);
        }
    }
}