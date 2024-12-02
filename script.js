// Initialize variables and load saved data
let cookies = parseInt(localStorage.getItem("cookies")) || 0;
let clickers = parseInt(localStorage.getItem("clickers")) || 0;
let clickerCost = parseInt(localStorage.getItem("clickerCost")) || 10;

// DOM elements
const cookie = document.getElementById("cookie");
const cookieCountDisplay = document.getElementById("cookie-count");
const clickerCountDisplay = document.getElementById("clicker-count");
const clickerCostDisplay = document.getElementById("clicker-cost");
const buyClickerButton = document.getElementById("buy-clicker");

// Function to update the display and save data
function updateDisplay() {
    cookieCountDisplay.textContent = cookies;
    clickerCountDisplay.textContent = clickers;
    clickerCostDisplay.textContent = clickerCost;
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("clickers", clickers);
    localStorage.setItem("clickerCost", clickerCost);
}

// Cookie click handler
cookie.addEventListener("click", () => {
    cookies++;
    if (cookies >= 500) {
        cookie.src = "cookie2.png"; // Change cookie image after 500 clicks
    }
    updateDisplay();
});

// Buy clicker handler
buyClickerButton.addEventListener("click", () => {
    if (cookies >= clickerCost) {
        cookies -= clickerCost;
        clickers++;
        clickerCost *= 2; // Cost doubles with each purchase
        updateDisplay();
    }
});

// Auto-clicker function
setInterval(() => {
    if (clickers > 0) {
        cookies += clickers;
        updateDisplay();
    }
}, 1000);

// Initialize display
updateDisplay();
