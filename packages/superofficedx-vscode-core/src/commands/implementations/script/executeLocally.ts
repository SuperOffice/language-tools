import { workspace, window, authentication } from 'vscode';
import { ScriptExecuteLocallyParams } from '../../types/commandContracts';
import { CommandResult } from '../../types/commandContracts';
import { createSuccessResult } from '../../types/commandContracts';
import { createErrorResult } from '../../types/commandContracts';
import { isValidFileUri } from '../../types/commandContracts';
import { ScriptExecutionResult } from '../../types/commandContracts';
import { SuperOfficeAuthenticationSession } from '../../../types/authSession';

import { getPackagePublisher } from '../../../utils';

export async function executeLocally(params: ScriptExecuteLocallyParams): Promise<CommandResult<ScriptExecutionResult>> {
    try {
        // Validate input parameters
        if (!isValidFileUri(params.fileUri)) {
            return createErrorResult({
                code: 'INVALID_FILE_URI',
                message: 'Invalid file URI provided',
                details: { fileUri: params.fileUri?.toString() }
            });
        }

        const { fileUri, context, nodeService } = params;

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

        // Read file content
        const fileContent = await workspace.fs.readFile(fileUri);
        const decodedContent = new TextDecoder().decode(fileContent);

        if (!decodedContent || decodedContent.trim().length === 0) {
            return createErrorResult({
                code: 'EMPTY_SCRIPT',
                message: 'Script file is empty or contains no executable content',
                details: { filePath: fileUri.fsPath }
            });
        }

        // Execute the script locally
        const startTime = Date.now();
        const result = await nodeService.executeScriptLocally(session, decodedContent);
        const executionTime = Date.now() - startTime;

        if (result === undefined || result === null) {
            return createErrorResult({
                code: 'LOCAL_EXECUTION_FAILED',
                message: 'Local script execution returned no result',
                details: { filePath: fileUri.fsPath }
            });
        }

        // Show success message to user
        const resultMessage = `Result: ${result}`;
        window.showInformationMessage(resultMessage);

        return createSuccessResult({
            output: resultMessage,
            success: true,
            executionTime
        }, 'Script executed locally successfully');

    } catch (error) {
        return createErrorResult({
            code: 'LOCAL_EXECUTION_FAILED',
            message: error instanceof Error ? error.message : String(error),
            details: {
                filePath: params.fileUri?.fsPath
            }
        });
    }
}
