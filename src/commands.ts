import * as vscode from 'vscode';
import { superOfficeAuthenticationFlow } from './services/authService';
import { clearTokenSet } from './services/tokenService';
import { ScriptInfo } from './services/types';
import { executeScript, getScriptEntity } from './services/scriptService';
import { Node } from './providers/scriptsTreeViewDataProvider';
import { vfsProvider } from './extension';
import path = require('path');
import { writeFileAsync } from './workspace/workspaceFileManager';

const openedScripts: Map<string, vscode.TextDocument> = new Map();

// Constants for command names
const CMD_SIGN_IN = 'vscode-superoffice.signIn';
const CMD_SIGN_OUT = 'vscode-superoffice.signOut';
const CMD_SHOW_SCRIPT_INFO = 'vscode-superoffice.showScriptInfo';
const CMD_PREVIEW_SCRIPT = 'vscode-superoffice.previewScript';
const CMD_DOWNLOAD_SCRIPT = 'vscode-superoffice.downloadScript';
const CMD_EXECUTE_SCRIPT = 'vscode-superoffice.executeScript';

export const VFS_SCHEME = 'vfs';

// Register Command for Sign-In
export const signInCommand = vscode.commands.registerCommand(CMD_SIGN_IN, async () => {
    try {
        if (await superOfficeAuthenticationFlow()) {
            vscode.window.showInformationMessage('Signed In!');
        }
    } catch (err) {
        vscode.window.showErrorMessage(`Failed to sign in: ${err}`);
    }
});

// Register Command for Sign-Out
export const signOutCommand = vscode.commands.registerCommand(CMD_SIGN_OUT, async () => {
    await clearTokenSet();
    vscode.window.showInformationMessage('Signed Out!');
});

// Register Command to Show Script Info
export const showScriptInfoCommand = vscode.commands.registerCommand(CMD_SHOW_SCRIPT_INFO, async (script: ScriptInfo) => {
    const doc = openedScripts.get(script.PrimaryKey);
    doc ? vscode.window.showTextDocument(doc) : (async () => {
        const jsonString = JSON.stringify(script, null, 2);  // Pretty print JSON
        const document = await vscode.workspace.openTextDocument({ content: jsonString, language: 'json' });
        vscode.window.showTextDocument(document);
        openedScripts.set(script.PrimaryKey, document);
    })();
});

// Register Command to Preview Script. This version uses the Virtual File System Provider
export const previewScriptCommand = vscode.commands.registerCommand(CMD_PREVIEW_SCRIPT, async (node: Node) => {
    if (node?.scriptInfo) {
        const scriptInfo: ScriptInfo = node.scriptInfo;
        try {
            const scriptEntity = await getScriptEntity(scriptInfo.uniqueIdentifier);

            // Create a virtual URI for the file based on the desired filename
            const filename = `${scriptInfo.name}.js`;
            const virtualUri = vscode.Uri.parse(`${VFS_SCHEME}:/scripts/${filename}`);

            // "Write" the content to the virtual file
            vfsProvider.writeFile(virtualUri, Buffer.from(scriptEntity.Source, 'utf8'), { create: true, overwrite: true });

            // Open the virtual file in VSCode
            const document = await vscode.workspace.openTextDocument(virtualUri);
            vscode.window.showTextDocument(document);
        } catch (err) {
            vscode.window.showErrorMessage(`Failed to preview script: ${err}`);
        }
    }
});

// Register command to download the script and store it into workspace
export const downloadScriptCommand = vscode.commands.registerCommand(CMD_DOWNLOAD_SCRIPT, async (node: Node) => {
    if (node?.scriptInfo) {
        const scriptInfo: ScriptInfo = node.scriptInfo;
        if (vscode.workspace.workspaceFolders !== undefined) {
            try {
                const scriptEntity = await getScriptEntity(scriptInfo.uniqueIdentifier);
                const filePath = path.join(scriptEntity.Path, scriptEntity.Name + ".js");

                const fullPath = await writeFileAsync(filePath, scriptEntity.Source);

                const document = await vscode.workspace.openTextDocument(vscode.Uri.file(fullPath));
                vscode.window.showTextDocument(document);
            } catch (err) {
                throw new Error(`Failed to download script: ${err}`);
            }
        }
        else {
            vscode.window.showErrorMessage("VSCODE-SUPEROFFICE: Working folder not found, open a folder an try again");
        }
    }
});
/*
export const executeScriptCommand = vscode.commands.registerCommand(CMD_EXECUTE_SCRIPT, async (node: Node) => {
    vscode.window.showInformationMessage('Not implemented yet!');
});*/

export const executeScriptCommand2 = vscode.commands.registerCommand(CMD_EXECUTE_SCRIPT, async (fileUri: vscode.Uri) => {
    if (fileUri && fileUri.fsPath) {
        try {
            const fileContent = await vscode.workspace.fs.readFile(fileUri);
            const decodedContent = new TextDecoder().decode(fileContent);

            // Send the script content to the server for execution
            const result = await executeScript(decodedContent);
            vscode.window.showInformationMessage(result.Output);
        } catch (err) {
            vscode.window.showErrorMessage(`Failed to execute script: ${err}`);
            //throw new Error(`Failed to download script: ${err}`);
        }
    } else {
        vscode.window.showInformationMessage('No file selected!');
    }
});