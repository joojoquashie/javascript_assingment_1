let targetNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const feedbackText = document.getElementById("feedback");

const guessInput = document.getElementById("user-guess");

const attempts = document.getElementById("attempts");

const restart = document.getElementById("restartBtn");

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", checkGuess);

function checkGuess() {
    let userValue = Number(guessInput.value);

    if(!userValue || userValue < 1 || userValue > 100) {
        feedbackText.textContent = "❌ Enter a valid number between 1 and 100";
        feedbackText.style.color = "#ef4444";
        return;
    }

    attemptsLeft--;

    attempts.textContent = attemptsLeft;

    if (userValue === targetNumber) {
        feedbackText.textContent = "Correct! You guessed the number!"
        feedbackText.style.color = "#4ade80";
        endGame()
    } else if (attemptsLeft === 0) {
        feedbackText.textContent = `Game Over! The hidden number was ${targetNumber}`;
        feedbackText.style.color = "#ef4444";
    } else if (userValue > targetNumber) {
        feedbackText.textContent = `Too High! Try again. (${attemptsLeft}) guesses`;
        feedbackText.style.color = "#f59e0b";
    } else {
        feedbackText.textContent = `Too Low! Try again. (${attemptsLeft}) guesses`;
        feedbackText.style.color = "#f59e0b";
    }

    guessInput.value = ""
}

restart.addEventListener("click",()=>{
    targetNumber = Math.floor(Math.random() * 100) + 1;

    attemptsLeft = 10;

    attempts.textContent = attemptsLeft;

    feedbackText.textContent = "Guess a number between 1 and 100";

    feedbackText.style.color = "#94a3b8";
    
    guessInput.focus();

    guessInput.value = "";
});

function endGame() {
    guessInput.disabled = true;
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "#64748b"
    submitButton.style.cursor = "not-allowed"
}