import * as vscode from 'vscode';
import { AuthProvider } from '../constants';

export async function startNativeAppFlow() {
    try {
        await vscode.authentication.getSession(AuthProvider.ID, [], { createIfNone: true });
    } catch (error) {
        vscode.window.showErrorMessage(`StartNativeAppFlow failed: ${error instanceof Error ? error.message : String(error)}`);
    }
}