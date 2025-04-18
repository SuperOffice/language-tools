import * as vscode from 'vscode';
import { AuthProvider } from '../constants';

export async function startNativeAppFlowAsync() {
    try {
        await vscode.authentication.getSession(AuthProvider.ID, [], { createIfNone: true });
    } catch (error) {
        vscode.window.showInformationMessage(`StartNativeAppFlow failed: ${error instanceof Error ? error.message : String(error)}`);
    }
}