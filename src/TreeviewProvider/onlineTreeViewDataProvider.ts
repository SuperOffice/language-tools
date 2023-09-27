import * as vscode from 'vscode';

const jsonData = [
    {
        label: 'Root',
        children: [
            {
                label: '1.1',
                icon: new vscode.ThemeIcon('book'),
            },
            {
                label: '1.2',
                icon: new vscode.ThemeIcon('book'),
            }
        ],
        icon: new vscode.ThemeIcon('folder')
    },
    {
        label: 'Root 2',
        icon: new vscode.ThemeIcon('folder'),
    }
];

interface ApiItem {
    label: string;
    children?: ApiItem[];
    icon?: vscode.ThemeIcon;
    command?: vscode.Command;
}

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
export class OnlineTreeViewDataProvider implements vscode.TreeDataProvider<Node> {
    private _onDidChangeTreeData: vscode.EventEmitter<Node | undefined> = new vscode.EventEmitter<Node | undefined>();
    readonly onDidChangeTreeData: vscode.Event<Node | undefined> = this._onDidChangeTreeData.event;

    private isLoggedIn: boolean = false;

    // Call this method to trigger a refresh of the tree view
    public refresh(): void {
        this._onDidChangeTreeData.fire(undefined);
    }

    // This method is used to update the login status and refresh the tree
    public setLoggedIn(state: boolean): void {
        this.isLoggedIn = state;
        this.refresh();
    }

    getTreeItem(element: Node): vscode.TreeItem {
        return element;
    }

    getChildren(element?: Node): Thenable<Node[]> {
        if (element) {
            return Promise.resolve(element.children || []);
        }
        
        // Check if user is logged in
        if (this.isLoggedIn) {
            // Replace with data fetching logic if required when user is logged in
            /*return Promise.resolve([
                new Node("Root", [
                    new Node("Child of Root", [], new vscode.ThemeIcon('book')),
                    new Node("Another Child of Root", [], new vscode.ThemeIcon('zap'))
                ], new vscode.ThemeIcon('folder'))
            ]);*/
            return Promise.resolve(this.jsonDataToNodes(jsonData));
        } else {
            // Default content when user is not logged in
            return Promise.resolve([
                new Node("Sign in to SuperOffice..", [], new vscode.ThemeIcon('log-in'), {
                    command: 'vscode-superoffice.signIn',
                    title: '',
                    arguments: []
                })
            ]);
        }
    }

    private jsonDataToNodes(data: ApiItem[]): Node[] {
        return data.map(item => {
            const children = item.children ? this.jsonDataToNodes(item.children) : undefined;
            return new Node(item.label, children, item.icon, item.command);
        });
    }
}

