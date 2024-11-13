import * as vscode from 'vscode';

export class VirtualFileSystemProvider implements vscode.FileSystemProvider {
    private _onDidChangeFile: vscode.EventEmitter<vscode.FileChangeEvent[]> = new vscode.EventEmitter();
    readonly onDidChangeFile: vscode.Event<vscode.FileChangeEvent[]> = this._onDidChangeFile.event;

    private files = new Map<string, Uint8Array>();

    // Required methods
    watch(): vscode.Disposable {
        // Just a stub. You might want to implement actual watching logic if needed.
        return new vscode.Disposable(() => { });
    }

    stat(uri: vscode.Uri): vscode.FileStat | Thenable<vscode.FileStat> {
        if (this.files.has(uri.toString())) {
            return {
                type: vscode.FileType.File,
                ctime: Date.now(),
                mtime: Date.now(),
                size: this.files.get(uri.toString())?.length || 0
            };
        }
        throw vscode.FileSystemError.FileNotFound();
    }

    readDirectory(): [string, vscode.FileType][] | Thenable<[string, vscode.FileType][]> {
        return []; // Stub
    }

    createDirectory(): void | Thenable<void> {
        // Stub
    }

    readFile(uri: vscode.Uri): Uint8Array | Thenable<Uint8Array> {
        const data = this.files.get(uri.toString());
        if (data) {
            return data;
        }
        throw vscode.FileSystemError.FileNotFound();
    }

    writeFile(uri: vscode.Uri, content: Uint8Array): void | Thenable<void> {
        this.files.set(uri.toString(), content);
        this._onDidChangeFile.fire([{ type: vscode.FileChangeType.Created, uri }]);
    }

    delete(): void | Thenable<void> {
        // Implement delete logic if necessary
    }

    rename(): void | Thenable<void> {
        // Implement rename logic if necessary
    }
}
