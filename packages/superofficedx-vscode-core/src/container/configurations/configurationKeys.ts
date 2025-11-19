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
    ExtraTablesTreeViewDataProvider: Symbol('ExtraTablesTreeViewDataProvider'),
    TextDocumentContentProvider: Symbol('TextDocumentContentProvider'),

    // Source Control
    SourceControlService: Symbol('SourceControlService'),
    SuperofficeQuickDiffProvider: Symbol('SuperofficeQuickDiffProvider'),
    SuperofficeDocumentContentProvider: Symbol('SuperofficeDocumentContentProvider'),
    MockSuperofficeDataService: Symbol('MockSuperofficeDataService'),

    // VS Code Context
    ExtensionContext: Symbol('ExtensionContext'),
} as const;
