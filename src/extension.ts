// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	var cmdHellowWorld = vscode.commands.registerCommand('helloworld.helloWorldCmd', (args) => {		
		try {
			if(fs.lstatSync(args.fsPath).isDirectory()) {
				vscode.window.showInformationMessage(path.basename(args.path) + " is a directory!");
			} else {
				vscode.window.showInformationMessage(path.basename(args.path) + " is a file!");
			}
		} catch(e) {
			vscode.window.showInformationMessage(path.basename(args.path) + " not found: " + e);
		}
	});

	context.subscriptions.push(cmdHellowWorld);
}

// This method is called when your extension is deactivated
export function deactivate() {}
