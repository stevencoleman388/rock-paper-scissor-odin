let computerChoice;
let usersChoice;
let gameBoard = document.querySelector(".game-board");
let scoreDisplay = document.querySelector(".score-display");
let currenScoreD = document.querySelector(".currentScoreD");
let btnRock = document.querySelector(".btnrock");
let btnPaper = document.querySelector(".btnpaper");
let btnScissors = document.querySelector(".btnscissors");
let refreshBtn = document.querySelector(".refresh");
let pScore = document.querySelector(".pScore");
let cScore = document.querySelector(".cScore");
let playerHandPic = document.querySelector(".playerHandPic");
let compHandPic = document.querySelector(".compHandPic");
let playerPaper = document.querySelector(".paperImg");
let playerScissors = document.querySelector(".scissors");
let compPaper = document.querySelector(".cpaper");
let compScissors = document.querySelector(".cscissors");
let playerRock = document.querySelector(".playerRock");
let compRock = document.querySelector(".compRock");
function getComputerChoice() {
  let computerNumber = Math.floor(Math.random() * 3);
  if (computerNumber == 0) {
    computerChoice = "rock";
  } else if (computerNumber == 1) {
    computerChoice = "paper";
  } else if (computerNumber == 2) {
    computerChoice = "scissors";
  }
  compDisplay();
  return computerChoice;
}
function compDisplay() {
  if (computerChoice == "rock") {
    compRock.removeAttribute("hidden");
    compPaper.setAttribute("hidden", true);
    compScissors.setAttribute("hidden", true);
    compHandPic.setAttribute("hidden", true);
  }
  if (computerChoice == "paper") {
    compPaper.removeAttribute("hidden");
    compRock.setAttribute("hidden", true);
    compScissors.setAttribute("hidden", true);
    compHandPic.setAttribute("hidden", true);
  }
  if (computerChoice == "scissors") {
    compScissors.removeAttribute("hidden");
    compRock.setAttribute("hidden", true);
    compPaper.setAttribute("hidden", true);
    compHandPic.setAttribute("hidden", true);
  }
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
    cScore.textContent = `Computer:${computerScore}`;
    startingHands();
  }
  function startingHands() {
    playerHandPic.removeAttribute("hidden");
    playerRock.setAttribute("hidden", true);
    playerPaper.setAttribute("hidden", true);
    playerScissors.setAttribute("hidden", true);
    compHandPic.removeAttribute("hidden");
    compRock.setAttribute("hidden", true);
    compPaper.setAttribute("hidden", true);
    compScissors.setAttribute("hidden", true);
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
    pScore.textContent = `Player:${playerScore}`;
    cScore.textContent = `Computer:${computerScore}`;
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
    begin();
  });

  btnRock.addEventListener("click", () => {
    usersChoice = "rock";
    playerRock.removeAttribute("hidden");
    playerPaper.setAttribute("hidden", true);
    playerScissors.setAttribute("hidden", true);
    playerHandPic.setAttribute("hidden", true);
    playRound();
  });
  btnPaper.addEventListener("click", () => {
    usersChoice = "paper";
    playerPaper.removeAttribute("hidden");
    playerRock.setAttribute("hidden", true);
    playerScissors.setAttribute("hidden", true);
    playerHandPic.setAttribute("hidden", true);
    playRound();
  });
  btnScissors.addEventListener("click", () => {
    usersChoice = "scissors";
    playerScissors.removeAttribute("hidden");
    playerPaper.setAttribute("hidden", true);
    playerRock.setAttribute("hidden", true);
    playerHandPic.setAttribute("hidden", true);
    playRound();
  });
}
playGame();
