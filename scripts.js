let computerChoice;
function getComputerChoice() {
  /* Math.floor(Math.random()*3) returns wither 0,1,2  */
  let computerNumber = Math.floor(Math.random() * 3);
  /*Assiging a value to each result from above. */
  if (computerNumber == 0) {
    computerChoice = "rock";
  } else if (computerNumber == 1) {
    computerChoice = "paper";
  } else if (computerNumber == 2) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

let usersChoice;
function getHumanChoice() {
  usersChoice = prompt("Rock, Paper or Scissors").toLowerCase();
  if (
    usersChoice != "rock" &&
    usersChoice != "paper" &&
    usersChoice != "scissors"
  ) {
    console.log("invalid");
  }
  return usersChoice;
}

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
  }
  while (count < 5) {
    playRound(getHumanChoice(), getComputerChoice());
    count++;
    console.log(`Player chooses ${usersChoice} score ${playerScore}`);
    console.log(`Computer chooses ${computerChoice} score ${computerScore}`);
    console.log(count);
  }
  console.log(`Final Score Player ${playerScore}, Computer ${computerScore}`);
}
playGame();
