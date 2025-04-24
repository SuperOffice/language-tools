import { authentication, window } from 'vscode';

export async function startNativeAppFlow() {
    try {
        await authentication.getSession('superoffice', [], { createIfNone: true });
    } catch (error) {
        window.showInformationMessage(`StartNativeAppFlow failed: ${error instanceof Error ? error.message : String(error)}`);
    }
}