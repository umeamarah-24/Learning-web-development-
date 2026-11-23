let choices = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll(".choice");
let userChoice = document.getElementById("userChoice");
let computerChoice = document.getElementById("computerChoice");
let result = document.getElementById("result");
let message = document.getElementById("message");
let userScoreDisplay = document.getElementById("userScore");
let computerScoreDisplay = document.getElementById("computerScore");

buttons.forEach(function(button) {
    button.onclick = function() {
        let user = button.getAttribute("data-choice");
        let randomNumber = Math.floor(Math.random() * 3);
        let computer = choices[randomNumber];

        userChoice.textContent = user;
        computerChoice.textContent = computer;
        if (user === computer) {
            result.textContent = "Draw!";
            message.textContent = "Both selected the same option.";
        }
        else if (
            (user === "Rock" && computer === "Scissors") ||
            (user === "Paper" && computer === "Rock") ||
            (user === "Scissors" && computer === "Paper")
        ) {
            result.textContent = "You Win!";
            message.textContent = "Great job! You won this round.";

            userScore++;
        }
        else {
            result.textContent = "You Lose!";
            message.textContent = "Computer won this round. Try again!";

            computerScore++;
        }
        userScoreDisplay.textContent = userScore;
        computerScoreDisplay.textContent = computerScore;
    };
});

document.getElementById("restartBtn").onclick = function() {
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    userChoice.textContent = "-";
    computerChoice.textContent = "-";
    result.textContent = "Make your first move!";
    message.textContent = "Good luck!";

};