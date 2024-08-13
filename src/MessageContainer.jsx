import React, { useState, useEffect } from 'react';
import './App.css';

const messages = [
  { id: 'message-1', author: 'IRAKOZE Promesse', text: 'Wishing you a fantastic birthday, Eng KARANGWA Victor! May your day be filled with joy and success. - From all of us' },
  { id: 'message-2', author: 'UMUBYEYI Kevine', text: 'Hope this year brings you endless joy and fulfillment. - With best wishes' },
  { id: 'message-3', author: 'DUSHIME Christian', text: 'Enjoy your special day to the fullest! - Cheers' },
];

const MessageContainer = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="message-container">
      <div className="message">
        <h2>{messages[currentMessage].author}</h2>
        <p>{messages[currentMessage].text}</p>
      </div>
    </div>
  );
};

export default MessageContainer;
