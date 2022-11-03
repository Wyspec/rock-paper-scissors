const choices = ["rock", "paper", "scissors"];

//Initialize variables in order to keep track of score.
let playerScore = 0;
let computerScore = 0;

//Main function to play a series of 5 round RPS.
playGame();

function playGame() {
  //For loop; Plays 5 games of RPS, and outputs to the console the results of the previous round.
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    //Prompt player to pick either R, P, or S; repeats until game is over (5 rounds played).
    function playerChoice() {
      let input = prompt("Rock, paper, or scissors?");
      while (input == null) {
        input = prompt("Oops, please only choose rock, paper, or scissors.");
      }
      //Lower-case user input to make sure all inputs are consistent.
      input = input.toLowerCase();
      let check = validateInput(input);
      while (check == false) {
        input = prompt("Oops, please only choose rock, paper, or scissors.");
        while (input == null) {
          input = prompt("Oops, please only choose rock, paper, or scissors.");
        }
        //In order to allow the while loop to break, we need to re-check if the input from the user matches our pre-defined list in our array 'choices'.
        input = input.toLowerCase();
        check = validateInput(input);
      }
      return input;
    }
    playRound();
    console.log(`${playRound(playerSelection, computerSelection)} 
                The score is: ${playerScore} : ${computerScore}`);
  }
  //After 5 rounds have been played, compare the scores and declare a winner or loser.
  if (playerScore > computerScore) {
    console.log("Congratulations, you have won!");
  } else if (playerScore == computerScore) {
    console.log("It's a tie! Nobody wins.");
  } else {
    console.log("Unfortunately you have lost, better luck next time!");
  }
}

//Plays a round of RPS. Scores will be counted while outputting a message to the player if they won or lost the round;
function playRound(playerSelection, computerSelection) {
  let winMessage = `You win, ${playerSelection} beats ${computerSelection}!`;
  let loseMessage = `You lose, ${computerSelection} beats ${playerSelection}!`;
  let drawMessage = `It's a tie, you both chose ${playerSelection}!`;
  if (playerSelection == computerSelection) {
    return drawMessage;
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      playerScore++;
      return winMessage;
    } else {
      computerScore++;
      return loseMessage;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playerScore++;
      return winMessage;
    } else {
      computerScore++;
      return loseMessage;
    }
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      playerScore++;
      return winMessage;
    } else {
      computerScore++;
      return loseMessage;
    }
  }
}

//Randomizes computer choice, pulled from a pre-defined array (see variable 'choices', line 1).
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//Function to validate input, ensure player can only type in 'rock', 'paper', 'scissors'.
function validateInput(input) {
  return choices.includes(input);
}
