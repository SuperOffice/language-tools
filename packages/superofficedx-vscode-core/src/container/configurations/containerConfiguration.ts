import { ExtensionContext } from "vscode";
import { DIContainer } from "../core/diContainer";
import { ConfigurationKeys } from "./configurationKeys";

/**
 * Configures all base registrations for the DI container
 */
export function configureContainer(container: DIContainer, context: ExtensionContext): void {
    container.registerInstance(ConfigurationKeys.ExtensionContext, context);
};
