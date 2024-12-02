// Check if cookies data is stored in localStorage, otherwise initialize it
let cookies = parseInt(localStorage.getItem('cookies')) || 0;

// Update the displayed cookie count
const cookieDisplay = document.getElementById('cookie-count');
cookieDisplay.textContent = cookies;

// Function to increase cookies count when the player clicks the button
function addCookie() {
    cookies++;
    cookieDisplay.textContent = cookies;
    
    // Save the new cookie count to localStorage
    localStorage.setItem('cookies', cookies);
}

// Event listener to handle button click
document.getElementById('cookie-button').addEventListener('click', addCookie);

// Save game progress periodically (optional, e.g., every 5 seconds)
setInterval(() => {
    localStorage.setItem('cookies', cookies);
}, 5000);
