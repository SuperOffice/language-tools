import * as vscode from 'vscode';
import { ScriptInfo } from './types/types';
import { executeScript, getScriptEntity } from './services/scriptService';
import { Node } from './providers/scriptsTreeViewDataProvider';
import { superofficeAuthenticationProvider, vfsProvider } from './extension';
import {CONFIG_COMMANDS } from './config';
import { joinPaths, writeFile } from './workspace/fileSystemHandler';

const openedScripts: Map<string, vscode.TextDocument> = new Map();

// Register Command for Sign-In
export const signInCommand = vscode.commands.registerCommand(CONFIG_COMMANDS.CMD_SIGN_IN, async () => {
    try {
        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "Signing In to SuperOffice...",
            cancellable: false
        }, async () => {
            // Perform the session creation and data fetching here
            if (await superofficeAuthenticationProvider.createSession([])) {
                vscode.window.showInformationMessage('Signed In!');
            }
        });
    } catch (err) {
        vscode.window.showErrorMessage(`Failed to sign in: ${err}`);
    }
});

// Register Command for Sign-Out
export const signOutCommand = vscode.commands.registerCommand(CONFIG_COMMANDS.CMD_SIGN_OUT, async () => {
    await superofficeAuthenticationProvider.removeSession();
    vscode.window.showInformationMessage('Signed Out!');
});

// Register Command to Show Script Info
export const showScriptInfoCommand = vscode.commands.registerCommand(CONFIG_COMMANDS.CMD_SHOW_SCRIPT_INFO, async (script: ScriptInfo) => {
    const doc = openedScripts.get(script.PrimaryKey);
    doc ? vscode.window.showTextDocument(doc) : (async () => {
        const jsonString = JSON.stringify(script, null, 2);  // Pretty print JSON
        const document = await vscode.workspace.openTextDocument({ content: jsonString, language: 'json' });
        vscode.window.showTextDocument(document);
        openedScripts.set(script.PrimaryKey, document);
    })();
});

// Register Command to Preview Script. This version uses the Virtual File System Provider
export const previewScriptCommand = vscode.commands.registerCommand(CONFIG_COMMANDS.CMD_PREVIEW_SCRIPT, async (node: Node) => {
    if (node?.scriptInfo) {
        const scriptInfo: ScriptInfo = node.scriptInfo;
        try {
            const scriptEntity = await getScriptEntity(scriptInfo.uniqueIdentifier);

            // Create a virtual URI for the file based on the desired filename
            const filename = `${scriptInfo.name}.js`;
            const virtualUri = vscode.Uri.parse(`${CONFIG_COMMANDS.VFS_SCHEME}:/scripts/${filename}`);

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
export const downloadScriptCommand = vscode.commands.registerCommand(CONFIG_COMMANDS.CMD_DOWNLOAD_SCRIPT, async (node: Node) => {
    if (node?.scriptInfo) {
        const scriptInfo: ScriptInfo = node.scriptInfo;
        if (vscode.workspace.workspaceFolders !== undefined) {
            try {
                const scriptEntity = await getScriptEntity(scriptInfo.uniqueIdentifier);
                const filePath = joinPaths(scriptEntity.Path, scriptEntity.Name + ".js");
                const fullPath = await writeFile(filePath, scriptEntity.Source);
                const document = await vscode.workspace.openTextDocument(fullPath);
                vscode.window.showTextDocument(document);
            } catch (err) {
                throw new Error(`Failed to download script: ${err}`);
            }
        }
        else {
            vscode.window.showErrorMessage("superoffice-vscode: Working folder not found, open a folder an try again");
        }
    }
});

export const executeScriptCommand = vscode.commands.registerCommand(CONFIG_COMMANDS.CMD_EXECUTE_SCRIPT, async (fileUri: vscode.Uri) => {
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