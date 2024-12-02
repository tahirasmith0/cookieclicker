// Get DOM elements
const scoreDisplay = document.getElementById("score");
const cookie = document.getElementById("cookie");

// Load score from localStorage or initialize to 0
let score = parseInt(localStorage.getItem("score")) || 0;
scoreDisplay.textContent = score;

// Increment score on cookie click and save to localStorage
cookie.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    localStorage.setItem("score", score); // Save score to localStorage
});

// Reset functionality (optional)
document.addEventListener("keydown", (e) => {
    if (e.key === "r") { // Press 'r' to reset score
        score = 0;
        scoreDisplay.textContent = score;
        localStorage.setItem("score", score);
    }
});
