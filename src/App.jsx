import ChatBot from "./components/ChatBot";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { ChatProvider } from "./context/ChatContext";

const App = () => {
  return (
    <ChatProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
      </BrowserRouter>
    </ChatProvider>
  );
};

export default App;
