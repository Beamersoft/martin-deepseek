# Deep Seek Chat - VSCode Extension

Deep Seek Chat is a VSCode extension that allows you to interact with a local **Ollama** model inside VSCode. This extension uses the [`deepseek-r1:7b`](https://deepseek.com) model for generating AI responses in real-time.

## 🚀 Features
- **Chat with a local Ollama model (`deepseek-r1:7b`)**
- **Live streaming responses**
- **Proper formatting for code snippets**
- **Seamless integration with VSCode**

---

## 📦 Installation

### 1️⃣ **Install Ollama**
Before using the extension, you need to install Ollama and the required model.

#### **For macOS & Linux:**
```sh
curl -fsSL https://ollama.ai/install.sh | sh
```

#### **For Windows:**
Download and install Ollama from [here](https://ollama.ai/download).

---

### 2️⃣ **Download the DeepSeek Model**
Once Ollama is installed, you need to pull the `deepseek-r1:7b` model:

```sh
ollama pull deepseek-r1:7b
```

---

### 3️⃣ **Install Dependencies**
Clone the repository and install the required dependencies:

```sh
git clone https://github.com/yourusername/deepseek-chat-vscode.git
cd deepseek-chat-vscode
npm install
```

---

## 🛠️ Running & Testing the Extension

1. Open the project folder in **VSCode**.
2. Press `F5` to launch the extension in a new **Extension Development Host** window.
3. Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
4. Run the command:  
   ```
   Deep Seek Chat: Start Chat
   ```
5. A chat panel will open where you can start interacting with the model.

---

## 🔧 How It Works

- When you send a message, the extension communicates with **Ollama** running locally.
- The response is streamed back **in real-time** without creating multiple message blocks.
- If the response contains **code snippets**, they will be properly formatted.

---

## 🛠️ Development & Debugging

To modify or debug the extension:

1. Open the project in **VSCode**.
2. Make changes in `extension.ts` or `getWebviewContent.ts`.
3. Run `npm run lint` to check for linting issues.
4. Press `F5` to test the updated version.

---

## 💡 Future Improvements
- [ ] Support multiple models
- [ ] Add chat history persistence
- [ ] Improve response formatting

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

---

## 📧 Contact
For any questions, reach out to [your-email@example.com](mailto:your-email@example.com) or open an issue on GitHub.

---

Happy coding! 🚀

