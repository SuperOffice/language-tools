import * as vscode from 'vscode';
import { ScriptEntity, fetchFromWebApi } from '../Api/getScripts';

interface TreeDataItem {
    label: string;
    children: TreeDataItem[];
    script?: ScriptEntity;
}

function treeDataToNodes(data: TreeDataItem): Node {
    return new Node(data.label, data.children.map(treeDataToNodes), data.script ? new vscode.ThemeIcon('file') : new vscode.ThemeIcon('folder'), data.script ? { command: 'vscode-superoffice.showScript', title: 'Show Script', arguments: [data.script] } : undefined);
}

function findOrCreateChildNode(parentNode: TreeDataItem, part: string): TreeDataItem {
    let childNode = parentNode.children.find(node => node.label === part);
    if (!childNode) {
        childNode = { label: part, children: [] };
        parentNode.children.push(childNode);
    }
    return childNode;
}

function addToTreeData(root: TreeDataItem, scriptPath: string, script: ScriptEntity) {
    const parts = scriptPath.split('/').filter(Boolean);
    let currentNode = parts.reduce(findOrCreateChildNode, root);
    currentNode.children.push({ label: script.name, children: [], script });
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
            return fetchFromWebApi().then(data => {
                const root: TreeDataItem = { label: 'Root', children: [] };
                data.value.forEach(script => addToTreeData(root, script.path, script));
                return root.children.map(treeDataToNodes);
            });
        }
        
        return Promise.resolve([
            new Node("Sign in to SuperOffice..", [], new vscode.ThemeIcon('log-in'), {
                command: 'vscode-superoffice.signIn',
                title: '',
                arguments: []
            })
        ]);
    }
}

