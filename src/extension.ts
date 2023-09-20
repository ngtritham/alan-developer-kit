import * as vscode from "vscode";
import { registerCommands } from "./command-registration";

export function activate(context: vscode.ExtensionContext) {
  console.log('Activated the extension "alan-developer-kit" !!!');
  registerCommands(context);
}

// This method is called when your extension is deactivated
export function deactivate() {}
