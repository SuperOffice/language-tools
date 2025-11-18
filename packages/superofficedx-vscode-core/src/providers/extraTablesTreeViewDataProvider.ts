import { TreeItem, TreeItemCollapsibleState, ThemeIcon, TreeDataProvider, EventEmitter, Event, ExtensionContext } from 'vscode';
import { SuperofficeAuthenticationProvider } from './superofficeAuthenticationProvider';
import { IHttpService } from '../services/httpService';
import { ExtraTable } from '../types/odata/extratable';

export class ExtraTablesNode implements TreeItem {
    contextValue: string;
    collapsibleState: TreeItemCollapsibleState;

    constructor(
        public readonly label: string,
        public readonly children?: ExtraTablesNode[],
        public readonly iconPath?: ThemeIcon
    ) {
        this.contextValue = children && children.length > 0 ? 'extraTablesParent' : 'extraTablesChild';
        this.collapsibleState = children && children.length > 0
            ? TreeItemCollapsibleState.Collapsed
            : TreeItemCollapsibleState.None;
    }
}

export class ExtraTablesTreeViewDataProvider implements TreeDataProvider<ExtraTablesNode> {
    private _onDidChangeTreeData: EventEmitter<ExtraTablesNode | undefined> = new EventEmitter<ExtraTablesNode | undefined>();
    readonly onDidChangeTreeData: Event<ExtraTablesNode | undefined> = this._onDidChangeTreeData.event;

    public static readonly viewId = 'superOfficeDX.extraTablesExplorer';

    constructor(
        _context: ExtensionContext, // Parameter required for DI container compatibility
        private authProvider: SuperofficeAuthenticationProvider,
        private httpService: IHttpService) {
        // _context is intentionally unused; required for DI container compatibility
    }

    // Call this method to trigger a refresh of the tree view
    public refresh(): void {
        this._onDidChangeTreeData.fire(undefined);
    }

    getTreeItem(element: ExtraTablesNode): TreeItem {
        return element;
    }

    async getChildren(element?: ExtraTablesNode): Promise<ExtraTablesNode[]> {
        if (element) {
            return element.children || [];
        }

        const currentSession = this.authProvider.getCurrentSession();
        if (currentSession) {
            try {
                const scriptResponseData = await this.httpService.getExtraTables(currentSession);

                // Group scripResponseData by property "extra_tables.table_name"
                const groupedTables = new Map<string, ExtraTable[]>();
                scriptResponseData.value.forEach(item => {
                    const tableName = item["extra_tables.table_name"];
                    if (!groupedTables.has(tableName)) {
                        groupedTables.set(tableName, []);
                    }
                    groupedTables.get(tableName)!.push(item);
                });

                const tableNodes: ExtraTablesNode[] = [];
                groupedTables.forEach((tableItems, tableName) => {
                    const fieldNodes = tableItems.map(item => {
                        const typeNode = new ExtraTablesNode(
                            "type: " + item["extra_tables.(extra_fields->extra_table).type"],
                            undefined,
                            new ThemeIcon('symbol-property')
                        );

                        const descriptionNode = new ExtraTablesNode(
                            "description: " + item["extra_tables.(extra_fields->extra_table).description"],
                            undefined,
                            new ThemeIcon('symbol-property')
                        );

                        return new ExtraTablesNode(
                            item["extra_tables.(extra_fields->extra_table).field_name"],
                            [typeNode, descriptionNode],
                            new ThemeIcon('symbol-field')
                        );
                    });

                    // Create parent node for the table
                    const tableNode = new ExtraTablesNode(
                        tableName,
                        fieldNodes,
                        new ThemeIcon('database')
                    );

                    tableNodes.push(tableNode);
                });

                return tableNodes;
            } catch (err) {
                if (err instanceof Error) {
                    throw new Error(err.message);
                } else {
                    throw new Error(String(err));
                }
            }
        }
        return [];
    }
}
