/**
 * ServiceKeys registration keys for the DI container
 */
export const ServiceKeys = {
    // Services
    FileSystemService: Symbol('FileSystemService'),
    AuthenticationService: Symbol('AuthenticationService'),
    HttpService: Symbol('HttpService'),
    NodeService: Symbol('NodeService')
} as const;
