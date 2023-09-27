"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const login_1 = require("./Authentication/login");
const tokenHelper_1 = require("./Helpers/tokenHelper");
const TestProvider_1 = require("./TreeviewProvider/TestProvider");
function activate(context) {
    console.log('Congratulations, your extension "vscode-superoffice" is now active!');
    context.subscriptions.push(vscode.window.registerTreeDataProvider('OnlineTreeView', tokenHelper_1.onlineTreeViewDataProvider));
    const treeDataProvider = new TestProvider_1.MyTreeDataProvider();
    context.subscriptions.push(vscode.window.registerTreeDataProvider('SuperOfficeView', treeDataProvider));
    //treeDataProvider.fetchData();
    const signInCommand = vscode.commands.registerCommand('vscode-superoffice.signIn', async () => {
        await (0, login_1.superofficeLogin)();
        vscode.window.showInformationMessage('Signed Inn!');
    });
    const signOutCommand = vscode.commands.registerCommand('vscode-superoffice.signOut', () => {
        (0, tokenHelper_1.clearTokenSet)();
        vscode.window.showInformationMessage('Signed Out!');
    });
    const helloWorldCommand = vscode.commands.registerCommand('vscode-superoffice.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from vscode-superoffice!');
    });
    context.subscriptions.push(signInCommand, signOutCommand, helloWorldCommand);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map