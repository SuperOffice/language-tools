import { authentication, workspace } from "vscode";
import { ScriptDownloadFolderParams, CommandResult, createSuccessResult, createErrorResult, ScriptDownloadResult } from '../../types/commandContracts';
import { Node } from '../../../providers/treeViewDataProvider';
import { IHttpService } from '../../../services/httpService';
import { SuperOfficeAuthenticationSession } from "../../../types/authSession";
import { getPackagePublisher } from "../../../utils";

export async function downloadFolder(params: ScriptDownloadFolderParams): Promise<CommandResult<ScriptDownloadResult>> {
    try {
        // Check if workspace is available
        if (!workspace.workspaceFolders || workspace.workspaceFolders.length === 0) {
            return createErrorResult({
                code: 'NO_WORKSPACE',
                message: 'Working folder not found, open a folder and try again'
            });
        }

        const { node, context, httpService } = params;

        // Get authentication session using VS Code authentication API
        const session = await authentication.getSession(
            getPackagePublisher(context),
            [],
            { createIfNone: true }
        ) as SuperOfficeAuthenticationSession;

        if (!session) {
            return createErrorResult({
                code: 'NO_AUTHENTICATION',
                message: 'Failed to obtain authentication session'
            });
        }

        // Validate that node has children
        if (!node.children || node.children.length === 0) {
            return createErrorResult({
                code: 'NO_CHILDREN',
                message: 'Folder contains no children to download',
                details: { folderName: node.label }
            });
        }

        const downloadResults = await downloadFolderRecursive(node, session, httpService);

        if (downloadResults.errors.length > 0) {
            return createErrorResult({
                code: 'PARTIAL_DOWNLOAD_FAILED',
                message: `Downloaded ${downloadResults.downloadedCount} files with ${downloadResults.errors.length} errors`,
                details: { errors: downloadResults.errors, downloadedCount: downloadResults.downloadedCount }
            });
        }

        return createSuccessResult({
            downloadPath: workspace.workspaceFolders[0].uri.fsPath,
            scriptName: `${node.label} (${downloadResults.downloadedCount} files)`,
            size: downloadResults.totalSize
        }, `Successfully downloaded ${downloadResults.downloadedCount} files from folder "${node.label}"`);

    } catch (error) {
        return createErrorResult({
            code: 'FOLDER_DOWNLOAD_FAILED',
            message: error instanceof Error ? error.message : String(error),
            details: {
                folderName: params.node?.label
            }
        });
    }
}

/**
 * Recursively download all scripts in a folder
 */
async function downloadFolderRecursive(
    node: Node,
    session: SuperOfficeAuthenticationSession,
    httpService: IHttpService
): Promise<{ downloadedCount: number; totalSize: number; errors: string[] }> {
    const results = { downloadedCount: 0, totalSize: 0, errors: [] as string[] };

    if (!node.children) {
        return results;
    }

    for (const childNode of node.children) {
        try {
            if (childNode.contextValue === 'folder' && childNode.children) {
                // Recursively process subfolders
                const subResults = await downloadFolderRecursive(childNode, session, httpService);
                results.downloadedCount += subResults.downloadedCount;
                results.totalSize += subResults.totalSize;
                results.errors.push(...subResults.errors);
            }
            else if (childNode.contextValue === 'script') {
                if (!childNode.scriptInfo?.ejscriptId) {
                    console.log(`superoffice-vscode: Could not find scriptInfo for ${childNode.label}`);
                    results.errors.push(`Missing script info for ${childNode.label}`);
                    continue;
                }

                await httpService.downloadScript(session, childNode.scriptInfo.ejscriptId);
                results.downloadedCount++;
                console.log(`superoffice-vscode: Downloaded script: ${childNode.scriptInfo.name}`);
            }
        } catch (error) {
            const errorMsg = `Failed to download ${childNode.label}: ${error}`;
            console.error(errorMsg);
            results.errors.push(errorMsg);
        }
    }

    return results;
}
