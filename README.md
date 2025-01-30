# Martin-DeepChat Chat - VSCode Extension

Martin-DeepChat is a VSCode extension that allows you to interact with a local **Ollama** model inside VSCode. This extension uses the [`deepseek-r1:7b`](https://deepseek.com) model for generating AI responses in real-time.

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
git clone https://github.com/yourusername/martin-deepseek.git
cd martin-deepseek
npm install
```

---

## 🛠️ Running & Testing the Extension

1. Open the project folder in **VSCode**.
2. Go to the Debug section and press the button "Run Extension"
3. A new VSCode window will open. Press Ctrl + Shift + P
4. Run the command:  
   ```
   Start Martin-DeepSeek
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

Happy coding! 🚀
