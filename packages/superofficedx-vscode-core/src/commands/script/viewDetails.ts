import { TextDocument, workspace, window } from 'vscode';
import { ScriptInfo } from '../../types/index';

const openedScripts = new Map<string, TextDocument>();

export async function viewDetails(script: ScriptInfo) {
    try {
        const doc = openedScripts.get(script.PrimaryKey);

        if (doc) {
            await window.showTextDocument(doc);
        } else {
            const jsonString = JSON.stringify(script, null, 2);  // Pretty print JSON
            const document = await workspace.openTextDocument({ content: jsonString, language: 'json' });
            await window.showTextDocument(document);
            openedScripts.set(script.PrimaryKey, document);
        }
    } catch (error) {
        window.showErrorMessage(`Failed to open script details: ${error instanceof Error ? error.message : String(error)}`);
    }
}

