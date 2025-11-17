import { DIContainer } from '../core/diContainer';
import { ConfigurationKeys } from './configurationKeys';
import {
    FileSystemService,
    AuthenticationService,
    HttpService,
    NodeService
} from '../../services';

/**
 * Configures all service registrations for the DI container
 */
export function configureServices(container: DIContainer): void {

    container.registerSingleton(ConfigurationKeys.FileSystemService, () =>
        new FileSystemService(container.resolve(ConfigurationKeys.FileSystemHandler))
    );

    container.registerSingleton(ConfigurationKeys.AuthenticationService, () =>
        new AuthenticationService()
    );

    container.registerSingleton(ConfigurationKeys.HttpService, () =>
        new HttpService(
            container.resolve(ConfigurationKeys.HttpHandler),
            container.resolve(ConfigurationKeys.FileSystemService)
        )
    );

    // NodeService depends on ExtensionContext and HttpHandler
    container.registerSingleton(ConfigurationKeys.NodeService, () =>
        new NodeService(
            container.resolve(ConfigurationKeys.ExtensionContext),
            container.resolve(ConfigurationKeys.HttpHandler)
        )
    );
}
