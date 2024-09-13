import { createContext, useState, useEffect } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
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
      const newMessage = { type: "user", text: userInput };
      const botResponse = {
        type: "bot",
        text: responses[Math.floor(Math.random() * responses.length)],
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
