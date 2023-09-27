// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { SuperOfficeDataProvider } from './superOfficeDataProvider';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    vscode.commands.executeCommand('setContext', 'isLoggedIn', false);
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-superoffice" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-superoffice.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from vscode-superoffice!');
	});

	//----------------------------------------------CUSTOM----------------------------------------------
    context.subscriptions.push(vscode.window.registerTreeDataProvider('OnlineTreeView', new SuperOfficeDataProvider()));
	let isLoggedIn = false;

    const signInCommand = vscode.commands.registerCommand('vscode-superoffice.signIn', () => {
        isLoggedIn = true;
        // Here, you'd implement the sign-in logic
        vscode.window.showInformationMessage('Signed In!');

        // Update context key
        vscode.commands.executeCommand('setContext', 'isLoggedIn', true);
    });

    const signOutCommand = vscode.commands.registerCommand('vscode-superoffice.signOut', () => {
        isLoggedIn = false;
        // Here, you'd implement the sign-out logic
        vscode.window.showInformationMessage('Signed Out!');

        // Update context key
        vscode.commands.executeCommand('setContext', 'isLoggedIn', false);
    });

    context.subscriptions.push(signInCommand);
    context.subscriptions.push(signOutCommand);
	//----------------------------------------------END CUSTOM------------------------------------------
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
