/* create a function that will randomly return “rock”, “paper” or “scissors” for computer 
getComputerChoice()
*/
/*Create function for humans choice 
getHumanChoice()
*/
/*create variable to keep count of humanScore and computerScore  */
/*
Write logic to play a single round 
create two variables and assign humanChoice to getHumanChoice() and computerChoice to getComputerChoice() in playRound
playRound(humanChoice,computerChoice)
*/

/* Create a new function named playGame().
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times. */
let btn = document.querySelector("button");
function getComputerChoice() {
  let computerNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  if (computerNumber == 0) {
    computerChoice = "rock";
  } else if (computerNumber == 1) {
    computerChoice = "paper";
  } else if (computerNumber == 2) {
    computerChoice = "scissors";
  }
  // console.log(computerChoice);
  return computerChoice;
}
let count = 0;
function getHumanChoice() {
  let usersChoice = prompt("Rock, Paper or Scissors").toLowerCase();
  if (
    usersChoice != "rock" &&
    usersChoice != "paper" &&
    usersChoice != "scissors"
  ) {
    console.log("invalid");
  } else {
    return usersChoice;
  }
}

/*
Function to for functionality to compare to each choice humanSelection=getHumanChoice() and computerSelection=getComputerChoice()
playRound(humanChoice, computerChoice); */

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

function playGame() {
  let count = 0;
  let computerScore = 0;
  let playerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
      playerScore++;
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
      computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      playerScore++;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      playerScore++;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
      computerScore++;
    } else if (humanChoice == computerChoice) {
      console.log("tie");
    }
    return playerScore, computerScore;
  }
  playRound(humanSelection, computerSelection);
  console.log(humanSelection, playerScore);
  console.log(computerSelection, computerScore);
}
playGame();
// btn.addEventListener("click", playGame);
