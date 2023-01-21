const choices = ["rock", "paper", "scissors"];
const nChoices = choices.length;
const Outcomes = Object.freeze({
    lose: Symbol("lose"),
    win: Symbol("win"),
    tie: Symbol("tie")
});

function getComputerChoice() {
    let index = Math.floor(Math.random() * nChoices);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    if (choices.indexOf(playerSelection) < 0) {
        return "Not a valid choice";
    }

    if (playerSelection === computerSelection) {
        // Tie
        return Outcomes.tie;
    }
    if (playerSelection === "rock" && computerSelection === "paper" 
        || playerSelection === "paper" && computerSelection === "scissors"
        || playerSelection === "scissors" && computerSelection === "rock") {
        // Player lose
        return Outcomes.lose;
    }

    // Player win
    return Outcomes.win;
}

function game(nRounds = 5) {
    let playerScore = 0;
    let computerScore = 0;

    for (; nRounds > 0; nRounds--) {
        let playerSelection = prompt("What's your choices? (rock, paper, scissors)").toLowerCase();
        let computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection, computerSelection);

        switch (outcome) {
            case Outcomes.lose:
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                computerScore++;
                break;
            case Outcomes.win:
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                playerScore++;
                break;
            case Outcomes.tie:
                console.log("It's a tie!");
                break;
            default:
                console.log(outcome);
                break;
        }
    }

    if (playerScore === computerScore) {
        console.log(`It's a tie with both scoring ${playerScore}!`);
    }
    else {
        console.log(`The winner is ${playerScore > computerScore ? 'You' : 'Computer'}! The total score is ${playerScore}:${computerScore} (you:computer)!`);
    }
}

game();