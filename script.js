const buttons = document.querySelector(".buttons");
const choices = document.querySelector(".choices");
const results = document.querySelector(".results");
const errors = document.querySelector("errors");
const computerScoreText = document.querySelector(".computer-score");
const playerScoreText = document.querySelector(".player-score");
const gameOverText = document.querySelector(".game-over");

buttons.addEventListener("click", (e) => {
  const computerChoice = getComputerChoice();

  switch (e.target.id) {
    case "rock":
      playRound(computerChoice, "Rock");
      break;
    case "paper":
      playRound(computerChoice, "Paper");
      break;
    case "scissors":
      playRound(computerChoice, "Scissors");
      break;
  }
});

let userScore = 0;
let computerScore = 0;
let roundLimit = 5;

function playRound(computerChoice, userChoice) {
  choices.textContent = `Computer chose: ${computerChoice}.\nYou chose: ${userChoice}.`;
  if (computerChoice === userChoice) {
    results.textContent = "It's a draw!";
  } else if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Paper" && userChoice === "Rock") ||
    (computerChoice === "Scissors" && userChoice === "Paper")
  ) {
    computerScore += 1;
    results.textContent = "Computer Wins!";
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
  } else {
    userScore += 1;
    results.textContent = "You win!";
    playerScoreText.textContent = `Player Score: ${userScore}`;
  }

  checkGameOver();
}

function checkGameOver() {
  if (userScore >= 5) {
    gameOverText.textContent = "Game Over! You win!";
    gameOver();
  } else if (computerScore >= 5) {
    gameOverText.textContent = "Game Over! Computer wins!";
    gameOver();
  } else {
    gameOverText.textContent = "";
  }
}

function gameOver() {
  userScore = 0;
  computerScore = 0;

  computerScoreText.textContent = `Computer Score: ${computerScore}`;
  playerScoreText.textContent = `Player Score: ${userScore}`;
}

function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3);
  let computerChoice =
    rng === 0 ? "Rock" : rng === 1 ? "Paper" : rng === 2 ? "Scissors" : "Err";

  if (computerChoice === "Err") {
    errors.textContent = `Error in computer choice. rng = ${rng}`;
  }
  return computerChoice;
}
