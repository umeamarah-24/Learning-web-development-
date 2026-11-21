let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 5;
let score = 0;

document.getElementById("checkBtn").onclick = function() {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    if (guess < 1 || guess > 20 || document.getElementById("guessInput").value === "") {
        message.textContent = "Please enter a number between 1 and 20!";
        message.style.color = "red";
    }
    else {
        attempts--;
        if (guess > secretNumber) {
            message.textContent = "Too High!";
            message.style.color = "red";
        }
        else if (guess < secretNumber) {
            message.textContent = "Too Low!";
            message.style.color = "red";
        }
        else {
            message.textContent = "Correct! You Won!";
            message.style.color = "green";
            score += attempts * 10;

            document.querySelector(".game-container").classList.add("win");
            document.getElementById("checkBtn").disabled = true;
            document.getElementById("playAgainBtn").style.display = "inline-block";
        }
        document.getElementById("attempts").textContent =
            "Attempts Remaining: " + attempts;
        document.getElementById("score").textContent =
            "Score: " + score;
        if (attempts === 0 && guess !== secretNumber) {
            message.textContent = "Game Over! Number was " + secretNumber;
            document.getElementById("checkBtn").disabled = true;
            document.getElementById("playAgainBtn").style.display = "inline-block";
        }
    }
};
document.getElementById("playAgainBtn").onclick = function() {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    attempts = 5;

    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "Attempts Remaining: 5";
    document.getElementById("checkBtn").disabled = false;
    document.getElementById("playAgainBtn").style.display = "none";
    document.querySelector(".game-container").classList.remove("win");

};
