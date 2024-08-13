import React, { useState } from 'react';
import BirthdayContainer from './BirthdayContainer';
import AgeVerification from './AgeVerification';
import MessageContainer from './MessageContainer';
import './App.css'; // Import the CSS file

function App() {
  const [ageVerified, setAgeVerified] = useState(false);

  const handleAgeVerification = (isVerified) => {
    setAgeVerified(isVerified);
  };

  return (
    <div className="App">
      {!ageVerified ? (
        <AgeVerification onVerify={handleAgeVerification} />
      ) : (
        <>
          <BirthdayContainer />
          <MessageContainer />
        </>
      )}
    </div>
  );
}

export default App;
