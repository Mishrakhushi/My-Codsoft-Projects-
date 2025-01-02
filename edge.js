// Example JavaScript for a simple landing page interaction

// Function to handle button click (e.g., "Learn More" button)
function handleButtonClick() {
    // Get the target element (e.g., a section or a modal)
    const targetElement = document.getElementById('aboutSection'); 
  
    // Scroll smoothly to the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Add event listener to the button
  const learnMoreButton = document.getElementById('learnMoreButton'); 
  learnMoreButton.addEventListener('click', handleButtonClick);
  
  // Example: Simple form validation
  function validateForm() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
  
    // Basic email validation (can be improved)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      alert('Please enter a valid email address.');
      return false; 
    }
  
    // If validation passes, submit the form (or perform other actions)
    return true; 
  }