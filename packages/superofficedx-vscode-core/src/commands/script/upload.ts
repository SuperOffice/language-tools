import { window, Uri, workspace, authentication, ExtensionContext } from 'vscode';
import { getPackagePublisher } from '../../utils';
import { Hierarchy, SuperOfficeAuthenticationSession } from '../../types';
import { IHttpService } from '../../services/httpService';

export async function upload(fileUri: Uri, context: ExtensionContext, httpService: IHttpService) {
    try {
        const session = await authentication.getSession(getPackagePublisher(context), [], { createIfNone: true }) as SuperOfficeAuthenticationSession;

        if (!session) {
            throw new Error('No active session');
        }

        if (fileUri && fileUri.fsPath) {
            const workspaceFolder = workspace.workspaceFolders?.[0];
            const path = fileUri.fsPath;

           if(workspaceFolder) {
                const fileName = path.substring(path.lastIndexOf("\\")+1);
                // const relativePath = path.substring(workspaceFolder?.uri.fsPath.length + 9,  path.length - fileName.length);
                // window.showInformationMessage('Relative path: ' + relativePath.replaceAll("\\", "/").substring(1, relativePath.length - 1));
                
                const scriptList = await httpService.getScriptList(session);
                const script = scriptList.value.find((element) => element.includeId == fileName.split('.')[0]);
                if(script){
                    // TODO: Figure out the best way to handle when a script is moved in the hierarchy. What happens if its a completely new hierarchy?
                    // const hierarchy = await httpService.getHierarchy(session);
                    // const correctHierarchy = findHierarchyByFullname(hierarchy, relativePath.replaceAll("\\", "/").substring(1, relativePath.length - 1));
                    const result = await httpService.patchScript(session, fileUri, script.ejscriptId);
                    window.showInformationMessage('Patched script IncludeId : ' + result.IncludeId + '!');
                }
                else {
                    const result = await httpService.createScript(session, fileUri, fileName);
                    window.showInformationMessage('Uploaded new script with IncludeId : ' + result.IncludeId + ' to SuperOffice!');
                }
           }
        }
        else {
            window.showErrorMessage('No file selected!');
        }

    } catch (err) {
        window.showErrorMessage(`Failed to execute script: ${err}`);
    }
}

function findHierarchyByFullname(
    hierarchies: Hierarchy[],
    targetFullname: string
): Hierarchy | null {
    for (const hierarchy of hierarchies) {
        const found = findHierarchyRecursive(hierarchy, targetFullname);
        if (found) {
            return found;
        }
    }
    return null;
}

function findHierarchyRecursive(
    hierarchy: Hierarchy,
    targetFullname: string
): Hierarchy | null {
    if (hierarchy.Fullname === targetFullname) {
        return hierarchy;
    }

    for (const child of hierarchy.Children) {
        const found = findHierarchyRecursive(child, targetFullname);
        if (found) {
            return found;
        }
    }

    return null;
}