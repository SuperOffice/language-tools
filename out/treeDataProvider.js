"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyDataProvider = exports.DummyNode = void 0;
const vscode = require("vscode");
class DummyNode {
    constructor(label) {
        this.label = label;
        this.contextValue = 'dummyNode';
        this.collapsibleState = vscode.TreeItemCollapsibleState.None;
    }
}
exports.DummyNode = DummyNode;
class DummyDataProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (!element) {
            // Return root level nodes here
            return Promise.resolve([
                new DummyNode("Item 1"),
                new DummyNode("Item 2")
            ]);
        }
        return Promise.resolve([]);
    }
}
exports.DummyDataProvider = DummyDataProvider;
//# sourceMappingURL=treeDataProvider.js.map