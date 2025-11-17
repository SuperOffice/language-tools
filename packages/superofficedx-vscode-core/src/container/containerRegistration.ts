import { ExtensionContext } from 'vscode';
import {
    configureContainer,
    configureHandlers,
    configureProviders,
    configureServices,
} from './configurations';
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
