import * as vscode from 'vscode'

import { IFileSystemHandler } from '../handlers/fileSystemHandler';
import { AuthProvider } from '../constants';
import { SuoFile } from '../types/types';
import path from 'path';

export interface IFileSystemService {
    ensureDirectoryExists(uri: vscode.Uri): Promise<void>;
    readSuoFile(): Promise<SuoFile | undefined>;
    writeSuoFile(content: string): Promise<void>;
}

export class FileSystemService implements IFileSystemService {
    constructor(private fileSystemHandler: IFileSystemHandler) {}

    async ensureDirectoryExists(uri: vscode.Uri): Promise<void> {
        const directoryExists = await this.fileSystemHandler.exists(uri);
        if (directoryExists) {
            const stats = await vscode.workspace.fs.stat(uri);
            if (stats.type !== vscode.FileType.Directory) {
                throw new Error(`${uri.toString()} exists but is not a directory.`);
            }
            return; // Directory exists, so we’re done
        }
        const parentUri = vscode.Uri.file(path.dirname(uri.fsPath));
        await this.ensureDirectoryExists(parentUri);

        await vscode.workspace.fs.createDirectory(uri);
    }

    /**
     * Get the full URI for a file located within the current workspace.
     * 
     * @param relativePath The relative path to the desired file within the workspace.
     * @returns The full URI pointing to the file in the current workspace.
     * @throws {Error} If there's no workspace currently opened in VSCode.
     */
    private getFileUriInWorkspace(relativePath: string): vscode.Uri {
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];

        if (!workspaceFolder) {
            throw new Error("No workspace is currently open.");
        }

        return vscode.Uri.joinPath(workspaceFolder.uri, relativePath);
    }

    // A method that reads the file asynchronously from a specific path
    async readSuoFile(): Promise<SuoFile | undefined> {
        const fileUri = this.getFileUriInWorkspace(AuthProvider.SUO_FILE_PATH);
        const dirUri = vscode.Uri.file(path.dirname(fileUri.fsPath));

        await this.ensureDirectoryExists(dirUri);

        // Check if the file exists before trying to read it
        const fileExists = await this.fileSystemHandler.exists(fileUri);
        if (!fileExists) {
            return undefined;
        }

        try {
            // Read and parse the file content
            const content = await this.fileSystemHandler.readFile(fileUri);
            return content ? JSON.parse(content) as SuoFile : undefined;
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to read or parse SUO file: ${error}`);
            return undefined;
        }
    }

    async writeSuoFile(content: string): Promise<void> {
        const filePath = AuthProvider.SUO_FILE_PATH; // Replace with your actual file path
        const fileUri = vscode.Uri.file(filePath);
    
        // Get the parent directory URI
        const directoryUri = fileUri.with({ path: fileUri.path.substring(0, fileUri.path.lastIndexOf('/')) });
    
        // Ensure the directory exists before writing the file
        await this.ensureDirectoryExists(directoryUri);
    
        try {
            // Write the file content
            await this.fileSystemHandler.writeFile(fileUri, content); // Adding indentation for readability
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to write SUO file: ${error}`);
        }
    }
    
}
