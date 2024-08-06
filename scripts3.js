let computerChoice;
let usersChoice;
let gameBoard = document.querySelector(".game-board");
let scoreDisplay = document.querySelector(".score-display");
let currenScoreD = document.querySelector(".currentScoreD");
let playerD = document.querySelector(".pchose");
let cpt = document.querySelector(".cchose");
let btnRock = document.querySelector(".btnrock");
let btnPaper = document.querySelector(".btnpaper");
let btnScissors = document.querySelector(".btnscissors");
let refreshBtn = document.querySelector(".refresh");
let pScore = document.querySelector(".pScore");
let cScore = document.querySelector(".cScore");
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
function playGame() {
  let round = 0;
  let playerScore = 0;
  let computerScore = 0;
  function begin() {
    round = 0;
    playerScore = 0;
    computerScore = 0;
    btnRock.classList.remove("disabled");
    btnPaper.classList.remove("disabled");
    btnScissors.classList.remove("disabled");
    refreshBtn.setAttribute("hidden", true);
    scoreDisplay.textContent = `Round ${round}`;
    pScore.textContent = `Player:${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
  }
  function playRound() {
    getComputerChoice();
    if (usersChoice == "rock" && computerChoice == "scissors") {
      playerScore++;
    } else if (computerChoice == "rock" && usersChoice == "scissors") {
      computerScore++;
    } else if (usersChoice == "paper" && computerChoice == "rock") {
      playerScore++;
    } else if (computerChoice == "paper" && usersChoice == "rock") {
      computerScore++;
    } else if (usersChoice == "scissors" && computerChoice == "paper") {
      playerScore++;
    } else if (computerChoice == "scissors" && usersChoice == "paper") {
      computerScore++;
    } else if (usersChoice == computerChoice) {
    }
    round++;
    scoreDisplay.removeAttribute("hidden");
    scoreDisplay.textContent = `Round ${round}`;
    playerD.textContent = `Player:${usersChoice}`;
    cpt.textContent = `Computer:${computerChoice}`;
    pScore.textContent = `Player:${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
    currenScoreD.removeAttribute("hidden");
    if (round == 5) {
      if (playerScore > computerScore) {
        scoreDisplay.textContent = `Player Wins`;
      } else if (computerScore > playerScore) {
        scoreDisplay.textContent = `Computer Wins`;
      } else {
        scoreDisplay.textContent = "Its a Tie";
      }
      btnRock.classList.add("disabled");
      btnPaper.classList.add("disabled");
      btnScissors.classList.add("disabled");
      refreshBtn.removeAttribute("hidden");
    }
  }
  refreshBtn.addEventListener("click", () => {
    playerD.textContent = `Player:`;
    cpt.textContent = `Computer:`;
    begin();
  });
  btnRock.addEventListener("click", () => {
    usersChoice = "rock";
    playRound();
  });

  btnPaper.addEventListener("click", () => {
    usersChoice = "paper";
    playRound();
  });
  btnScissors.addEventListener("click", () => {
    usersChoice = "scissors";
    playRound();
  });
}
playGame();
