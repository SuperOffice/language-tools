"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const login_1 = require("./SuperOfficeCommands/login");
const tokenHelper_1 = require("./Helpers/tokenHelper");
function activate(context) {
    console.log('Congratulations, your extension "vscode-superoffice" is now active!');
    context.subscriptions.push(vscode.window.registerTreeDataProvider('OnlineTreeView', tokenHelper_1.dataProvider));
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