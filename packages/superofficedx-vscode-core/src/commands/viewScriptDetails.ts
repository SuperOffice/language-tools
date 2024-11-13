import * as vscode from 'vscode';
import { ScriptInfo } from '../types/types';
    
const openedScripts = new Map<string, vscode.TextDocument>();

export async function viewScriptDetails(script: ScriptInfo) {
    try {
        const doc = openedScripts.get(script.PrimaryKey);

        if (doc) {
            await vscode.window.showTextDocument(doc);
        } else {
            const jsonString = JSON.stringify(script, null, 2);  // Pretty print JSON
            const document = await vscode.workspace.openTextDocument({ content: jsonString, language: 'json' });
            await vscode.window.showTextDocument(document);
            openedScripts.set(script.PrimaryKey, document);
        }
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to open script details: ${error instanceof Error ? error.message : String(error)}`);
    }
}

