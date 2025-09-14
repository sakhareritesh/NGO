# **App Name**: NurtureTalk

## Core Features:

- NGO-Focused Chat: Engage in conversations, answering queries and providing information exclusively related to NGO activities and relevant topics. Refuses queries outside of this scope by informing users that their query is outside the system's context.
- Contextual Awareness: Maintains conversation context throughout the interaction using Pinecone as a vector database to provide coherent and relevant responses. Reasoning tool ensures the LLM utilizes previous turns of conversation effectively.
- PDF Report Generation: Generates PDF reports upon user request, summarizing key aspects of the conversation. Utilizes tool-calling for generating summary from current conversation, then converting summary into PDF for download.
- Interactive UI: A clean and intuitive interface for seamless interaction with the chatbot.
- Message Display: Displays messages in a chronological format, distinguishing between user and bot messages.
- Downloadable Reports: Provides options to download generated PDF reports.
