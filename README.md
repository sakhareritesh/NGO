# 🤖 NGO-Chatbot

A **smart, AI-powered chatbot** built for NGOs – designed to **only answer relevant queries**, maintain chat history, and allow users to **export their conversations as PDFs** 📝.  
Built using **Next.js, TypeScript, Tailwind CSS, Pinecone, Genkit, and Gemini API**, this project demonstrates how Retrieval-Augmented Generation (RAG)-like systems can be applied to provide focused, context-aware assistance for NGO operations.

---

## 📖 Project Overview  

NGOs often receive a high volume of repetitive questions about their work, events, donations, and processes.  
This project solves that problem by providing a **chatbot that:**

- ✅ Responds only to NGO-related questions  
- ✅ Stores both user queries and bot answers for future reference  
- ✅ Generates responses using **Gemini API** (Google's advanced LLM)  
- ✅ Supports **PDF chat export** – helpful for record-keeping and reporting  

This is more than just a chatbot – it’s a **knowledge management tool** that keeps all chat data in **Pinecone Vector Database**, so the model can use past context for more meaningful replies.

---

## ✨ Features  

- 💬 **Context-Aware Chat** – Provides NGO-specific, relevant answers using vector search  
- 📦 **Vectorized Chat History** – Every user and bot message is stored in Pinecone  
- 🧠 **Gemini API-Powered** – AI responses are accurate and human-like  
- 📄 **PDF Export** – Save complete conversations as a nicely formatted PDF  
- ⚡ **Fast & Responsive UI** – Next.js + Tailwind gives a seamless experience  
- 🔗 **Scalable & API-Ready** – Genkit orchestrates the APIs for smooth backend handling  

---

## 🛠️ Tech Stack  

| Layer         | Tools Used |
|--------------|-----------|
| **Frontend** | ⚡ Next.js, TypeScript, Tailwind CSS |
| **Backend**  | 🔗 Genkit (API handling & orchestration) |
| **AI Engine** | 🧠 Gemini API |
| **Database** | 📦 Pinecone (stores vector embeddings for chat history) |
| **Other** | 📝 PDF Generation (chat export feature) |

---

## 🧠 How It Works (Architecture)

1️⃣ **User asks a question** → message is captured in the frontend  
2️⃣ **Embedding Generation** → user query is converted into a vector representation  
3️⃣ **Vector Search** → Pinecone retrieves relevant past context from stored chats  
4️⃣ **Response Generation** → query + context is sent to Gemini API  
5️⃣ **Bot Reply Stored** → response is also vectorized and stored back in Pinecone  
6️⃣ **User Options** → user can continue chatting or export the entire session as a PDF  

This creates a **feedback loop** where the chatbot keeps learning from its history, ensuring better answers with every interaction.

---

## 🚀 Getting Started  

Clone the repo and install dependencies:  

```bash
git clone https://github.com/sakhareritesh/NGO.git
cd NGO
npm install legacy --peer-deps
npm run dev  to run a project 
