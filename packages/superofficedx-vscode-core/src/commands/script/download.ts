import { workspace, window, authentication, ExtensionContext } from 'vscode';
import { IHttpService } from "../../services/httpService";
import { Node } from '../../providers/treeViewDataProvider';
import { ScriptInfo, SuperOfficeAuthenticationSession } from "../../types/index";
import { getPackagePublisher } from '../../utils';

export async function download(node: Node, context: ExtensionContext, httpService: IHttpService) {
    if (node?.scriptInfo) {
        try {
            const session = await authentication.getSession(getPackagePublisher(context), [], { createIfNone: true }) as SuperOfficeAuthenticationSession;

            if (!session) {
                throw new Error('No active session');
            }

            const scriptInfo: ScriptInfo = node.scriptInfo;
            if (workspace.workspaceFolders !== undefined) {
                try {
                    const fullPath = await httpService.downloadScript(session, scriptInfo.uniqueIdentifier);
                    const document = await workspace.openTextDocument(fullPath);
                    window.showTextDocument(document);
                } catch (err) {
                    throw new Error(`Failed to download script: ${err}`);
                }
            }
            else {
                window.showErrorMessage("superoffice-vscode: Working folder not found, open a folder an try again");
            }

        } catch (err) {
            window.showErrorMessage(`Failed to preview script: ${err}`);
        }
    }
}