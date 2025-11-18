/**
 * Configuration registration keys for the DI container
 */
export const ConfigurationKeys = {
    // Handlers
    FileSystemHandler: Symbol('FileSystemHandler'),
    HttpHandler: Symbol('HttpHandler'),

    // Services
    FileSystemService: Symbol('FileSystemService'),
    AuthenticationService: Symbol('AuthenticationService'),
    HttpService: Symbol('HttpService'),
    NodeService: Symbol('NodeService'),

    // Providers
    AuthenticationProvider: Symbol('AuthenticationProvider'),
    TreeViewDataProvider: Symbol('TreeViewDataProvider'),
    DummyTreeViewDataProvider: Symbol('DummyTreeViewDataProvider'),
    TextDocumentContentProvider: Symbol('TextDocumentContentProvider'),

    // VS Code Context
    ExtensionContext: Symbol('ExtensionContext'),
} as const;
