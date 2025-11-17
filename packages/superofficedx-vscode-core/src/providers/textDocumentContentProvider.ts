import { TextDocumentContentProvider, Uri, EventEmitter, ProviderResult } from 'vscode';

export class CustomTextDocumentContentProvider implements TextDocumentContentProvider {
    // emitter and its event
    onDidChangeEmitter = new EventEmitter<Uri>();
    onDidChange = this.onDidChangeEmitter.event;

    provideTextDocumentContent(uri: Uri): ProviderResult<string> {
        return uri.path;
    }
}
