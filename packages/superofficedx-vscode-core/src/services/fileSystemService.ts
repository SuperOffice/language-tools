import { FileType, Uri, workspace, window, FileSystemError } from 'vscode'

import { IFileSystemHandler } from '../handlers/fileSystemHandler';
import { ScriptEntity } from '../types/script';
import { SuoFile } from '../types/suoFile';
import path from 'path';
import { getFileType } from '../utils';

export interface IFileSystemService {
    ensureDirectoryExists(uri: Uri): Promise<void>;
    readSuoFile(): Promise<SuoFile | undefined>;
    writeSuoFile(content: string): Promise<void>;
    writeScriptToFile(content: ScriptEntity): Promise<Uri>;
    readScriptFile(fileUri: Uri): Promise<string | undefined>;
}

export class FileSystemService implements IFileSystemService {
    constructor(
        private readonly fileSystemHandler: IFileSystemHandler
    ) { }

    get suoFilePath(): string {
        return `./.superoffice/.suo`;
    }

    public async ensureDirectoryExists(uri: Uri): Promise<void> {
        const directoryExists = await this.fileSystemHandler.exists(uri);
        if (directoryExists) {
            const stats = await workspace.fs.stat(uri);
            if (stats.type !== FileType.Directory) {
                throw new Error(`${uri.toString()} exists but is not a directory.`);
            }
            return; // Directory exists, so we’re done
        }
        const parentUri = Uri.file(path.dirname(uri.fsPath));
        await this.ensureDirectoryExists(parentUri);

        await workspace.fs.createDirectory(uri);
    }

    // A method that reads the file asynchronously from a specific path
    public async readSuoFile(): Promise<SuoFile | undefined> {
        const fileUri = this.getFileUriInWorkspace(this.suoFilePath);
        const dirUri = Uri.file(path.dirname(fileUri.fsPath));

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
            window.showErrorMessage(`Failed to read or parse SUO file: ${error}`);
            return undefined;
        }
    }

    public async writeSuoFile(content: string): Promise<void> {
        const filePath = this.suoFilePath; // Replace with your actual file path
        const fileUri = Uri.file(filePath);

        // Get the parent directory URI
        const directoryUri = fileUri.with({ path: fileUri.path.substring(0, fileUri.path.lastIndexOf('/')) });

        // Ensure the directory exists before writing the file
        await this.ensureDirectoryExists(directoryUri);

        try {
            // Write the file content
            await this.fileSystemHandler.writeFile(fileUri, content); // Adding indentation for readability
        } catch (error) {
            window.showErrorMessage(`Failed to write SUO file: ${error}`);
        }
    }

    public async writeScriptToFile(scriptEntity: ScriptEntity): Promise<Uri> {
        try {
            const fileType = getFileType(scriptEntity);

            const filePath = this.joinPaths(scriptEntity.Path, scriptEntity.IncludeId + fileType);
            const fileUri = this.getFileUriInWorkspace(filePath);
            const dirUri = fileUri.with({ path: fileUri.path.replace(/\/[^/]+$/, '') });

            await this.ensureDirectoryExists(dirUri);

            await this.fileSystemHandler.writeFile(fileUri, scriptEntity.SourceCode);
            return fileUri;
        }
        catch (error) {
            if (error instanceof FileSystemError) {
                throw new Error(`Failed to write file: ${scriptEntity.IncludeId}. Reason: ${error.message}`);
            }
            throw new Error(`An unexpected error occurred while writing to file`);
        }
    }

    public async readScriptFile(fileUri: Uri): Promise<string | undefined> {
        const fileExists = await this.fileSystemHandler.exists(fileUri);
        if (!fileExists) {
            return undefined;
        }

        try {
            const content = await this.fileSystemHandler.readFile(fileUri);
            return content ? content : undefined;
        } catch (error) {
            window.showErrorMessage(`Failed to read file: ${error}`);
            return undefined;
        }
    }

    private joinPaths(part1: string, part2: string): string {
        return `${part1.replace(/\/$/, '')}/${part2.replace(/^\//, '')}`;
    }

    /**
 * Get the full URI for a file located within the current workspace.
 *
 * @param relativePath The relative path to the desired file within the workspace.
 * @returns The full URI pointing to the file in the current workspace.
 * @throws {Error} If there's no workspace currently opened in VSCode.
 */
    private getFileUriInWorkspace(relativePath: string): Uri {
        const workspaceFolder = workspace.workspaceFolders?.[0];

        if (!workspaceFolder) {
            throw new Error("No workspace is currently open.");
        }

        return Uri.joinPath(workspaceFolder.uri, relativePath);
    }
}
