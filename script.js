// Get the stored cookie count or initialize to 0
let cookies = localStorage.getItem("cookies") ? parseInt(localStorage.getItem("cookies")) : 0;

// Get the DOM element for displaying the cookie count
const cookieCountDisplay = document.getElementById("cookie-count");

// Function to update the cookie count display
function updateDisplay() {
    cookieCountDisplay.textContent = cookies;
    localStorage.setItem("cookies", cookies); // Save to localStorage
}

// Button click event to increase cookie count
document.getElementById("cookie-btn").addEventListener("click", function() {
    cookies++;
    updateDisplay();
});

// Initialize display when page loads
updateDisplay();
