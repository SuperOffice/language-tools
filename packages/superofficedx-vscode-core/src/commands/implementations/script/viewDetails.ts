import { TextDocument, workspace, window } from 'vscode';
import {
    ScriptViewDetailsParams,
    CommandResult,
    createSuccessResult,
    createErrorResult
} from '../../types';

const openedScripts = new Map<string, TextDocument>();

export async function viewDetails(params: ScriptViewDetailsParams): Promise<CommandResult<void>> {
    try {
        // Validate input parameters
        if (!params.scriptInfo) {
            return createErrorResult({
                code: 'INVALID_SCRIPT_INFO',
                message: 'Script information is required'
            });
        }

        const { scriptInfo } = params;

        // Validate required script properties
        if (!scriptInfo.PrimaryKey) {
            return createErrorResult({
                code: 'MISSING_PRIMARY_KEY',
                message: 'Script does not have a valid primary key',
                details: { scriptInfo }
            });
        }

        const doc = openedScripts.get(scriptInfo.PrimaryKey);

        if (doc) {
            // Document already exists, just show it
            await window.showTextDocument(doc);
            return createSuccessResult(undefined, 'Script details displayed from cache');
        } else {
            // Create new document with script details
            const jsonString = JSON.stringify(scriptInfo, null, 2);  // Pretty print JSON

            if (!jsonString || jsonString.length === 0) {
                return createErrorResult({
                    code: 'SERIALIZATION_FAILED',
                    message: 'Failed to serialize script information to JSON',
                    details: { scriptInfo }
                });
            }

            const document = await workspace.openTextDocument({
                content: jsonString,
                language: 'json'
            });

            await window.showTextDocument(document);
            openedScripts.set(scriptInfo.PrimaryKey, document);

            return createSuccessResult(undefined, 'Script details displayed successfully');
        }

    } catch (error) {
        return createErrorResult({
            code: 'VIEW_DETAILS_FAILED',
            message: error instanceof Error ? error.message : String(error),
            details: {
                scriptId: params.scriptInfo?.PrimaryKey,
                scriptName: params.scriptInfo?.name
            }
        });
    }
}
