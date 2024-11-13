import { Uri, ExtensionContext } from 'vscode';
import * as lsp from 'vscode-languageclient/node';
import { getTsdk } from '@volar/vscode';

let client: lsp.BaseLanguageClient;

export async function startLanguageFeatures(context: ExtensionContext): Promise<lsp.BaseLanguageClient> {
    // Register the language features
    const serverModule = Uri.joinPath(context.extensionUri, 'dist', 'server.js');
	const runOptions = { execArgv: <string[]>[] };

	const debugOptions = { execArgv: ['--nolazy', `--inspect${process.env.DEBUG_BREAK ? '-brk' : ''}=${process.env.DEBUG_SOCKET || '6009'}`] };
	//const debugOptions = { execArgv: ['--nolazy', '--inspect=' + 6009] };
	const serverOptions: lsp.ServerOptions = {
		run: {
			module: serverModule.fsPath,
			transport: lsp.TransportKind.ipc,
			options: runOptions
		},
		debug: {
			module: serverModule.fsPath,
			transport: lsp.TransportKind.ipc,
			options: debugOptions
		},
	};

	const clientOptions: lsp.LanguageClientOptions = {
		documentSelector: [
			{ language: 'tsfso' },
		],
		initializationOptions: {
			typescript: {
				tsdk: (await getTsdk(context))!.tsdk,
			}
		},
	};
	client = new lsp.LanguageClient(
		'superoffice',
		'SuperOffice Language Server',
		serverOptions,
		clientOptions,
	);
	await client.start();

	return client;
}