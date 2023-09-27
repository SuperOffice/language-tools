"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperOfficeDataProvider = exports.Node = void 0;
const vscode = require("vscode");
class Node {
    constructor(label, children, iconPath, command) {
        this.label = label;
        this.children = children;
        this.iconPath = iconPath;
        this.command = command;
        this.contextValue = 'node';
        this.collapsibleState = this.children && this.children.length > 0 ?
            vscode.TreeItemCollapsibleState.Collapsed :
            vscode.TreeItemCollapsibleState.None;
    }
}
exports.Node = Node;
class SuperOfficeDataProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.isLoggedIn = false;
    }
    // Call this method to trigger a refresh of the tree view
    refresh() {
        this._onDidChangeTreeData.fire(undefined);
    }
    // This method is used to update the login status and refresh the tree
    setLoggedIn(state) {
        this.isLoggedIn = state;
        this.refresh();
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (element) {
            return Promise.resolve(element.children || []);
        }
        // Check if user is logged in
        if (this.isLoggedIn) {
            // Replace with data fetching logic if required when user is logged in
            return Promise.resolve([
                new Node("Fetched Data Item 1", [], new vscode.ThemeIcon('book')),
                new Node("Fetched Data Item 2", [], new vscode.ThemeIcon('zap'))
            ]);
        }
        else {
            // Default content when user is not logged in
            return Promise.resolve([
                new Node("Sign in to SuperOffice..", [], new vscode.ThemeIcon('log-in'), {
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
}
exports.SuperOfficeDataProvider = SuperOfficeDataProvider;
//# sourceMappingURL=superOfficeDataProvider.js.map