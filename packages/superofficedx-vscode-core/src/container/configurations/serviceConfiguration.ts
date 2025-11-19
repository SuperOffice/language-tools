import { DIContainer } from '../core/diContainer';
import { ConfigurationKeys } from './configurationKeys';
import { FileSystemService } from '../../services/fileSystemService';
import { AuthenticationService } from '../../services/authenticationService';
import { HttpService } from '../../services/httpService';
import { NodeService } from '../../services/nodeService';
import { MockSuperofficeDataService } from '../../services/mockSuperofficeDataService';
import { SourceControlService } from '../../services/sourceControlService';

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

    // Source Control Services - Phase 2
    container.registerSingleton(ConfigurationKeys.MockSuperofficeDataService, () =>
        new MockSuperofficeDataService()
    );

    container.registerSingleton(ConfigurationKeys.SourceControlService, () =>
        new SourceControlService(
            container.resolve(ConfigurationKeys.MockSuperofficeDataService),
            container.resolve(ConfigurationKeys.ExtensionContext)
        )
    );
}
