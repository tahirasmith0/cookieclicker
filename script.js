// Load the saved cookie count from localStorage or initialize it
let cookies = localStorage.getItem("cookies") ? parseInt(localStorage.getItem("cookies")) : 0;
let cookiesPerSecond = 0;
let upgradeCost = 50;

// Select DOM elements
const cookieCountDisplay = document.getElementById("cookie-count");
const cookiesPerSecondDisplay = document.getElementById("cookies-per-second");
const upgradeBtn = document.getElementById("upgrade-btn");

// Update the cookie count display
function updateDisplay() {
    cookieCountDisplay.textContent = cookies;
    cookiesPerSecondDisplay.textContent = cookiesPerSecond;
}

// Save cookies to localStorage
function saveCookies() {
    localStorage.setItem("cookies", cookies);
}

// Cookie clicker logic
document.getElementById("cookie").addEventListener("click", function() {
    cookies++;
    updateDisplay();
    saveCookies();
});

// Upgrade button logic
upgradeBtn.addEventListener("click", function() {
    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        cookiesPerSecond++;
        upgradeCost = Math.floor(upgradeCost * 1.5); // Increase the cost for the next upgrade
        updateDisplay();
        saveCookies();
    }
    if (cookies < upgradeCost) {
        upgradeBtn.disabled = true;
    } else {
        upgradeBtn.disabled = false;
    }
});

// Periodic cookie generation (cookies per second)
setInterval(function() {
    cookies += cookiesPerSecond;
    updateDisplay();
    saveCookies();
}, 1000);

// Initial setup
updateDisplay();
