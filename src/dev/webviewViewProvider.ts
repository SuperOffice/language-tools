import * as vscode from 'vscode';

export class WebviewViewProvider implements vscode.WebviewViewProvider {
    private _view?: vscode.WebviewView;

    constructor() { }

    resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        token: vscode.CancellationToken
    ): void {
        this._view = webviewView;
        
        webviewView.webview.options = {
            enableScripts: true
        };

        webviewView.webview.html = this.getHtmlForWebview();
    }

    private getHtmlForWebview() {
        // Return your HTML content here
        return `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Development WebView</title>
                </head>
                <body>
                    Content for the development WebView goes here.
                </body>
                </html>`;
    }
}
