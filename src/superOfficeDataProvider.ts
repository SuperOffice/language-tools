import * as vscode from 'vscode';

export class Node implements vscode.TreeItem {
    constructor(
        public readonly label: string, 
        public readonly children?: Node[],
        public readonly iconPath?: vscode.ThemeIcon | { light: vscode.Uri; dark: vscode.Uri },
        public readonly command?: vscode.Command
    ) { }

    contextValue = 'node';
    collapsibleState = this.children && this.children.length > 0 ? 
        vscode.TreeItemCollapsibleState.Collapsed : 
        vscode.TreeItemCollapsibleState.None;
}
export class SuperOfficeDataProvider implements vscode.TreeDataProvider<Node> {
    private _onDidChangeTreeData: vscode.EventEmitter<Node | undefined> = new vscode.EventEmitter<Node | undefined>();
    readonly onDidChangeTreeData: vscode.Event<Node | undefined> = this._onDidChangeTreeData.event;

    getTreeItem(element: Node): vscode.TreeItem {
        return element;
    }

    getChildren(element?: Node): Thenable<Node[]> {
        if (element) {
            return Promise.resolve(element.children || []);
        }
         // Return root level nodes here
        return Promise.resolve([
            new Node("Sign in to SuperOffice..", [], new vscode.ThemeIcon('log-in'),{
                command: 'vscode-superoffice.signIn',
                title: '',
                arguments: []
            }),
            new Node("Item 1", [
                new Node("Child of Item 1", [], new vscode.ThemeIcon('book')),
                new Node("Another Child of Item 1", [], new vscode.ThemeIcon('zap'))
            ], new vscode.ThemeIcon('folder'))
        ]);
    }
}
