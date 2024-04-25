const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

const progress = 40; // Progress percentage

// Update progress bar border color based on progress
if (progress >= 40) {
  progressBar.style.borderColor = '#3498db'; // Set border color to blue if progress is 40% or more
} else {
  progressBar.style.borderColor = 'transparent'; // Set border color to transparent if progress is less than 40%
}

// Update progress text
progressText.textContent = `${progress}%`;

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        // Add more custom font families here as needed
      }
    }
  }
}
