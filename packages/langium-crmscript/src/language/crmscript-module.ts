import { DeepPartial, LangiumSharedCoreServices, type Module, inject } from 'langium';
import { createDefaultModule, createDefaultSharedModule, type DefaultSharedModuleContext, type LangiumServices, type LangiumSharedServices, type PartialLangiumServices } from 'langium/lsp';
import { CrmscriptDefinitionGeneratedModule, CrmscriptImplementationGeneratedModule, CrmscriptGeneratedSharedModule } from './generated/module.js';
import { CrmscriptValidator, registerValidationChecks } from './crmscript-validator.js';
import { CrmscriptWorkspaceManager } from './builtin/workspaceManager.js';
import { CrmscriptScopeProvider } from './crmscript-scope.js';
import { CrmscriptCompletionProvider } from './lsp/completion-provider.js';

export type CrmscriptSharedServices = LangiumSharedServices;

export const CrmscriptSharedModule: Module<CrmscriptSharedServices, DeepPartial<CrmscriptSharedServices>> = {
    workspace: {
        WorkspaceManager: (services: LangiumSharedCoreServices) => new CrmscriptWorkspaceManager(services)
    }
};

/**
 * Declaration of custom services - add your own service classes here.
 */
export type CrmscriptAddedServices = {
    validation: {
        CrmscriptValidator: CrmscriptValidator
    }
}

/**
 * Union of Langium default services and your custom services - use this as constructor parameter
 * of custom service classes.
 */
export type CrmscriptServices = LangiumServices & CrmscriptAddedServices

/**
 * Dependency injection module that overrides Langium default services and contributes the
 * declared custom services. The Langium defaults can be partially specified to override only
 * selected services, while the custom services must be fully specified.
 */
export const CrmscriptModule: Module<CrmscriptServices, PartialLangiumServices & CrmscriptAddedServices> = {
    validation: {
        CrmscriptValidator: () => new CrmscriptValidator()
    },
    references: {
        ScopeProvider: (services) => new CrmscriptScopeProvider(services)
    },
    lsp: {
        CompletionProvider: (services) => new CrmscriptCompletionProvider(services)
    }
};

/**
 * Create the full set of services required by Langium.
 *
 * First inject the shared services by merging two modules:
 *  - Langium default shared services
 *  - Services generated by langium-cli
 *
 * Then inject the language-specific services by merging three modules:
 *  - Langium default language-specific services
 *  - Services generated by langium-cli
 *  - Services specified in this file
 *
 * @param context Optional module context with the LSP connection
 * @returns An object wrapping the shared services and the language-specific services
 */
export function createCrmscriptServices(context: DefaultSharedModuleContext): {
    shared: LangiumSharedServices,
    Definition: CrmscriptServices,
    Implementation: CrmscriptServices
} {
    const shared = inject(
        createDefaultSharedModule(context),
        CrmscriptGeneratedSharedModule,
        CrmscriptSharedModule
    );
    const Definition = inject(
        createDefaultModule({ shared }),
        CrmscriptDefinitionGeneratedModule,
        CrmscriptModule
    );
    const Implementation = inject(
        createDefaultModule({ shared }),
        CrmscriptImplementationGeneratedModule,
        CrmscriptModule
    );
    shared.ServiceRegistry.register(Definition);
    shared.ServiceRegistry.register(Implementation);
    registerValidationChecks(Definition);
    registerValidationChecks(Implementation);
    if (!context.connection) {
        // We don't run inside a language server
        // Therefore, initialize the configuration provider instantly
        shared.workspace.ConfigurationProvider.initialized({});
    }
    return { shared, Definition, Implementation };
}
