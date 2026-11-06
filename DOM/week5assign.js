let signUp = document.getElementById("signupForm");
let inputField = document.getElementById("usernameField");
let feedback = document.getElementById("liveFeedback");

inputField.addEventListener("input", function() {
    let inputValue = this.value;
    feedback.textContent = `"Typing username: " ${inputValue}`;
})
inputField.addEventListener("mouseover", function() {
    inputField.style.backgroundColor = "grey";
})
inputField.addEventListener("mouseout", function() {
    inputField.style.backgroundColor = "white";
})

signUp.addEventListener("submit", function(event) {
    event.preventDefault();
})

let rawText = inputField.value;
let trimmedText = rawText.trim();

if (trimmedText.length === 0) {
    feedback.textContent = "Please enter a username.";
} else {
    feedback.textContent = `Username entered: ${trimmedText}`;
}