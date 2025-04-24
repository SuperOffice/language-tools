import { IHttpService } from "../../services/httpService";
import { Node } from '../../providers/treeViewDataProvider';
import { authentication, ExtensionContext } from "vscode";
import { SuperOfficeAuthenticationSession } from "../../types";
import { getPackagePublisher } from "../../utils";

export async function downloadFolder(node: Node, context: ExtensionContext, httpService: IHttpService) {
    try {
        const session = await authentication.getSession(getPackagePublisher(context), [], { createIfNone: true }) as SuperOfficeAuthenticationSession;

        if (!session) {
            throw new Error('No active session');
        }

        node.children?.forEach(async (childNode) => {
            if (childNode.contextValue === 'folder') {
                await downloadFolder(childNode, context, httpService);
            }
            else if (childNode.contextValue === 'script') {
                if (childNode.scriptInfo === undefined) {
                    console.log(`superoffice-vscode: Could not find scriptInfo for ${childNode.label}`);
                    return;
                }
                await httpService.downloadScript(session, childNode.scriptInfo.ejscriptId);
                console.log(`superoffice-vscode: Downloaded script: ${childNode.scriptInfo.name}`);
            }
        });
    } catch (err) {
        throw new Error(`Failed to download scriptFolder: ${err}`);
    }
}