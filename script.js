const choices = ["rock", "paper", "scissors"]; 

function playGame(){
    playRound();
}

function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice(){
    let input = prompt('Rock, paper, or scissors?');
    while(input == null){
        input = prompt('Oops, please only choose rock, paper, or scissors.');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt('Oops, please only choose rock, paper, or scissors.');
        input = input.toLowerCase();
        check = validateInput(input);
    }
}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(input) {
    return choices.includes(input);
}

playGame();