import * as vscode from 'vscode';

/**
 * Get the full URI for a file located within the current workspace.
 * 
 * @param relativePath The relative path to the desired file within the workspace.
 * @returns The full URI pointing to the file in the current workspace.
 * @throws {Error} If there's no workspace currently opened in VSCode.
 */
function getFileUriInWorkspace(relativePath: string): vscode.Uri {
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];

    if (!workspaceFolder) {
        throw new Error("No workspace is currently open.");
    }

    return vscode.Uri.joinPath(workspaceFolder.uri, relativePath);
}

// Read file from relativePath
export async function readFile(relativePath: string): Promise<string> {
    try {
        const data = await vscode.workspace.fs.readFile(getFileUriInWorkspace(relativePath));
        return data.toString();
    } catch (error) {
        if (error instanceof vscode.FileSystemError) {
            throw new Error(`Failed to read file: ${relativePath}. Reason: ${error.message}`);
        }
        throw new Error(`An unexpected error occurred while reading file: ${relativePath}`);
    }
}

// Write file to relativePath
export async function writeFile(relativePath: string, content: string): Promise<void> {
    try {
        const data = Buffer.from(content);
        await vscode.workspace.fs.writeFile(getFileUriInWorkspace(relativePath), data);
    } catch (error) {
        if (error instanceof vscode.FileSystemError) {
            throw new Error(`Failed to write to file: ${relativePath}. Reason: ${error.message}`);
        }
        throw new Error(`An unexpected error occurred while writing to file: ${relativePath}`);
    }
}
