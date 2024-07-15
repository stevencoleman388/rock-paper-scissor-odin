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
let computerChoice;
function getComputerChoice() {
  let computerNumber = Math.floor(Math.random() * 3);

  if (computerNumber == 0) {
    computerChoice = "rock";
  } else if (computerNumber == 1) {
    computerChoice = "paper";
  } else if (computerNumber == 2) {
    computerChoice = "scissors";
  }

  return computerChoice;
}
let count = 0;
let usersChoice;
function getHumanChoice() {
  usersChoice = prompt("Rock, Paper or Scissors").toLowerCase();
  if (
    usersChoice != "rock" &&
    usersChoice != "paper" &&
    usersChoice != "scissors"
  ) {
    console.log("invalid");
  } else {
  }

  return usersChoice;
}

/*
Function to for functionality to compare to each choice humanSelection=getHumanChoice() and computerSelection=getComputerChoice()
playRound(humanChoice, computerChoice); */

// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

function playGame() {
  let count = 0;
  let computerScore = 0;
  let playerScore = 0;
  // let score = ;
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
    // count++;
  }

  // playRound(humanSelection, computerSelection);

  // getComputerChoice();
  // console.log(humanSelection, playerScore);
  // console.log(computerSelection, computerScore);
  // console.log(count);
  while (count < 5) {
    playRound(getHumanChoice(), getComputerChoice());
    count++;
    console.log(`Player chooses ${usersChoice} score ${playerScore}`);
    console.log(`Computer chooses ${computerChoice} score ${computerScore}`);

    console.log(count);
  }
  // console.log(humanSelection, playerScore);
  // console.log(computerSelection, computerScore);
  // return playerScore;
  console.log(`Final Score Player ${playerScore}, Computer ${computerScore}`);
}
playGame();
// btn.addEventListener("click", playGame);
//  getHumanChoice();
//  getComputerChoice();
//  console.log(playerScore);
//  console.log(getHumanChoice());
//  console.log(getComputerChoice());
