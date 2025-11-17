import { ExtensionContext } from 'vscode';
import { configureContainer } from './configurations/containerConfiguration';
import { configureHandlers } from './configurations/handlerConfiguration';
import { configureProviders } from './configurations/providerConfiguration';
import { configureServices } from './configurations/serviceConfiguration';
import { DIContainer } from './core/diContainer';

/**
 * Create and configure a new DI container
 */
export function createContainer(context: ExtensionContext): DIContainer {
    const container = new DIContainer();
    configureContainer(container, context);
    configureHandlers(container);
    configureServices(container);
    configureProviders(container);
    return container;
}
