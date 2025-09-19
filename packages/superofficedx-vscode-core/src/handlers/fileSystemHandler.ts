import { Uri, workspace, window } from 'vscode'

/**
 * Interface defining basic file system operations.
 */
export interface IFileSystemHandler {
    /**
     * Reads the content of a file as a UTF-8 string.
     * @param fileUri The URI of the file to read.
     * @returns A promise resolving to the file content, or undefined if reading fails.
     */
    readFile(fileUri: Uri): Promise<string | undefined>;

    /**
     * Writes content to a file.
     * @param fileUri The URI of the file to write to.
     * @param content The UTF-8 string content to write.
     * @returns A promise resolving to true if the write succeeds, false otherwise.
     */
    writeFile(fileUri: Uri, content: string): Promise<boolean>;

    /**
     * Deletes a file.
     * @param fileUri The URI of the file to delete.
     * @returns A promise that resolves when the file is deleted.
     */
    deleteFile(fileUri: Uri): Promise<void>;

    /**
     * Checks whether a file exists.
     * @param uri The URI of the file to check.
     * @returns A promise resolving to true if the file exists, false otherwise.
     */
    exists(uri: Uri): Promise<boolean>;
}

/**
 * Implementation of IFileSystemHandler using VS Code's workspace file system API.
 */
export class FileSystemHandler implements IFileSystemHandler {
    /**
     * Reads the content of a file as a UTF-8 string.
     * @param fileUri The URI of the file to read.
     * @returns The file content as a string, or undefined if read fails.
     */
    public async readFile(fileUri: Uri): Promise<string | undefined> {
        try {
            const fileData = await workspace.fs.readFile(fileUri);
            return Buffer.from(fileData).toString('utf8');
        } catch (error) {
            console.error(`Failed to read file at ${fileUri.fsPath}:`, error);
            window.showErrorMessage(`Failed to read file: ${error}`);
            return undefined;
        }
    }

    /**
     * Writes content to a file.
     * @param fileUri The URI of the file to write to.
     * @param content The UTF-8 string content to write.
     * @returns True if the write was successful, false otherwise.
     */
    public async writeFile(fileUri: Uri, content: string): Promise<boolean> {
        try {
            const fileData = Buffer.from(content, 'utf8');
            await workspace.fs.writeFile(fileUri, fileData);
            return true;
        } catch (error) {
            console.error(`Failed to write file at ${fileUri.fsPath}:`, error);
            window.showErrorMessage(`Failed to write file: ${error}`);
            return false;
        }
    }

    /**
     * Deletes a file.
     * @param fileUri The URI of the file to delete.
     */
    public async deleteFile(fileUri: Uri): Promise<void> {
        try {
            await workspace.fs.delete(fileUri);
        } catch (error) {
            console.error(`Failed to delete file at ${fileUri.fsPath}:`, error);
            window.showErrorMessage(`Failed to delete file: ${error}`);
        }
    }

    /**
     * Checks whether a file exists.
     * @param uri The URI of the file to check.
     * @returns True if the file exists, false otherwise.
     */
    public async exists(uri: Uri): Promise<boolean> {
        try {
            await workspace.fs.stat(uri);
            return true;
        } catch {
            return false;
        }
    }
}
