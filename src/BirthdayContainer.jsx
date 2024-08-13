import React, { useEffect, useRef } from 'react';
import './App.css'; // Import the CSS file
import pic from './assets/Victor.jpg';
import poc from './assets/Victory.png';
import birthdaySound from './assets/happy-birthday-220024.mp3'; // Add the path to your MP3 file

const BirthdayContainer = () => {
  const photoRef = useRef(null);
  const photoAltRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (photoRef.current && photoAltRef.current) {
        const isPhotoVisible = photoRef.current.style.opacity === '1';
        photoRef.current.style.opacity = isPhotoVisible ? '0' : '1';
        photoAltRef.current.style.opacity = isPhotoVisible ? '1' : '0';
      }
    }, 3000);

    // Autoplay the sound
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container" id="birthday-container">
      <h1>Happy Birthday <br /> Eng KARANGWA Victor!</h1>
      <div className="photo-container">
        <img
          src={pic}
          alt="Eng KARANGWA Victor"
          className="photo"
          ref={photoRef}
        />
        <img
          src={poc}
          alt="Eng KARANGWA Victor"
          className="photo"
          id="victor-photo-alt"
          ref={photoAltRef}
        />
      </div>
      <div className="hino-container">
        <iframe
          src="https://lottie.host/embed/a69ea137-b6a1-45f0-bdbb-7d06070f711e/7ptHEx7f76.json"
          style={{ width: '300px', height: '300px', border: 'none' }}
          title="Animation"
        ></iframe>
        <iframe
          src="https://lottie.host/embed/a69ea137-b6a1-45f0-bdbb-7d06070f711e/7ptHEx7f76.json"
          style={{ width: '300px', height: '300px', border: 'none', transform: 'scaleX(-1)' }}
          title="Animation"
        ></iframe>
      </div>
      <audio
        ref={audioRef}
        src={birthdaySound}
        preload="auto"
        // Add the controls if you want to allow the user to control the playback
        // controls
      />
    </div>
  );
};

export default BirthdayContainer;
