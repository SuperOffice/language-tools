import { FileSystemProvider, EventEmitter, FileChangeEvent, Event, Disposable, FileType, FileChangeType, FileStat, FileSystemError, Uri } from 'vscode';

export class VirtualFileSystemProvider implements FileSystemProvider {
    private _onDidChangeFile: EventEmitter<FileChangeEvent[]> = new EventEmitter();
    readonly onDidChangeFile: Event<FileChangeEvent[]> = this._onDidChangeFile.event;

    private files = new Map<string, Uint8Array>();

    // Required methods
    public watch(): Disposable {
        // Just a stub. You might want to implement actual watching logic if needed.
        return new Disposable(() => { });
    }

    public stat(uri: Uri): FileStat | Thenable<FileStat> {
        if (this.files.has(uri.toString())) {
            return {
                type: FileType.File,
                ctime: Date.now(),
                mtime: Date.now(),
                size: this.files.get(uri.toString())?.length || 0
            };
        }
        throw FileSystemError.FileNotFound();
    }

    public readDirectory(): [string, FileType][] | Thenable<[string, FileType][]> {
        return []; // Stub
    }

    public createDirectory(): void | Thenable<void> {
        // Stub
    }

    public readFile(uri: Uri): Uint8Array | Thenable<Uint8Array> {
        const data = this.files.get(uri.toString());
        if (data) {
            return data;
        }
        throw FileSystemError.FileNotFound();
    }

    public writeFile(uri: Uri, content: Uint8Array): void | Thenable<void> {
        this.files.set(uri.toString(), content);
        this._onDidChangeFile.fire([{ type: FileChangeType.Created, uri }]);
    }

    public delete(): void | Thenable<void> {
        // Implement delete logic if necessary
    }

    public rename(): void | Thenable<void> {
        // Implement rename logic if necessary
    }
}
