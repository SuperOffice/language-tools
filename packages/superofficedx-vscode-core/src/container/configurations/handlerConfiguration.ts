import { FileSystemHandler, HttpHandler } from "../../handlers";
import { DIContainer } from "../core/diContainer";
import { ConfigurationKeys } from "./configurationKeys";

/**
 * Configures all handler registrations for the DI container
 */
export function configureHandlers(container: DIContainer): void {
    container.registerSingleton(ConfigurationKeys.FileSystemHandler, () => new FileSystemHandler());
    container.registerSingleton(ConfigurationKeys.HttpHandler, () => new HttpHandler());
};
