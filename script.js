console.log("Rock, Paper, Scissors!");

// get computer choice
let rng = Math.floor(Math.random() * 3);
let computerChoice =
  rng === 0 ? "Rock" : rng === 1 ? "Paper" : rng === 2 ? "Scissors" : "Err";

if (computerChoice === "Err") {
  console.log(`Error in computer choice. rng = ${rng}`);
}

// prompt for user choice
let userSelection = prompt(
  "Choose: Rock {R}, Paper{P}, or Scissors{S}: "
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
}

// check win condition
console.log(`Computer chose: ${computerChoice}.\nYou chose: ${userChoice}.`);
if (computerChoice === userChoice) {
  console.log("It's a draw!");
} else if (
  (computerChoice === "Rock" && userChoice === "Scissors") ||
  (computerChoice === "Paper" && userChoice === "Rock") ||
  (computerChoice === "Scissors" && userChoice === "Paper")
) {
  console.log("Computer Wins!");
} else {
  console.log("You win!");
}
