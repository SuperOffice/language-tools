import { ExtensionContext } from 'vscode';
import { DIContainer } from './diContainer';
import { ServiceKeys } from './serviceKeys';

// Import all handlers
import { FileSystemHandler, HttpHandler } from '../handlers';

// Import all services
import { FileSystemService, AuthenticationService, HttpService, NodeService } from '../services';

// Import providers
import { SuperofficeAuthenticationProvider, TreeViewDataProvider, CustomTextDocumentContentProvider } from '../providers';

/**
 * Configure and register all services in the DI container
 * ORDER MATTERS: Register dependencies before dependents!
 */
export function configureServices(container: DIContainer, context: ExtensionContext): void {
    // 1. Register VS Code context (no dependencies)
    container.registerInstance(ServiceKeys.ExtensionContext, context);

    // 2. Register handlers (no dependencies)
    container.registerSingleton(ServiceKeys.FileSystemHandler, () => new FileSystemHandler());
    container.registerSingleton(ServiceKeys.HttpHandler, () => new HttpHandler());

    // 3. Register services (depend on handlers)
    container.registerSingleton(ServiceKeys.FileSystemService, () =>
        new FileSystemService(container.resolve(ServiceKeys.FileSystemHandler))
    );

    container.registerSingleton(ServiceKeys.AuthenticationService, () =>
        new AuthenticationService()
    );

    // HttpService depends on HttpHandler and FileSystemService
    container.registerSingleton(ServiceKeys.HttpService, () =>
        new HttpService(
            container.resolve(ServiceKeys.HttpHandler),
            container.resolve(ServiceKeys.FileSystemService)
        )
    );

    // NodeService depends on ExtensionContext and HttpHandler
    container.registerSingleton(ServiceKeys.NodeService, () =>
        new NodeService(
            container.resolve(ServiceKeys.ExtensionContext),
            container.resolve(ServiceKeys.HttpHandler)
        )
    );

    // 4. Register providers (depend on services)
    container.registerSingleton(ServiceKeys.AuthenticationProvider, () =>
        new SuperofficeAuthenticationProvider(
            container.resolve(ServiceKeys.ExtensionContext),
            container.resolve(ServiceKeys.FileSystemService),
            container.resolve(ServiceKeys.AuthenticationService),
            container.resolve(ServiceKeys.HttpService)
        )
    );

    container.registerSingleton(ServiceKeys.TreeViewDataProvider, () =>
        new TreeViewDataProvider(
            container.resolve(ServiceKeys.ExtensionContext),
            container.resolve(ServiceKeys.AuthenticationProvider),
            container.resolve(ServiceKeys.HttpService)
        )
    );

    container.registerSingleton(ServiceKeys.TextDocumentContentProvider, () =>
        new CustomTextDocumentContentProvider()
    );
}

/**
 * Create and configure a new DI container
 */
export function createContainer(context: ExtensionContext): DIContainer {
    const container = new DIContainer();
    configureServices(container, context);
    return container;
}
