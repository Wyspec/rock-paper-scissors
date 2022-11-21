let modal = document.getElementById("endModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
const selectionButtons = document.querySelectorAll("[data-selection]");

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const playerSelection = selectionButton.dataset.selection;
    const computerSelection = computerChoice();
    document.getElementById("declaration").innerHTML = "";
    playRound(playerSelection, computerSelection);
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    if (playerScore == 5) {
      document.getElementById(
        "declaration"
      ).innerHTML = `Congratulations, you win!`;
      document.getElementById(
        "modalMessage"
      ).innerHTML = `Congratulations, you have won! Click out anywhere to play again!`;
      modal.style.display = "block";
      span.onclick = function () {
        modal.style.display = "none";
        window.location.reload(true);
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
          window.location.reload(true);
        }
      };
    } else if (computerScore == 5) {
      document.getElementById("declaration").innerHTML = `Sorry, you lose!`;
      document.getElementById(
        "modalMessage"
      ).innerHTML = `How tragic, you have lost! Click out anywhere to play again.`;
      modal.style.display = "block";
      span.onclick = function () {
        modal.style.display = "none";
        window.location.reload(true);
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
          window.location.reload(true);
        }
      };
    }
  });
});

const choices = ["rock", "paper", "scissors"];
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  let winMessage = `You win, ${playerSelection} beats ${computerSelection}!`;
  let loseMessage = `You lose, ${computerSelection} beats ${playerSelection}!`;
  let drawMessage = `It's a tie, you both chose ${playerSelection}!`;
  if (playerSelection == computerSelection) {
    document.getElementById("status").innerHTML = drawMessage;
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      playerScore++;
      document.getElementById("status").innerHTML = winMessage;
    } else {
      computerScore++;
      document.getElementById("status").innerHTML = loseMessage;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playerScore++;
      document.getElementById("status").innerHTML = winMessage;
    } else {
      computerScore++;
      document.getElementById("status").innerHTML = loseMessage;
    }
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      playerScore++;
      document.getElementById("status").innerHTML = winMessage;
    } else {
      computerScore++;
      document.getElementById("status").innerHTML = loseMessage;
    }
  }
}
