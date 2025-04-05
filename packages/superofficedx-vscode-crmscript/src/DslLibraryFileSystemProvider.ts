import * as vscode from 'vscode';
import { builtins } from '../../langium-crmscript/src/language/builtin/builtins.js';

export class DslLibraryFileSystemProvider implements vscode.FileSystemProvider {

    static register(context: vscode.ExtensionContext) {
        context.subscriptions.push(
            vscode.workspace.registerFileSystemProvider('builtins', new DslLibraryFileSystemProvider(), {
                isReadonly: true,
                isCaseSensitive: false
            }));
    }

    stat(uri: vscode.Uri): vscode.FileStat {
        const date = Date.now();
        return {
            ctime: date,
            mtime: date,
            size: Buffer.from(builtins).length,
            type: vscode.FileType.File
        };
    }

    readFile(uri: vscode.Uri): Uint8Array {
        return new Uint8Array(Buffer.from(builtins));
    }

    // The following class members only serve to satisfy the interface

    private readonly didChangeFile = new vscode.EventEmitter<vscode.FileChangeEvent[]>();
    onDidChangeFile = this.didChangeFile.event;

    watch() {
        return {
            dispose: () => {}
        };
    }

    readDirectory(): [] {
        throw vscode.FileSystemError.NoPermissions();
    }

    createDirectory() {
        throw vscode.FileSystemError.NoPermissions();
    }

    writeFile() {
        throw vscode.FileSystemError.NoPermissions();
    }

    delete() {
        throw vscode.FileSystemError.NoPermissions();
    }

    rename() {
        throw vscode.FileSystemError.NoPermissions();
    }
}