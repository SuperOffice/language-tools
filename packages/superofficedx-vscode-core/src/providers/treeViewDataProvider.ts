import { Uri, TreeItem, TreeItemCollapsibleState, ThemeIcon, Command, TreeDataProvider, EventEmitter, Event, ExtensionContext } from 'vscode';
import { ScriptInfo } from '../types/index';
import { SuperofficeAuthenticationProvider } from './superofficeAuthenticationProvider';
import { IHttpService } from '../services/httpService';

interface TreeDataItem {
    label: string;
    children: TreeDataItem[];
    scriptInfo?: ScriptInfo;
}

export class Node implements TreeItem {
    contextValue: string;
    collapsibleState: TreeItemCollapsibleState;
    constructor(
        public readonly label: string,
        public readonly children?: Node[],
        public readonly iconPath?: ThemeIcon | { light: Uri; dark: Uri },
        public readonly command?: Command,
        public readonly scriptInfo?: ScriptInfo
    ) {
        this.contextValue = scriptInfo ? 'script' : 'folder';
        this.collapsibleState = (this.children?.length ?? 0) > 0
            ? TreeItemCollapsibleState.Collapsed
            : TreeItemCollapsibleState.None;
    }
}

export class TreeViewDataProvider implements TreeDataProvider<Node> {
    private _onDidChangeTreeData: EventEmitter<Node | undefined> = new EventEmitter<Node | undefined>();
    readonly onDidChangeTreeData: Event<Node | undefined> = this._onDidChangeTreeData.event;

    public static readonly viewId = 'superOfficeDX.scriptExplorer';
    public iconPath?: ThemeIcon | { light: Uri; dark: Uri };

    constructor(
        context: ExtensionContext,
        private authProvider: SuperofficeAuthenticationProvider,
        private httpService: IHttpService
    ) {
        this.iconPath = {
            light: Uri.joinPath(context.extensionUri, 'resources', 'logo.svg'),
            dark: Uri.joinPath(context.extensionUri, 'resources', 'logo.svg')
        }
    }

    get SCRIPT_DETAILS() {
        return 'superOfficeDX.viewScriptDetails'
    }

    // Call this method to trigger a refresh of the tree view
    public refresh(): void {
        this._onDidChangeTreeData.fire(undefined);
    }

    getTreeItem(element: Node): TreeItem {
        return element;
    }

    async getChildren(element?: Node): Promise<Node[]> {
        if (element) {
            return element.children || [];
        }
        const currentSession = this.authProvider.getCurrentSession();
        //Check if user is logged in
        if (currentSession) {
            try {
                const scriptResponseData = await this.httpService.getScriptList(currentSession);
                const root: TreeDataItem = { label: 'Root', children: [] };
                scriptResponseData.value.forEach(script => this.addToTreeData(root, script.path, script));
                return root.children.map(this.convertTreeDataToNode);
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

    convertTreeDataToNode = (data: TreeDataItem): Node => {
        return new Node(
            data.label,
            data.children.map(this.convertTreeDataToNode),
            data.scriptInfo ? this.iconPath : new ThemeIcon('folder'),
            data.scriptInfo ? { command: this.SCRIPT_DETAILS, title: 'Show Script Info', arguments: [data.scriptInfo] } : undefined,
            data.scriptInfo
        );
    };

    /**
     * Processes a given script along with its path.
     * The function parses the path, constructs the folder hierarchy 
     * if it doesn't exist, and then adds the script at the appropriate 
     * node in the tree.
     *
     * @param root - The root node of the tree.
     * @param scriptPath - The path associated with the script.
     * @param script - The script data.
     */
    addToTreeData(root: TreeDataItem, scriptPath: string, scriptInfo: ScriptInfo) {
        // Split path by '/' and remove empty segments
        const parts = scriptPath.split('/').filter(Boolean);
        const currentNode = parts.reduce(this.getOrAddChildNode, root);
        currentNode.children.push({ label: scriptInfo.name, children: [], scriptInfo });
    }

    getOrAddChildNode(parentNode: TreeDataItem, part: string): TreeDataItem {
        let childNode = parentNode.children.find(node => node.label === part);
        if (!childNode) {
            childNode = { label: part, children: [] };
            parentNode.children.push(childNode);
        }

        return childNode;
    }
};