"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const superOfficeDataProvider_1 = require("./superOfficeDataProvider");
const login_1 = require("./SuperOfficeCommands/login");
function activate(context) {
    console.log('Congratulations, your extension "vscode-superoffice" is now active!');
    const dataProvider = new superOfficeDataProvider_1.SuperOfficeDataProvider();
    context.subscriptions.push(vscode.window.registerTreeDataProvider('OnlineTreeView', dataProvider));
    const signInCommand = vscode.commands.registerCommand('vscode-superoffice.signIn', async () => {
        if (await (0, login_1.superofficeLogin)()) {
            // Update the login state of the data provider and refresh the tree view
            dataProvider.setLoggedIn(true);
            // Optionally, if you still want to use context for other purposes
            vscode.commands.executeCommand('setContext', 'isLoggedIn', true);
        }
    });
    const signOutCommand = vscode.commands.registerCommand('vscode-superoffice.signOut', () => {
        // Implement the sign-out logic
        vscode.window.showInformationMessage('Signed Out!');
        // Update the login state of the data provider and refresh the tree view
        dataProvider.setLoggedIn(false);
        // Optionally, if you still want to use context for other purposes
        vscode.commands.executeCommand('setContext', 'isLoggedIn', false);
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