import * as vscode from 'vscode'

export interface IFileSystemHandler {
    readFile(fileUri: vscode.Uri): Promise<string | undefined>;
    writeFile(fileUri: vscode.Uri, content: string): Promise<boolean>;
    deleteFile(fileUri: vscode.Uri): Promise<void>;
    exists(uri: vscode.Uri): Promise<boolean>;
}


export class FileSystemHandler implements IFileSystemHandler {
    public async readFile(fileUri: vscode.Uri): Promise<string | undefined> {
        try {
            const fileData = await vscode.workspace.fs.readFile(fileUri);
            return Buffer.from(fileData).toString('utf8');
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to read file: ${error}`);
            return undefined;
        }
    }

    public async writeFile(fileUri: vscode.Uri, content: string): Promise<boolean> {
        try {
            const fileData = Buffer.from(content, 'utf8');
            await vscode.workspace.fs.writeFile(fileUri, fileData);
            return true;
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to write file: ${error}`);
            return false;
        }
    }

    public async deleteFile(fileUri: vscode.Uri): Promise<void> {
        try {
            await vscode.workspace.fs.delete(fileUri);
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to delete file: ${error}`);
        }
    }

    public async exists(uri: vscode.Uri): Promise<boolean> {
        try {
            await vscode.workspace.fs.stat(uri);
            return true;
        } catch {
            return false;
        }
    }
}
