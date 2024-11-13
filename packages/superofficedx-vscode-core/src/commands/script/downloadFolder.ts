import { SuperofficeAuthenticationProvider } from "../../providers/superofficeAuthenticationProvider";
import { IHttpService } from "../../services/httpService";
import { Node } from '../../providers/treeViewDataProvider';

export async function downloadFolderAsync(node: Node, authProvider: SuperofficeAuthenticationProvider, httpService: IHttpService) {
    try {
        const session = await authProvider.getCurrentSession();

        if(!session) {
            throw new Error ('No active session');
        }

        node.children?.forEach(async (childNode) => {
            if(childNode.contextValue === 'folder') {
                    await downloadFolderAsync(childNode, authProvider, httpService);
                }
                else if(childNode.contextValue === 'script') {
                    if(childNode.scriptInfo === undefined) {
                        console.log(`superoffice-vscode: Could not find scriptInfo for ${childNode.label}`);
                        return;
                    }
                    await httpService.downloadScriptAsync(session, childNode.scriptInfo.uniqueIdentifier);
                    console.log(`superoffice-vscode: Downloaded script: ${childNode.scriptInfo.name}`);
                }
        });
    } catch (err) {
        throw new Error(`Failed to download scriptFolder: ${err}`);
    }
}