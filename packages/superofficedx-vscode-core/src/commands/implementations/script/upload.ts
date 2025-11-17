import { window, workspace, authentication } from 'vscode';
import {
    ScriptUploadParams,
    CommandResult,
    createSuccessResult,
    createErrorResult,
    isValidFileUri
} from '../../types';
import { SuperOfficeAuthenticationSession } from '../../../types';
import { getPackagePublisher } from '../../../utils';

export async function upload(params: ScriptUploadParams): Promise<CommandResult<void>> {
    try {
        // Validate input parameters
        if (!isValidFileUri(params.fileUri)) {
            return createErrorResult({
                code: 'INVALID_FILE_URI',
                message: 'Invalid file URI provided',
                details: { fileUri: params.fileUri?.toString() }
            });
        }

        // Check if workspace is available
        if (!workspace.workspaceFolders || workspace.workspaceFolders.length === 0) {
            return createErrorResult({
                code: 'NO_WORKSPACE',
                message: 'Working folder not found, open a folder and try again'
            });
        }

        const { fileUri, context, httpService } = params;

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

        const path = fileUri.fsPath;
        const fileName = path.substring(path.lastIndexOf("\\") + 1);

        if (!fileName || fileName.length === 0) {
            return createErrorResult({
                code: 'INVALID_FILENAME',
                message: 'Could not extract valid filename from file path',
                details: { filePath: path }
            });
        }

        // Get existing scripts to check if this is an update or new script
        const scriptList = await httpService.getScriptList(session);
        if (!scriptList?.value) {
            return createErrorResult({
                code: 'SCRIPT_LIST_FAILED',
                message: 'Failed to retrieve script list from server'
            });
        }

        const script = scriptList.value.find((element) => element.includeId === fileName.split('.')[0]);

        if (script) {
            // Update existing script
            const result = await httpService.patchScript(session, fileUri, script.ejscriptId);
            if (!result?.IncludeId) {
                return createErrorResult({
                    code: 'PATCH_FAILED',
                    message: 'Failed to update existing script',
                    details: { scriptId: script.ejscriptId, fileName }
                });
            }

            window.showInformationMessage(`Patched script IncludeId: ${result.IncludeId}!`);
            return createSuccessResult(undefined, `Successfully updated script: ${result.IncludeId}`);
        } else {
            // Create new script
            const result = await httpService.createScript(session, fileUri, fileName);
            if (!result?.IncludeId) {
                return createErrorResult({
                    code: 'CREATE_FAILED',
                    message: 'Failed to create new script',
                    details: { fileName }
                });
            }

            window.showInformationMessage(`Uploaded new script with IncludeId: ${result.IncludeId} to SuperOffice!`);
            return createSuccessResult(undefined, `Successfully created new script: ${result.IncludeId}`);
        }

    } catch (error) {
        return createErrorResult({
            code: 'UPLOAD_FAILED',
            message: error instanceof Error ? error.message : String(error),
            details: {
                filePath: params.fileUri?.fsPath
            }
        });
    }
}
