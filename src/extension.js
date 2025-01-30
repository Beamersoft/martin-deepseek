"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const ollama_1 = __importDefault(require("ollama"));
const getWebviewContent_1 = require("./getWebviewContent");
function activate(context) {
    const disposable = vscode.commands.registerCommand('martin-deepseek.start', () => {
        const panel = vscode.window.createWebviewPanel('deepChat', 'Martin-DeepSeek Chat App', vscode.ViewColumn.One, { enableScripts: true });
        panel.webview.html = (0, getWebviewContent_1.getWebviewContent)();
        panel.webview.onDidReceiveMessage(async (message) => {
            if (message.command === 'sendMessage') {
                const response = await queryOllama(message.text, panel);
            }
        });
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
async function queryOllama(prompt, panel) {
    let responseText = '';
    try {
        const streamResponse = await ollama_1.default.chat({
            model: 'deepseek-r1:7b',
            messages: [{ role: 'user', content: prompt }],
            stream: true
        });
        for await (const part of streamResponse) {
            responseText += part.message.content;
            panel.webview.postMessage({ command: 'receiveMessage', text: responseText });
        }
    }
    catch (error) {
        panel.webview.postMessage({ command: 'receiveMessage', text: 'Error connecting to Ollama' });
    }
}
//# sourceMappingURL=extension.js.map