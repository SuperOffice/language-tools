import { Uri, ExtensionContext } from 'vscode';
import { Node, SuperofficeAuthenticationProvider } from '../../providers';
import { IHttpService, INodeService } from '../../services';
import { ScriptInfo, SuperOfficeAuthenticationSession } from '../../types';

/**
 * Base result type for all command operations
 */
export interface CommandResult<TData = void> {
    readonly success: boolean;
    readonly data?: TData;
    readonly error?: CommandError;
    readonly message?: string;
}

/**
 * Structured error information for commands
 */
export interface CommandError {
    readonly code: string;
    readonly message: string;
    readonly details?: Record<string, unknown>;
}

/**
 * Base parameters that all commands should have access to
 */
export interface BaseCommandParams {
    readonly context: ExtensionContext;
    readonly authProvider: SuperofficeAuthenticationProvider;
    readonly session?: SuperOfficeAuthenticationSession;
}

// ============================================================================
// Auth Command Interfaces
// ============================================================================

/**
 * Parameters for starting native app authentication flow
 */
export interface StartNativeAppFlowParams extends BaseCommandParams {
    readonly publisherName?: string;
}

/**
 * Result of authentication flow
 */
export interface AuthenticationResult {
    readonly session: SuperOfficeAuthenticationSession;
    readonly isNewSession: boolean;
}

// ============================================================================
// Script Command Interfaces
// ============================================================================

/**
 * Parameters for script preview command
 */
export interface ScriptPreviewParams extends BaseCommandParams {
    readonly node: Node;
    readonly httpService: IHttpService;
}

/**
 * Parameters for script execution command
 */
export interface ScriptExecuteParams extends BaseCommandParams {
    readonly fileUri: Uri;
    readonly httpService: IHttpService;
}

/**
 * Parameters for local script execution
 */
export interface ScriptExecuteLocallyParams extends BaseCommandParams {
    readonly fileUri: Uri;
    readonly nodeService: INodeService;
}

/**
 * Parameters for script download
 */
export interface ScriptDownloadParams extends BaseCommandParams {
    readonly node: Node;
    readonly httpService: IHttpService;
}

/**
 * Parameters for folder download
 */
export interface ScriptDownloadFolderParams extends BaseCommandParams {
    readonly node: Node;
    readonly httpService: IHttpService;
}

/**
 * Parameters for script upload
 */
export interface ScriptUploadParams extends BaseCommandParams {
    readonly fileUri: Uri;
    readonly httpService: IHttpService;
}

/**
 * Parameters for viewing script details
 */
export interface ScriptViewDetailsParams {
    readonly scriptInfo: ScriptInfo;
}

/**
 * Result of script execution
 */
export interface ScriptExecutionResult {
    readonly output: string;
    readonly success: boolean;
    readonly executionTime?: number;
}

/**
 * Result of script download
 */
export interface ScriptDownloadResult {
    readonly downloadPath: string;
    readonly scriptName: string;
    readonly size: number;
}

// ============================================================================
// Command Handler Interfaces
// ============================================================================

/**
 * Contract for authentication commands
 */
export interface IAuthCommands {
    startNativeAppFlow(params: StartNativeAppFlowParams): Promise<CommandResult<AuthenticationResult>>;
}

/**
 * Contract for script commands
 */
export interface IScriptCommands {
    preview(params: ScriptPreviewParams): Promise<CommandResult<void>>;
    execute(params: ScriptExecuteParams): Promise<CommandResult<ScriptExecutionResult>>;
    executeLocally(params: ScriptExecuteLocallyParams): Promise<CommandResult<ScriptExecutionResult>>;
    download(params: ScriptDownloadParams): Promise<CommandResult<ScriptDownloadResult>>;
    downloadFolder(params: ScriptDownloadFolderParams): Promise<CommandResult<ScriptDownloadResult>>;
    upload(params: ScriptUploadParams): Promise<CommandResult<void>>;
    viewDetails(params: ScriptViewDetailsParams): Promise<CommandResult<void>>;
}

// ============================================================================
// Validation Helpers
// ============================================================================

/**
 * Type guard to check if a node has valid script info
 */
export function isValidScriptNode(node: Node): node is Node & { scriptInfo: ScriptInfo } {
    return node?.scriptInfo !== undefined &&
        node.scriptInfo.ejscriptId !== undefined &&
        node.scriptInfo.ejscriptId > 0;
}

/**
 * Type guard to check if a URI is valid
 */
export function isValidFileUri(uri: Uri): boolean {
    return uri?.fsPath !== undefined && uri.fsPath.length > 0;
}

/**
 * Create a success result
 */
export function createSuccessResult<T>(data?: T, message?: string): CommandResult<T> {
    return {
        success: true,
        data,
        message,
    };
}

/**
 * Create an error result
 */
export function createErrorResult<T>(error: string | CommandError, message?: string): CommandResult<T> {
    const commandError: CommandError = typeof error === 'string'
        ? { code: 'UNKNOWN_ERROR', message: error }
        : error;

    return {
        success: false,
        error: commandError,
        message: message || commandError.message,
    };
}
