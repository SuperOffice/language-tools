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
exports.SuperOfficeDataProvider = SuperOfficeDataProvider;
//# sourceMappingURL=superOfficeDataProvider.js.map