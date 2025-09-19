
import { Uri, workspace, window, authentication, ExtensionContext } from 'vscode';
import { Node } from '../../providers/treeViewDataProvider';
import { IHttpService } from '../../services/httpService';
import { ScriptInfo, SuperOfficeAuthenticationSession } from '../../types/index';
import { getCustomScheme, getPackagePublisher } from '../../utils';

export async function preview(node: Node, context: ExtensionContext, httpService: IHttpService) {
    if (node?.scriptInfo) {
        const scriptInfo: ScriptInfo = node.scriptInfo;
        try {
            const session = await authentication.getSession(getPackagePublisher(context), [], { createIfNone: true }) as SuperOfficeAuthenticationSession;

            if (!session) {
                throw new Error('No active session');
            }
            const scriptEntity = await httpService.getCrmScriptEntity(session, scriptInfo.ejscriptId);

            const uri = Uri.parse(getCustomScheme() + ':' + scriptEntity.SourceCode);
            const doc = await workspace.openTextDocument(uri); // calls back into the provider
            await window.showTextDocument(doc, { preview: false });
        } catch (err) {
            window.showErrorMessage(`Failed to preview script: ${err}`);
        }
    }
}
