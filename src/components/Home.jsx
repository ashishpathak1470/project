import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to ChatBot</h1>
      <p className="text-lg text-gray-400 mb-4">
        Your personal assistant is here to help you.
      </p>
      <Link to="chatbot">
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700 focus:outline-none">
          Start Chat
        </button>
      </Link>
    </div>
  );
}

export default Home;
