import { Uri, workspace, window } from 'vscode'

export interface IFileSystemHandler {
    readFile(fileUri: Uri): Promise<string | undefined>;
    writeFile(fileUri: Uri, content: string): Promise<boolean>;
    deleteFile(fileUri: Uri): Promise<void>;
    exists(uri: Uri): Promise<boolean>;
}


export class FileSystemHandler implements IFileSystemHandler {
    public async readFile(fileUri: Uri): Promise<string | undefined> {
        try {
            const fileData = await workspace.fs.readFile(fileUri);
            return Buffer.from(fileData).toString('utf8');
        } catch (error) {
            window.showErrorMessage(`Failed to read file: ${error}`);
            return undefined;
        }
    }

    public async writeFile(fileUri: Uri, content: string): Promise<boolean> {
        try {
            const fileData = Buffer.from(content, 'utf8');
            await workspace.fs.writeFile(fileUri, fileData);
            return true;
        } catch (error) {
            window.showErrorMessage(`Failed to write file: ${error}`);
            return false;
        }
    }

    public async deleteFile(fileUri: Uri): Promise<void> {
        try {
            await workspace.fs.delete(fileUri);
        } catch (error) {
            window.showErrorMessage(`Failed to delete file: ${error}`);
        }
    }

    public async exists(uri: Uri): Promise<boolean> {
        try {
            await workspace.fs.stat(uri);
            return true;
        } catch {
            return false;
        }
    }
}
