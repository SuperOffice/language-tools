import * as assert from 'assert';
import * as vscode from 'vscode';
import { FileSystemHandler } from '../../../handlers/fileSystemHandler';

suite('FileSystemHandler Test Suite', () => {
    const fsHandler = new FileSystemHandler();
    let tempFileUri: vscode.Uri;

    suiteSetup(async () => {
        // Set up a temporary file URI for testing
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) {
            throw new Error("No workspace folder is open.");
        }
        const folderUri = workspaceFolders[0].uri;
        tempFileUri = vscode.Uri.joinPath(folderUri, 'tempFile.txt');
    });

    test('writeFile - should write content to a file', async () => {
        const content = 'Hello, VSCode!';
        const result = await fsHandler.writeFile(tempFileUri, content);

        assert.strictEqual(result, true, 'Expected writeFile to return true');
        const fileContent = await fsHandler.readFile(tempFileUri);
        assert.strictEqual(fileContent, content, 'Expected file content to match written content');
    });

    test('readFile - should read content from a file', async () => {
        const content = 'Read this content!';
        await fsHandler.writeFile(tempFileUri, content);

        const fileContent = await fsHandler.readFile(tempFileUri);
        assert.strictEqual(fileContent, content, 'Expected read content to match file content');
    });

    test('deleteFile - should delete the file', async () => {
        await fsHandler.writeFile(tempFileUri, 'Temporary content');
        await fsHandler.deleteFile(tempFileUri);

        const fileExists = await fsHandler.exists(tempFileUri);
        assert.strictEqual(fileExists, false, 'Expected file to not exist after deletion');
    });

    test('exists - should return true if file exists, false otherwise', async () => {
        await fsHandler.writeFile(tempFileUri, 'Checking existence');
        const fileExists = await fsHandler.exists(tempFileUri);
        assert.strictEqual(fileExists, true, 'Expected file to exist');

        await fsHandler.deleteFile(tempFileUri);
        const fileDoesNotExist = await fsHandler.exists(tempFileUri);
        assert.strictEqual(fileDoesNotExist, false, 'Expected file to not exist');
    });

    suiteTeardown(async () => {
        // Cleanup: delete the temporary file if it still exists
        if (await fsHandler.exists(tempFileUri)) {
            await fsHandler.deleteFile(tempFileUri);
        }
        vscode.window.showInformationMessage('All tests done!');
    });
});
