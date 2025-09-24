import { create as createEmmetService } from 'volar-service-emmet';
import { create as createHtmlService } from 'volar-service-html';
import { create as createCssService } from 'volar-service-css';
import { createServer, createConnection, createTypeScriptProject, loadTsdkByPath } from '@volar/language-server/node.js';
import { create as createTypeScriptServices } from './typescriptPlugin.js';
import { getLanguagePlugin } from './languagePlugin.js';

const connection = createConnection();

const server = createServer(connection);

connection.listen();

connection.onInitialize(params => {
    const tsdk = loadTsdkByPath(params.initializationOptions.typescript.tsdk, params.locale);
    return server.initialize(
        params,
        createTypeScriptProject(tsdk.typescript, tsdk.diagnosticMessages, () => ({
            languagePlugins: [getLanguagePlugin()],
        })),
        [
            createHtmlService(),
            createCssService(),
            createEmmetService({}),
            ...createTypeScriptServices(tsdk.typescript),
        ],
    );
});

connection.onInitialized(server.initialized);

connection.onShutdown(server.shutdown);
