import { TreeItem, TreeItemCollapsibleState, ThemeIcon, TreeDataProvider, EventEmitter, Event, ExtensionContext } from 'vscode';

export class DummyNode implements TreeItem {
    contextValue: string;
    collapsibleState: TreeItemCollapsibleState;

    constructor(
        public readonly label: string,
        public readonly children?: DummyNode[],
        public readonly iconPath?: ThemeIcon
    ) {
        this.contextValue = children && children.length > 0 ? 'dummyParent' : 'dummyChild';
        this.collapsibleState = children && children.length > 0
            ? TreeItemCollapsibleState.Collapsed
            : TreeItemCollapsibleState.None;
    }
}

export class DummyTreeViewDataProvider implements TreeDataProvider<DummyNode> {
    private _onDidChangeTreeData: EventEmitter<DummyNode | undefined> = new EventEmitter<DummyNode | undefined>();
    readonly onDidChangeTreeData: Event<DummyNode | undefined> = this._onDidChangeTreeData.event;

    public static readonly viewId = 'superOfficeDX.dummyExplorer';

    constructor(context: ExtensionContext) {
        // Constructor parameter required for DI container compatibility
        void context; // Mark as used to satisfy linter
    }

    // Call this method to trigger a refresh of the tree view
    public refresh(): void {
        this._onDidChangeTreeData.fire(undefined);
    }

    getTreeItem(element: DummyNode): TreeItem {
        return element;
    }

    async getChildren(element?: DummyNode): Promise<DummyNode[]> {
        if (element) {
            return element.children || [];
        }

        // Create the dummy tree structure: Parent with 2 children
        const child1 = new DummyNode(
            'Child Item 1',
            undefined,
            new ThemeIcon('file')
        );

        const child2 = new DummyNode(
            'Child Item 2',
            undefined,
            new ThemeIcon('file')
        );

        const parent = new DummyNode(
            'Parent Item',
            [child1, child2],
            new ThemeIcon('folder')
        );

        return [parent];
    }
}
