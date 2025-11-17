import * as vscode from 'vscode';
import { builtins } from '../../langium-crmscript/src/language/builtin/builtins.js';

export class DslLibraryFileSystemProvider implements vscode.FileSystemProvider {

    static register(context: vscode.ExtensionContext): void {
        context.subscriptions.push(
            vscode.workspace.registerFileSystemProvider('builtins', new DslLibraryFileSystemProvider(), {
                isReadonly: true,
                isCaseSensitive: false
            }));
    }

    stat(): vscode.FileStat {
        const date = Date.now();
        return {
            ctime: date,
            mtime: date,
            size: Buffer.from(builtins).length,
            type: vscode.FileType.File
        };
    }

    readFile(): Uint8Array {
        return new Uint8Array(Buffer.from(builtins));
    }

    // The following class members only serve to satisfy the interface

    private readonly didChangeFile = new vscode.EventEmitter<vscode.FileChangeEvent[]>();
    onDidChangeFile = this.didChangeFile.event;

    watch(): vscode.Disposable {
        return {
            dispose: (): void => { }
        };
    }

    readDirectory(): [] {
        throw vscode.FileSystemError.NoPermissions();
    }

    createDirectory(): void {
        throw vscode.FileSystemError.NoPermissions();
    }

    writeFile(): void {
        throw vscode.FileSystemError.NoPermissions();
    }

    delete(): void {
        throw vscode.FileSystemError.NoPermissions();
    }

    rename(): void {
        throw vscode.FileSystemError.NoPermissions();
    }
}
