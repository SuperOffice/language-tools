"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineDataProvider = exports.Node = void 0;
const vscode = require("vscode");
class Node {
    constructor(label, children, iconPath) {
        this.label = label;
        this.children = children;
        this.iconPath = iconPath;
        this.contextValue = 'node';
        this.collapsibleState = this.children && this.children.length > 0 ?
            vscode.TreeItemCollapsibleState.Collapsed :
            vscode.TreeItemCollapsibleState.None;
    }
}
exports.Node = Node;
class OnlineDataProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (element) {
            return Promise.resolve(element.children || []);
        }
        // Return root level nodes here
        return Promise.resolve([
            new Node("Item 1", [
                new Node("Child of Item 1", [], new vscode.ThemeIcon('book')),
                new Node("Another Child of Item 1", [], new vscode.ThemeIcon('zap'))
            ], new vscode.ThemeIcon('folder')),
            new Node("Sign in to SuperOffice..", [], new vscode.ThemeIcon('log-in'))
        ]);
    }
}
exports.OnlineDataProvider = OnlineDataProvider;
//# sourceMappingURL=onlineDataProvider.js.map