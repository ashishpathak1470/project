import List from "./List";
import Input from "./Input";
import { Link } from "react-router-dom";

const ChatBot = () => {
  return (
    <>
      <div className="">
        <Link to="/">
          <h1 className="text-center text-4xl font-bold mt-4 mb-4 text-white">
            ChatBot
          </h1>
        </Link>
      </div>

      <div className="flex flex-col h-[88vh] max-w-lg mx-auto bg-gray-300 shadow-lg rounded-lg p-4">
        <div className="flex-grow overflow-y-auto mb-4 rounded-lg p-4">
          <List />
        </div>

        <div className="p-2 rounded-lg ">
          <Input />
        </div>
      </div>
    </>
  );
};

export default ChatBot;
