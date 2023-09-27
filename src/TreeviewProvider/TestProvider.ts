import * as vscode from 'vscode';

const jsonData = [
    {
        id: '1',
        name: 'Root 1',
        children: [
            {
                id: '1.1',
                name: 'Child 1.1',
            },
            {
                id: '1.2',
                name: 'Child 1.2',
            }
        ]
    },
    {
        id: '2',
        name: 'Root 2',
    }
];

interface ApiItem {
    id: string;
    name: string;
    children?: ApiItem[];
}

class MyTreeItem extends vscode.TreeItem {
    constructor(
        public readonly label: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState,
        public readonly children?: MyTreeItem[]
    ) {
        super(label, collapsibleState);
    }
}

export class MyTreeDataProvider implements vscode.TreeDataProvider<MyTreeItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<MyTreeItem | undefined> = new vscode.EventEmitter<MyTreeItem | undefined>();
    readonly onDidChangeTreeData: vscode.Event<MyTreeItem | undefined> = this._onDidChangeTreeData.event;

    private data: MyTreeItem[] = [];

    refresh(): void {
        this._onDidChangeTreeData.fire(undefined);
    }

    getTreeItem(element: MyTreeItem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: MyTreeItem): MyTreeItem[] {
        if (element) {
            return element.children || [];
        } else {
            return this.data;
        }
    }

    fetchData() {
        this.data = this.convertApiDataToTreeItems(jsonData);
        this.refresh();
    }

    private convertApiDataToTreeItems(apiData: ApiItem[]): MyTreeItem[] {
        return apiData.map(item => new MyTreeItem(
            item.name,
            item.children && item.children.length > 0 ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None,
            item.children ? this.convertApiDataToTreeItems(item.children) : undefined
        ));
    }
}