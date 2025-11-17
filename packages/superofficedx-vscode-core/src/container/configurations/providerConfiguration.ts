import { CustomTextDocumentContentProvider, SuperofficeAuthenticationProvider, TreeViewDataProvider } from "../../providers";
import { DIContainer } from "../core/diContainer";
import { ConfigurationKeys } from "./configurationKeys";

/**
 * Configures all provider registrations for the DI container
 */
export function configureProviders(container: DIContainer): void {
    container.registerSingleton(ConfigurationKeys.AuthenticationProvider, () =>
        new SuperofficeAuthenticationProvider(
            container.resolve(ConfigurationKeys.ExtensionContext),
            container.resolve(ConfigurationKeys.FileSystemService),
            container.resolve(ConfigurationKeys.AuthenticationService),
            container.resolve(ConfigurationKeys.HttpService)
        )
    );

    container.registerSingleton(ConfigurationKeys.TreeViewDataProvider, () =>
        new TreeViewDataProvider(
            container.resolve(ConfigurationKeys.ExtensionContext),
            container.resolve(ConfigurationKeys.AuthenticationProvider),
            container.resolve(ConfigurationKeys.HttpService)
        )
    );

    container.registerSingleton(ConfigurationKeys.TextDocumentContentProvider, () =>
        new CustomTextDocumentContentProvider()
    );
};
