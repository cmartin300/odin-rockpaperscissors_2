console.log("Rock, Paper, Scissors!");

let userScore = 0;
let computerScore = 0;
let roundLimit = 5;

playGame(roundLimit);

function playGame(roundLimit) {
  for (let i = 0; i < roundLimit; i++) {
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();

    playRound(computerChoice, userChoice);
  }
  console.log(
    `The game is over!\nComputer has ${computerScore} win(s) and you have ${userScore} win(s).`
  );
}

function playRound(computerChoice, userChoice) {
  console.log(`Computer chose: ${computerChoice}.\nYou chose: ${userChoice}.`);
  if (computerChoice === userChoice) {
    console.log("It's a draw!");
  } else if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Paper" && userChoice === "Rock") ||
    (computerChoice === "Scissors" && userChoice === "Paper")
  ) {
    computerScore += 1;
    console.log("Computer Wins!");
  } else {
    userScore += 1;
    console.log("You win!");
  }
}

function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3);
  let computerChoice =
    rng === 0 ? "Rock" : rng === 1 ? "Paper" : rng === 2 ? "Scissors" : "Err";

  if (computerChoice === "Err") {
    console.log(`Error in computer choice. rng = ${rng}`);
  }
  //   throw new Error(`Error in computer choice. rng = ${rng}`);
  return computerChoice;
}

function getUserChoice() {
  let userSelection = prompt(
    "Choose: Rock{R}, Paper{P}, or Scissors{S}: "
  ).toUpperCase();

  let userChoice =
    userSelection === "R"
      ? "Rock"
      : userSelection === "P"
      ? "Paper"
      : userSelection === "S"
      ? "Scissors"
      : "Err";

  if (userChoice === "Err") {
    console.log(
      `Error in user choice: userSelection is ${userSelection}. Needs to be R, P, or S!`
    );
    // throw new Error(
    //   `Error in user choice: userSelection is ${userSelection}. Needs to be R, P, or S!`
    // );
  }
  return userChoice;
}
