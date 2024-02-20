// Toggle dark mode
const body = document.querySelector("body")
const toggleButton = document.getElementById('dark-mode-toggle'); // Add an ID to your toggle button

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});