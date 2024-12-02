// Initialize the cookie count from localStorage or set to 0 if not available
let cookies = localStorage.getItem("cookies") ? parseInt(localStorage.getItem("cookies")) : 0;

// Get the DOM element for displaying the cookie count
const cookieCountDisplay = document.getElementById("cookie-count");

// Function to update the cookie count display and save it to localStorage
function updateDisplay() {
    cookieCountDisplay.textContent = cookies;
    localStorage.setItem("cookies", cookies); // Save the updated cookie count to localStorage
}

// Button click event to increase the cookie count
document.getElementById("cookie-btn").addEventListener("click", function() {
    cookies++;
    updateDisplay();
});

// Initialize display when the page loads (including after refresh)
updateDisplay();
