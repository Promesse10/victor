// Function to verify age
function verifyAge() {
  const correctAge = 27; // Update with the correct age for verification
  const ageInput = document.getElementById('age-input').value;
  const ageVerificationDiv = document.getElementById('age-verification');
  const birthdayContainer = document.getElementById('birthday-container');
  const errorMessage = document.getElementById('error-message');
  const messageContainer = document.querySelector('.message-container');
  const happyBirthdayAudio = document.getElementById('happy-birthday-audio');
  const errorAudio = document.getElementById('error-audio'); // Added error audio element

  if (parseInt(ageInput) === correctAge) {
    // Hide age verification
    ageVerificationDiv.style.display = 'none';

    // Show birthday container
    birthdayContainer.style.display = 'block';

    // Play happy birthday song
    happyBirthdayAudio.play();

    // Show message container
    messageContainer.style.display = 'block';

    // Optionally, hide the age input and button
    document.getElementById('age-input').style.display = 'none';
    document.querySelector('button').style.display = 'none';

    // Start photo and message animations
    startPhotoAnimation();
    startMessageAnimation();
  } else {
    // Show error message if age is incorrect
    errorMessage.style.display = 'block';

    // Play error audio
    errorAudio.play();
  }
}

function startPhotoAnimation() {
  const photo = document.getElementById('victor-photo');
  const photoAlt = document.getElementById('victor-photo-alt');

  let isPhotoVisible = true;

  setInterval(() => {
    if (isPhotoVisible) {
      photo.style.opacity = '0';
      photoAlt.style.opacity = '1';
    } else {
      photo.style.opacity = '1';
      photoAlt.style.opacity = '0';
    }
    isPhotoVisible = !isPhotoVisible;
  }, 3000); // Change photo every 3 seconds
}

function startMessageAnimation() {
  const messages = [
    document.getElementById('message-1'),
    document.getElementById('message-2'),
    document.getElementById('message-3')
  ];

  let currentIndex = 0;

  setInterval(() => {
    // Hide the current message
    messages[currentIndex].style.display = 'none';

    // Move to the next message
    currentIndex = (currentIndex + 1) % messages.length;

    // Show the new message
    messages[currentIndex].style.display = 'block';
  }, 3000); // Change message every 3 seconds
}
