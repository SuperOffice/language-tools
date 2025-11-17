import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import * as vscode from 'vscode';
import { FileSystemHandler } from '../../../handlers/fileSystemHandler';

describe('FileSystemHandler Test Suite', () => {
    let fsHandler: FileSystemHandler;
    let tempFileUri: vscode.Uri;

    beforeEach(() => {
        // Clear the mock file system before each test
        if (vscode.workspace.fs.__clearMockFileSystem) {
            vscode.workspace.fs.__clearMockFileSystem();
        }
        
        // Initialize the file system handler
        fsHandler = new FileSystemHandler();
        
        // Create a mock temporary file URI
        tempFileUri = vscode.Uri.joinPath(
            { path: '/mock/workspace' } as vscode.Uri,
            'tempFile.txt'
        );
    });

    afterEach(() => {
        // Clear mocks after each test
        vi.clearAllMocks();
    });

    it('writeFile - should write content to a file', async () => {
        const content = 'Hello, VSCode!';
        const result = await fsHandler.writeFile(tempFileUri, content);

        expect(result).toBe(true);
        
        const fileContent = await fsHandler.readFile(tempFileUri);
        expect(fileContent).toBe(content);
    });

    it('readFile - should read content from a file', async () => {
        const content = 'Read this content!';
        await fsHandler.writeFile(tempFileUri, content);

        const fileContent = await fsHandler.readFile(tempFileUri);
        expect(fileContent).toBe(content);
    });

    it('deleteFile - should delete the file', async () => {
        await fsHandler.writeFile(tempFileUri, 'Temporary content');
        await fsHandler.deleteFile(tempFileUri);

        const fileExists = await fsHandler.exists(tempFileUri);
        expect(fileExists).toBe(false);
    });

    it('exists - should return true if file exists, false otherwise', async () => {
        await fsHandler.writeFile(tempFileUri, 'Checking existence');
        const fileExists = await fsHandler.exists(tempFileUri);
        expect(fileExists).toBe(true);

        await fsHandler.deleteFile(tempFileUri);
        const fileDoesNotExist = await fsHandler.exists(tempFileUri);
        expect(fileDoesNotExist).toBe(false);
    });

    it('readFile - should return undefined when reading fails', async () => {
        const nonExistentUri = vscode.Uri.joinPath(
            { path: '/mock/workspace' } as vscode.Uri,
            'nonexistent.txt'
        );

        const fileContent = await fsHandler.readFile(nonExistentUri);
        expect(fileContent).toBeUndefined();
        expect(vscode.window.showErrorMessage).toHaveBeenCalled();
    });

    it('writeFile - should return false when writing fails', async () => {
        // Mock writeFile to throw an error
        vi.spyOn(vscode.workspace.fs, 'writeFile').mockRejectedValueOnce(new Error('Write error'));

        const result = await fsHandler.writeFile(tempFileUri, 'content');
        expect(result).toBe(false);
        expect(vscode.window.showErrorMessage).toHaveBeenCalled();
    });
});
