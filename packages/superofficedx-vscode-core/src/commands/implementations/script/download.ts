import { workspace, window, authentication } from 'vscode';
import {
    ScriptDownloadParams,
    CommandResult,
    createSuccessResult,
    createErrorResult,
    isValidScriptNode,
    ScriptDownloadResult
} from '../../types';
import { SuperOfficeAuthenticationSession } from '../../../types';
import { getPackagePublisher } from '../../../utils';

export async function download(params: ScriptDownloadParams): Promise<CommandResult<ScriptDownloadResult>> {
    try {
        // Validate input parameters
        if (!isValidScriptNode(params.node)) {
            return createErrorResult({
                code: 'INVALID_NODE',
                message: 'Node does not contain valid script information',
                details: { scriptInfo: params.node?.scriptInfo }
            });
        }

        // Check if workspace is available
        if (!workspace.workspaceFolders || workspace.workspaceFolders.length === 0) {
            return createErrorResult({
                code: 'NO_WORKSPACE',
                message: 'Working folder not found, open a folder and try again'
            });
        }

        const { node, context, httpService } = params;
        const scriptInfo = node.scriptInfo;

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

        // Download the script
        const fullPath = await httpService.downloadScript(session, scriptInfo.ejscriptId);
        if (!fullPath) {
            return createErrorResult({
                code: 'DOWNLOAD_FAILED',
                message: 'Script download returned empty path',
                details: { scriptId: scriptInfo.ejscriptId }
            });
        }

        // Open the downloaded document
        const document = await workspace.openTextDocument(fullPath);
        await window.showTextDocument(document);

        return createSuccessResult({
            downloadPath: fullPath.fsPath,
            scriptName: scriptInfo.name || 'Unknown',
            size: 0 // Size not available from current API
        }, 'Script downloaded successfully');

    } catch (error) {
        return createErrorResult({
            code: 'DOWNLOAD_FAILED',
            message: error instanceof Error ? error.message : String(error),
            details: {
                scriptId: params.node?.scriptInfo?.ejscriptId,
                scriptName: params.node?.scriptInfo?.name
            }
        });
    }
}
