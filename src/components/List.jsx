import { useContext, useEffect, useRef } from 'react';
import { ChatContext } from '../context/ChatContext';

const List = () => {
  const { messages } = useContext(ChatContext);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);


  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    try {
      const date = new Date(timestamp);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (error) {
      console.error('Error formatting time:', error);
      return 'Invalid time';
    }
  };

  if (!messages || messages.length === 0) {
    return <div className="flex-1 p-4 text-center">No messages yet. Start a conversation!</div>;
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          ref={index === messages.length - 1 ? lastMessageRef : null}
          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-xs md:max-w-sm lg:max-w-md p-3 rounded-lg shadow-sm ${
              message.type === 'user' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-800'
            }`}
          >
            <p className="text-sm">{message.text || 'Empty message'}</p>
            <p className="text-xs text-gray-400 mt-1 text-right">
              {formatTime(message.timestamp)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;