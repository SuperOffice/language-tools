import { Position, type LanguageServicePlugin, type LanguageServicePluginInstance } from '@volar/language-server';
import { create as createTypeScriptServices } from 'volar-service-typescript';

export const create = (ts: typeof import('typescript')): LanguageServicePlugin[] => {
    const tsServicePlugins = createTypeScriptServices(ts as typeof import('typescript'), {});
    return tsServicePlugins.map<LanguageServicePlugin>((plugin) => {
        if (plugin.name === 'typescript-semantic') {
            return {
                ...plugin,
                create(context): LanguageServicePluginInstance {
                    const typeScriptPlugin = plugin.create(context);
                    return {
                        ...typeScriptPlugin,
                        async provideDiagnostics(document, token) {
                            const diagnostics = await typeScriptPlugin.provideDiagnostics!(document, token);

                            if (!diagnostics) return null;

                            if (document.uri.includes('import_')) {
                                const uri = document.uri;
                                const match = uri.match(/import_(\d+)_(\d+)/);
                                if (match) {
                                    const segment = match[0]; // "import_1_27"
                                    const parts = segment.split('_');
                                    const to = parseInt(parts[2], 10); // 27
                                    diagnostics.forEach(diagnostic => {
                                        diagnostic.range.start = Position.create(0, 0);
                                        diagnostic.range.end = Position.create(0, to);
                                    });
                                }
                            }
                            return diagnostics;
                        }
                    };
                },
            };
        }
        return plugin;
    });
};
