import { vi } from 'vitest';

// Mock vscode module for unit tests
export const commands = {
    registerCommand: vi.fn(() => ({
        dispose: vi.fn()
    }))
};

export const window = {
    showInformationMessage: vi.fn(),
    showErrorMessage: vi.fn(),
    showWarningMessage: vi.fn(),
    createTreeView: vi.fn()
};

// Mock workspace.fs for file system operations
const mockFileSystem = new Map<string, Uint8Array>();

export const workspace = {
    workspaceFolders: [],
    getConfiguration: vi.fn(),
    onDidChangeConfiguration: vi.fn(),
    fs: {
        readFile: vi.fn((uri: { path: string }): Promise<Uint8Array> => {
            const data = mockFileSystem.get(uri.path);
            if (!data) {
                return Promise.reject(new Error(`File not found: ${uri.path}`));
            }
            return Promise.resolve(data);
        }),
        writeFile: vi.fn((uri: { path: string }, content: Uint8Array): Promise<void> => {
            mockFileSystem.set(uri.path, content);
            return Promise.resolve();
        }),
        delete: vi.fn((uri: { path: string }): Promise<void> => {
            mockFileSystem.delete(uri.path);
            return Promise.resolve();
        }),
        stat: vi.fn((uri: { path: string }): Promise<{ type: number }> => {
            if (!mockFileSystem.has(uri.path)) {
                return Promise.reject(new Error(`File not found: ${uri.path}`));
            }
            return Promise.resolve({ type: 1 }); // FileType.File
        }),
        // Helper function to clear the mock file system between tests
        __clearMockFileSystem: (): void => {
            mockFileSystem.clear();
        }
    }
};

export const Uri = {
    parse: vi.fn((path: string): { path: string; toString: () => string } => ({ path, toString: (): string => path })),
    file: vi.fn((path: string): { path: string; toString: () => string } => ({ path, toString: (): string => path })),
    joinPath: vi.fn((base: { path: string }, ...segments: string[]): { path: string; fsPath: string; toString: () => string } => {
        const joined = [base.path, ...segments].join('/');
        return { path: joined, fsPath: joined, toString: (): string => joined };
    })
};

export const EventEmitter = vi.fn(() => ({
    event: vi.fn(),
    fire: vi.fn()
}));

export const TreeItemCollapsibleState = {
    None: 0,
    Collapsed: 1,
    Expanded: 2
};

export const FileSystemError = class FileSystemError extends Error {
    static FileNotFound(): FileSystemError {
        const error = new FileSystemError('File not found');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error as any).code = 'FileNotFound';
        return error;
    }
};

export const FileChangeType = {
    Changed: 1,
    Created: 2,
    Deleted: 3
};

export const Disposable = vi.fn(() => ({
    dispose: vi.fn()
}));
