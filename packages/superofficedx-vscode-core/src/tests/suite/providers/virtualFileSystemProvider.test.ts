// import * as vscode from 'vscode';
// import assert from 'assert';
// import sinon from 'sinon';
// import { VirtualFileSystemProvider } from '../../../providers/virtualFileSystemProvider';

// suite('VirtualFileSystemProvider', () => {
//     let vfsProvider: VirtualFileSystemProvider;
//     let testUri: vscode.Uri;

//     suiteSetup(() => {
//         // Initialize the VirtualFileSystemProvider and a test URI
//         vfsProvider = new VirtualFileSystemProvider();
//         testUri = vscode.Uri.parse('vfs:/test.txt');
//     });

//     suite('writeFile and readFile', () => {
//         test('should write and read a file', () => {
//             const content = new TextEncoder().encode('Hello, Mocha!');
//             vfsProvider.writeFile(testUri, content);

//             const readContent = vfsProvider.readFile(testUri);
//             assert.deepStrictEqual(readContent, content, 'The content read does not match what was written');
//         });

//         test('should throw an error when reading a non-existent file', () => {
//             const nonExistentUri = vscode.Uri.parse('vfs:/nonexistent.txt');
//             assert.throws(
//                 () => vfsProvider.readFile(nonExistentUri),
//                 (error) => {
//                     assert(error instanceof vscode.FileSystemError, 'Error is not an instance of FileSystemError');
//                     assert.strictEqual(error.code, 'FileNotFound', 'Error code is not "FileNotFound"');
//                     return true; // Return true if the error matches
//                 },
//                 'Expected FileNotFound error when reading a non-existent file'
//             );
//         });
//     });

//     suite('onDidChangeFile event', () => {
//         let onDidChangeFileSpy: sinon.SinonSpy;

//         setup(() => {
//             // Spy on the onDidChangeFile event
//             onDidChangeFileSpy = sinon.spy();
//             vfsProvider.onDidChangeFile(onDidChangeFileSpy);
//         });

//         teardown(() => {
//             // Restore the spy after each test
//             sinon.restore();
//         });

//         test('should emit an event when a file is written', () => {
//             const content = new TextEncoder().encode('Event file');
//             vfsProvider.writeFile(testUri, content);

//             assert.strictEqual(onDidChangeFileSpy.callCount, 1, 'Expected one event to be emitted');
//             const event = onDidChangeFileSpy.getCall(0).args[0];
//             assert.ok(Array.isArray(event), 'Expected event argument to be an array');
//             assert.strictEqual(event[0].type, vscode.FileChangeType.Created, 'Expected event type to be "Created"');
//             assert.strictEqual(event[0].uri.toString(), testUri.toString(), 'Event URI does not match the written file');
//         });
//     });
// });
