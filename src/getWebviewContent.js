"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebviewContent = getWebviewContent;
function getWebviewContent() {
    return /*html*/ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Deep Seek Chat</title>
  <style>
      body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          height: 100vh;
          background-color: #1e1e1e;
          color: #ffffff;
      }
      #chat-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 10px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #888 #1e1e1e;
      }
      .message {
          padding: 10px;
          margin: 5px;
          border-radius: 5px;
          max-width: 80%;
          white-space: pre-wrap;
          word-wrap: break-word;
      }
      .user-message {
          align-self: flex-end;
          background-color: #007acc;
      }
      .bot-message {
          align-self: flex-start;
          background-color: #333;
      }
      pre {
          background: #2d2d2d;
          padding: 10px;
          border-radius: 5px;
          overflow-x: auto;
      }
      code {
          color: #00ff99;
          font-family: "Courier New", Courier, monospace;
      }
      #input-container {
          display: flex;
          padding: 10px;
          background: #252526;
      }
      #chat-input {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-size: 14px;
          background: #3c3c3c;
          color: white;
      }
      #send-button {
          padding: 10px;
          margin-left: 10px;
          background-color: #007acc;
          border: none;
          border-radius: 5px;
          color: white;
          cursor: pointer;
      }
      #send-button:hover {
          background-color: #005fa3;
      }
  </style>
</head>
<body>
  <div id="chat-container"></div>
  <div id="input-container">
      <input type="text" id="chat-input" placeholder="Type a message...">
      <button id="send-button">Send</button>
  </div>

  <script>
      const chatContainer = document.getElementById('chat-container');
      const chatInput = document.getElementById('chat-input');
      const sendButton = document.getElementById('send-button');
      const vscode = acquireVsCodeApi();

      function formatMessage(text) {
          return text.replace(/\`\`\`(.*?)\`\`\`/gs, '<pre><code>$1</code></pre>'); 
      }

      function appendMessage(text, className) {
          const messageElement = document.createElement('div');
          messageElement.innerHTML = formatMessage(text);
          messageElement.classList.add('message', className);
          chatContainer.appendChild(messageElement);
          chatContainer.scrollTop = chatContainer.scrollHeight;
          return messageElement; // Return the reference to update later
      }

      function updateMessage(element, text) {
          element.innerHTML = formatMessage(text);
          chatContainer.scrollTop = chatContainer.scrollHeight;
      }

      sendButton.addEventListener('click', () => {
          const userMessage = chatInput.value.trim();
          if (!userMessage) return;
          
          appendMessage(userMessage, 'user-message');
          chatInput.value = '';

          vscode.postMessage({ command: 'sendMessage', text: userMessage });
      });

      let lastBotMessage = null;

      window.addEventListener('message', event => {
          const message = event.data;
          if (message.command === 'receiveMessage') {
              if (!lastBotMessage) {
                  lastBotMessage = appendMessage(message.text, 'bot-message');
              } else {
                  updateMessage(lastBotMessage, message.text);
              }
          }
      });
  </script>
</body>
</html>`;
}
//# sourceMappingURL=getWebviewContent.js.map