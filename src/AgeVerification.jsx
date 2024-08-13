import React, { useState, useRef } from 'react';
import './App.css';

const AgeVerification = ({ onVerify }) => {
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const correctAge = 27;
  const errorAudioRef = useRef(null); // Create a ref for the audio element

  const handleSubmit = () => {
    if (age === '') {
      setError('Please enter your age.'); // Error for empty input
      return;
    }
    if (parseInt(age) === correctAge) {
      setError(''); // Clear error state if age is correct
      onVerify(true); // Proceed with correct age
    } else {
      setError('Victor Urikutubeshya, the age you entered is wrong'); // Error for incorrect age
      if (errorAudioRef.current) {
        errorAudioRef.current.play(); // Play the error audio
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(); // Handle Enter key press
    }
  };

  return (
    <div id="age-verification">
      {/* Lottie Animation iframe */}
      <iframe 
        src="https://lottie.host/embed/3220c148-b700-4c32-9469-3984c1c9acdb/ToLUvqHuuT.json" 
        title="Lottie Animation"
        style={{ width: '100%', height: '200px', border: 'none', marginBottom: '20px' }}
      ></iframe>

      <h2>Please enter your age to proceed:</h2>
      <input
        type="number"
        id="age-input"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        onKeyDown={handleKeyPress} // Add event listener for Enter key
        placeholder="Enter your age"
      />
      <button onClick={handleSubmit}>Submit</button>

      {error && (
        <p id="error-message" style={{ color: 'rgb(255, 0, 0)' }}>
          {error}
        </p>
      )}

      {/* Error audio element */}
      <audio ref={errorAudioRef} src="/errormp3.mp3" />
    </div>
  );
};

export default AgeVerification;
