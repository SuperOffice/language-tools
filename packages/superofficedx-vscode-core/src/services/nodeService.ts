// import { ChildProcess, SpawnOptions, spawn } from 'child_process';
// import path = require('path');
// import { httpLocalRequestAsync } from './httpServiceOld';
// import { debug, extensions, window, workspace } from 'vscode';
// import { NodeRequest } from '../types/types';

// const extensionRootAbsPath = getExtensionAbsPath();

// export async function executeScriptLocallyAsync(script: string): Promise<unknown> {

//     const options: SpawnOptions = {
//         cwd: extensionRootAbsPath,
//         stdio: ['pipe', 'pipe', 'pipe'],
//     };

//     const args = ['--inspect-brk=127.0.0.1:9234', '../node_app/mainworker.cjs'];
//     //const dummyArgs = ['--inspect-brk=127.0.0.1:9234', './out/child.js',];
    
//     console.log('Starting child process');
//     const childProcess = spawn(
//         'node',
//         args,	
//         options);
    
//     // Wait for the child process to initialize
// setTimeout(() => {
// 	startDebugging();
// }, 1000); // Wait 1 second before attaching the debugger
    
//     try {
//         const result = await waitProcessToEnd(childProcess, script);
//         console.log('Child process done: ' + JSON.stringify(result));
//         return result; // This will return the result from waitProcessToEnd
//     } catch (error) {
//         console.error('An error occurred with the child process:', error);
//         throw error; // Rethrow the error to handle it further up the call stack
//     }
// }

// function startDebugging() {

// 	// Check if there is a folder open in the workspace
// 	if (!workspace.workspaceFolders) {
// 		window.showErrorMessage('No folder is open in the workspace.');
// 		return;
// 	}

// 	const config = {
//         type: 'node',
//         request: 'attach',
//         name: 'Attach to Node Child',
// 		address: "127.0.0.1",
//         port: 9234, // Ensure this matches the port used in the --inspect-brk flag
//         skipFiles: ['<node_internals>/**'],
//         outFiles: ['${workspaceFolder}../node_app/mainworker.js'],
//     };

// 	// Start the debugging session with the specified configuration
// 	debug.startDebugging(workspace.workspaceFolders[0], config)
// 		.then(success => {
// 			if (success) {
// 				window.showInformationMessage('Debugging started successfully!');
// 			} else {
// 				window.showErrorMessage('Failed to start debugging.');
// 			}
// 		});
// }

// function waitProcessToEnd(childProcess: ChildProcess, script: string) {
// 	return new Promise((res, rej) => {
// 		childProcess.stdout?.setEncoding('utf8');
// 		childProcess.stdout?.on('data', (data) => {
//             const message = data.toString().trim(); // This will remove "Started\n" newline character
//             if (message === "Started") {
//                 const requestBody: NodeRequest = {
//                     scriptbody: script,
//                     parameters: "",
//                     eventData: "",
//                 };
//                 // The server is started, now send the HTTP request
//                 httpLocalRequestAsync<string>("http://localhost:8080/script", requestBody)
//                     .then(response => res(response.body)) // Resolve with the response from httpRequestToNodeApp
//                     .catch(error => rej(error)); // Reject if there's an error in the HTTP request
//             }
//             console.log(message);
// 		});

// 		childProcess.stderr?.setEncoding('utf8');
// 		childProcess.stderr?.on('data', (stderr) => {
// 			console.error(`Child Error: ${stderr}`);
// 		});

// 		childProcess.on('close', (exitCode) => {
// 			console.log(`Child exited with code: ${exitCode}`);
// 			return res(exitCode);
// 		});

// 		childProcess.on('error', (error) => {
// 			console.error(`Child process error: ${error.message}`);
// 			return rej(error);
// 		});
// 	});
// }

// function getExtensionAbsPath(): string {
// 	const extensionId = 'superoffice.superoffice-vscode';
// 	const extensionAbsPath = extensions.getExtension(
// 		extensionId,
// 	)?.extensionPath;
// 	if (extensionAbsPath === undefined) {
// 		const message = `Could not find extensionPath by extension ID: "${extensionId}"`;
// 		const error = new Error(message);
// 		console.error(error, message);
// 		throw error;
// 	}
// 	return extensionAbsPath;
// }