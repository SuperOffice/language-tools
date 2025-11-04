/**
 * ServiceKeys registration keys for the DI container
 */
export const ServiceKeys = {
    // Services
    FileSystemService: Symbol('FileSystemService'),
    AuthenticationService: Symbol('AuthenticationService'),
    HttpService: Symbol('HttpService'),
    NodeService: Symbol('NodeService'),

    // Providers
    AuthenticationProvider: Symbol('AuthenticationProvider'),
    TreeViewDataProvider: Symbol('TreeViewDataProvider'),
    TextDocumentContentProvider: Symbol('TextDocumentContentProvider'),

    // VS Code Context
    ExtensionContext: Symbol('ExtensionContext'),
} as const;
