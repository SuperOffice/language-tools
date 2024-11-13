import { ChildProcess, spawn, SpawnOptions } from "child_process";
import { IHttpHandler } from "../handlers/httpHandler";
import * as vscode from 'vscode'
import { Core } from "../constants";
import { NodeRequest, SuperOfficeAuthenticationSession, NodeResponse } from "../types";

export interface INodeService {
    executeScriptLocallyAsync(session: SuperOfficeAuthenticationSession, script: string): Promise<string>
}

export class NodeService implements INodeService {
    
    constructor(private httpHandler: IHttpHandler) { }

    private extensionRootAbsPath: string = this.getExtensionAbsPath();

    async executeScriptLocallyAsync(session: SuperOfficeAuthenticationSession, script: string): Promise<string> {       
        const childProcess = this.createChildProcess();
        
        // Wait for 1 second before proceeding. This is the wait-time for the node to get started.
        // TODO: Figure out a better way ot detecting when the node is ready to accept the script.
        // setTimeout(() => {
        //     this.startDebugger();
        // }, 1000);

        this.startDebugger();

        const result = await this.processHandler(session, childProcess, script);
        return result;
    }

    private createChildProcess(): ChildProcess {
        const options: SpawnOptions = {
            cwd: this.extensionRootAbsPath,
            stdio: 'pipe',
        };
    
        // If you want to debug the whole mainworker.cjs file, use '--inspect-brk''
        //const args = ['--inspect-brk=127.0.0.1:9234', '../node_app/mainworker.cjs'];
        const args = ['--inspect=127.0.0.1:9234', '../node_app/mainworker.cjs'];
        
        return spawn('node', args, options);
    }

    private startDebugger() {

        // Check if there is a folder open in the workspace
        if (!vscode.workspace.workspaceFolders) {
            vscode.window.showErrorMessage('No folder is open in the workspace.');
            return;
        }
    
        const config = {
            type: 'node',
            request: 'attach',
            name: 'Attach to Node Child',
            address: "127.0.0.1",
            port: 9234, // Ensure this matches the port used in the --inspect-brk flag
            skipFiles: ['<node_internals>/**'],
            outFiles: ['${workspaceFolder}../node_app/mainworker.js'],
        };
    
        // Start the debugging session with the specified configuration
        vscode.debug.startDebugging(vscode.workspace.workspaceFolders[0], config);
    }

    private processHandler(session: SuperOfficeAuthenticationSession, childProcess: ChildProcess, script: string): Promise<string> {
        return new Promise((res, rej) => {
            childProcess.stdout?.setEncoding('utf8');
            childProcess.stdout?.on('data', async (data) => {
                const message = data.toString().trim(); // This will remove "Started\n" newline character
                if (message === "Started") {
                    const requestBody: NodeRequest = {
                        scriptbody: script,
                        parameters: "",
                        eventData: "",
                    };
    
                    const result = await this.httpHandler.post<NodeResponse>('http://localhost:8080/script',
                        requestBody,
                        { 
                            'x-apiendpoint': `${session.webApiUri}`,
                            'x-accesstoken': `Bearer ${session.accessToken}`,
                            'Accept': 'application/json'
                        }
                        );
                    return res(result.result);
                }
            });
    
            childProcess.stderr?.setEncoding('utf8');
            childProcess.stderr?.on('data', (stderr) => {
                console.error(`Child Error: ${stderr}`);
            });
    
            childProcess.on('close', (exitCode) => {
                console.log(`Child exited with code: ${exitCode}`);
            });
    
            childProcess.on('error', (error) => {
                console.error(`Child process error: ${error.message}`);
                return rej(error);
            });
        });
    }

    getExtensionAbsPath(): string {
        const extensionPath = vscode.extensions.getExtension(Core.EXTENSION_NAME)?.extensionPath;
        if (!extensionPath) {
            throw new Error(`Could not find extensionPath by extension ID: "${Core.EXTENSION_NAME}"`);
        }
        return extensionPath;
    }

}

