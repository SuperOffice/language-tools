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

export const workspace = {
    workspaceFolders: [],
    getConfiguration: vi.fn(),
    onDidChangeConfiguration: vi.fn()
};

export const Uri = {
    parse: vi.fn((path: string): { path: string; toString: () => string } => ({ path, toString: (): string => path })),
    file: vi.fn((path: string): { path: string; toString: () => string } => ({ path, toString: (): string => path })),
    joinPath: vi.fn()
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
