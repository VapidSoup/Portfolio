// Function to handle the scroll effect on the sun
export const handleScroll = () => {
    const sun = document.getElementById('sun');
    if (sun) {
      const scrollY = window.scrollY;
      sun.style.top = `${90 - scrollY / 35}%`; // Adjust the speed of movement here
    }
  };
  
  // Function to initialize the scroll event
  export const initializeScroll = () => {
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup function for removing the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };
  