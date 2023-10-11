import * as vscode from 'vscode';

export class WebviewViewProvider implements vscode.WebviewViewProvider {
    private _view?: vscode.WebviewView;
    public static readonly viewId = 'scriptsWebview';

    constructor(
		private readonly _extensionUri: vscode.Uri,
	) { }

    resolveWebviewView(
        webviewView: vscode.WebviewView,
        _context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken
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
                    <ul id="myUL">
                        <li><span class="caret">Beverages</span>
                            <ul class="nested">
                            <li>Water</li>
                            <li>Coffee</li>
                            <li><span class="caret">Tea</span>
                                <ul class="nested">
                                <li>Black Tea</li>
                                <li>White Tea</li>
                                <li><span class="caret">Green Tea</span>
                                    <ul class="nested">
                                    <li>Sencha</li>
                                    <li>Gyokuro</li>
                                    <li>Matcha</li>
                                    <li>Pi Lo Chun</li>
                                    </ul>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                    </ul>
                </body>
                </html>`;
    }
}
