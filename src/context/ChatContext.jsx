import { createContext, useState, useEffect } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        return parsedMessages.map((msg) => ({
          ...msg,
          timestamp: msg.timestamp || new Date().toISOString(),
        }));
      } catch (error) {
        console.error("Error parsing saved messages:", error);
        return [];
      }
    }
    return [];
  });

  const [userInput, setUserInput] = useState("");

  const responses = [
    "Hello! How can I assist you today?",
    "I'm here to help!",
    "What can I do for you?",
    "Feel free to ask me anything.",
    "I'm a simple chatbot, let's chat!",
  ];

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newMessage = {
        type: "user",
        text: userInput,
        timestamp: new Date().toISOString(),
      };
      const botResponse = {
        type: "bot",
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toISOString(),
      };

      setMessages((prevMessages) => [...prevMessages, newMessage, botResponse]);
      setUserInput("");
    }
  };

  return (
    <ChatContext.Provider
      value={{ messages, userInput, setUserInput, handleSendMessage }}
    >
      {children}
    </ChatContext.Provider>
  );
};
