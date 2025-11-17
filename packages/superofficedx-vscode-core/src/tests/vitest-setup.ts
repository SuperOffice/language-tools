// Setup file for Vitest - mocks VS Code API
import { vi, beforeEach } from 'vitest';

// Create a simple in-memory file system for testing
const mockFileSystem: Record<string, Uint8Array> = {};

// Mock the entire VS Code module
vi.mock('vscode', async () => {
    return {
        window: {
            showInformationMessage: vi.fn().mockResolvedValue(undefined),
            showErrorMessage: vi.fn().mockResolvedValue(undefined),
            showWarningMessage: vi.fn().mockResolvedValue(undefined),
            createOutputChannel: vi.fn(() => ({
                appendLine: vi.fn(),
                show: vi.fn(),
                dispose: vi.fn(),
            })),
        },
        workspace: {
            workspaceFolders: [
                {
                    uri: {
                        fsPath: 'c:\\mock\\workspace',
                        scheme: 'file',
                        path: '/c:/mock/workspace',
                    },
                    name: 'mock-workspace',
                    index: 0,
                }
            ],
            fs: {
                readFile: vi.fn().mockImplementation((uri) => {
                    if (mockFileSystem[uri.fsPath]) {
                        return Promise.resolve(mockFileSystem[uri.fsPath]);
                    } else {
                        // Throw error when file doesn't exist (this is how VS Code works)
                        return Promise.reject(new Error('File not found'));
                    }
                }),
                writeFile: vi.fn().mockImplementation((uri, content) => {
                    mockFileSystem[uri.fsPath] = content;
                    return Promise.resolve();
                }),
                delete: vi.fn().mockImplementation((uri) => {
                    delete mockFileSystem[uri.fsPath];
                    return Promise.resolve();
                }),
                stat: vi.fn().mockImplementation((uri) => {
                    if (mockFileSystem[uri.fsPath]) {
                        return Promise.resolve({
                            type: 1, // FileType.File
                            ctime: Date.now(),
                            mtime: Date.now(),
                            size: mockFileSystem[uri.fsPath].length,
                        });
                    } else {
                        // Throw error when file doesn't exist (this is how VS Code works)
                        return Promise.reject(new Error('File not found'));
                    }
                }),
            },
            getConfiguration: vi.fn(() => ({
                get: vi.fn(),
                has: vi.fn(),
                inspect: vi.fn(),
                update: vi.fn(),
            })),
        },
        Uri: {
            joinPath: vi.fn((_base: unknown, ...paths: string[]) => ({
                fsPath: `c:\\mock\\workspace\\${paths.join('\\')}`,
                scheme: 'file',
                path: `/c:/mock/workspace/${paths.join('/')}`,
            })),
            file: vi.fn((path: string) => ({
                fsPath: path,
                scheme: 'file',
                path: path.replace(/\\/g, '/'),
            })),
            parse: vi.fn((uri: string) => ({
                fsPath: uri.replace('file://', '').replace(/\//g, '\\'),
                scheme: 'file',
                path: uri.replace('file://', ''),
            })),
        },
        commands: {
            registerCommand: vi.fn(() => ({ dispose: vi.fn() })),
            executeCommand: vi.fn(),
        },
        FileType: {
            File: 1,
            Directory: 2,
            SymbolicLink: 64,
        },
        // Add other VS Code API mocks as needed
        ExtensionContext: vi.fn(),
        Disposable: vi.fn(() => ({ dispose: vi.fn() })),
        EventEmitter: vi.fn(() => ({
            fire: vi.fn(),
            event: vi.fn(),
            dispose: vi.fn(),
        })),
        TreeDataProvider: vi.fn(),
    };
});

// Global test setup
beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();

    // Clear the mock file system
    Object.keys(mockFileSystem).forEach(key => delete mockFileSystem[key]);
});
