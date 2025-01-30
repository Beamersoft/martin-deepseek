import * as vscode from 'vscode';
import ollama from 'ollama';
import { getWebviewContent } from './getWebviewContent';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('martin-deepseek.start', () => {
        const panel = vscode.window.createWebviewPanel(
            'deepChat',
            'Martin-DeepSeek Chat App',
            vscode.ViewColumn.One,
            { enableScripts: true }
        );

        panel.webview.html = getWebviewContent();

        panel.webview.onDidReceiveMessage(async (message) => {
            if (message.command === 'sendMessage') {
                const response = await queryOllama(message.text, panel);
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

async function queryOllama(prompt: string, panel: vscode.WebviewPanel): Promise<void> {
		let responseText = '';
    try {
        const streamResponse = await ollama.chat({
            model: 'deepseek-r1:7b',
            messages: [{ role: 'user', content: prompt }],
						stream: true
        });

				for await (const part of streamResponse) {
					responseText += part.message.content;
					panel.webview.postMessage({ command: 'receiveMessage', text: responseText });
				}
    } catch (error) {
			panel.webview.postMessage({ command: 'receiveMessage', text: 'Error connecting to Ollama' });
    }
}
