import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Input = () => {
  const { userInput, setUserInput, handleSendMessage } =
    useContext(ChatContext);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="flex items-center p-4 bg-white border-t border-gray-300 rounded-lg">
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        className=" mx-5 flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSendMessage}
        className="mx-3 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none w-20"
      >
        Send
      </button>
    </div>
  );
};

export default Input;
