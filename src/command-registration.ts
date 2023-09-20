import * as vscode from "vscode";
import { Commands } from "./constants";
import { smartConsoleLogHandler } from "./handlers";

const smartConsoleLogCommand = vscode.commands.registerCommand(
  Commands.SMART_CONSOLE_LOG,
  smartConsoleLogHandler
);

const commands = [smartConsoleLogCommand];

export const registerCommands = (context: vscode.ExtensionContext) => {
  commands.forEach((cmd) => {
    context.subscriptions.push(cmd);
  });
};
