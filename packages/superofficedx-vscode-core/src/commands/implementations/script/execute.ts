import { workspace, window, authentication } from 'vscode';
import { ScriptExecuteParams } from '../../types/commandContracts';
import { CommandResult } from '../../types/commandContracts';
import { createSuccessResult } from '../../types/commandContracts';
import { createErrorResult } from '../../types/commandContracts';
import { isValidFileUri } from '../../types/commandContracts';
import { ScriptExecutionResult } from '../../types/commandContracts';
import { SuperOfficeAuthenticationSession } from '../../../types/authSession';
import { getPackagePublisher } from '../../../utils';

export async function execute(params: ScriptExecuteParams): Promise<CommandResult<ScriptExecutionResult>> {
    try {
        // Validate input parameters
        if (!isValidFileUri(params.fileUri)) {
            return createErrorResult({
                code: 'INVALID_FILE_URI',
                message: 'Invalid file URI provided',
                details: { fileUri: params.fileUri?.toString() }
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

        // Execute the script on the server
        const startTime = Date.now();
        const result = await httpService.executeScript(session, decodedContent);
        const executionTime = Date.now() - startTime;

        if (!result) {
            return createErrorResult({
                code: 'EXECUTION_FAILED',
                message: 'Script execution returned no result',
                details: { filePath: fileUri.fsPath }
            });
        }

        // Show success message to user
        window.showInformationMessage(result.Output || 'Script executed successfully');

        return createSuccessResult({
            output: result.Output || 'Script executed successfully',
            success: true,
            executionTime
        }, 'Script executed successfully');

    } catch (error) {
        return createErrorResult({
            code: 'EXECUTION_FAILED',
            message: error instanceof Error ? error.message : String(error),
            details: {
                filePath: params.fileUri?.fsPath
            }
        });
    }
}
