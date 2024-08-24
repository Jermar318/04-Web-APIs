// Get the mode toggle button
const modeToggle = document.getElementById('mode-toggle');

// Set the initial mode
let isDarkMode = false;

// Function to toggle between light and dark mode
function toggleMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
}

// Add event listener to the mode toggle button
modeToggle.addEventListener('click', toggleMode);