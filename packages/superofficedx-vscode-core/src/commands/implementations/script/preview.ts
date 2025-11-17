
import { Uri, workspace, window, authentication } from 'vscode';
import { ScriptPreviewParams, CommandResult, createSuccessResult, createErrorResult, isValidScriptNode } from '../../types/commandContracts';
import { SuperOfficeAuthenticationSession } from '../../../types/authSession';
import { getCustomScheme, getPackagePublisher } from '../../../utils';

export async function preview(params: ScriptPreviewParams): Promise<CommandResult<void>> {
    try {
        // Validate input parameters
        if (!isValidScriptNode(params.node)) {
            return createErrorResult({
                code: 'INVALID_NODE',
                message: 'Node does not contain valid script information',
                details: { scriptInfo: params.node?.scriptInfo }
            });
        }

        const { node, context, httpService } = params;
        const scriptInfo = node.scriptInfo;

        // Get authentication session using VS Code authentication API
        // This will delegate to our custom SuperofficeAuthenticationProvider
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

        // Fetch script entity from server
        const scriptEntity = await httpService.getCrmScriptEntity(session, scriptInfo.ejscriptId);
        if (!scriptEntity?.SourceCode) {
            return createErrorResult({
                code: 'SCRIPT_NOT_FOUND',
                message: 'Script source code not found',
                details: { scriptId: scriptInfo.ejscriptId }
            });
        }

        // Create preview document
        const uri = Uri.parse(getCustomScheme() + ':' + scriptEntity.SourceCode);
        const doc = await workspace.openTextDocument(uri);
        await window.showTextDocument(doc, { preview: false });

        return createSuccessResult(undefined, 'Script preview opened successfully');

    } catch (error) {
        return createErrorResult({
            code: 'PREVIEW_FAILED',
            message: error instanceof Error ? error.message : String(error),
            details: {
                scriptId: params.node?.scriptInfo?.ejscriptId,
                scriptName: params.node?.scriptInfo?.name
            }
        });
    }
}
