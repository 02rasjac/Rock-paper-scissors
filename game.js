const choices = ["rock", "paper", "scissors"];
const nChoices = choices.length;

function getComputerChoice() {
    let index = Math.floor(Math.random() * nChoices);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (choices.indexOf(playerSelection) < 0) {
        return "Not a valid choice";
    }

    if (playerSelection === computerSelection) {
        // Tie
        return "It's a tie!";
    }
    if (playerSelection === "rock" && computerSelection === "paper" 
        || playerSelection === "paper" && computerSelection === "scissors"
        || playerSelection === "scissors" && computerSelection === "rock") {
        // Player lose
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    // Player win
    return `You win! ${playerSelection} beats ${computerSelection}`;
}