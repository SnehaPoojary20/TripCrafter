import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi! I am your travel assistant 🤖. How can I help you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    
    setTimeout(() => {
      const botReply = getBotReply(input);
      setMessages((prev) => [...prev, { text: botReply, sender: 'bot' }]);
    }, 600);

    setInput('');
  };

  const getBotReply = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes('hello') || msg.includes('hi')) return 'Hello! 👋';
    if (msg.includes('destination')) return 'We suggest Bali, Paris, or Kyoto! 🌍';
    if (msg.includes('plan') || msg.includes('trip')) return 'You can create a trip in the Itinerary section ✈️';
    if (msg.includes('map')) return 'Head over to the Map section for visual navigation 🗺️';

    return "Sorry, I didn't get that. Try asking about destinations, planning, or map.";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    
    <div className="chatbot-container">
      <div className="chatbox">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
