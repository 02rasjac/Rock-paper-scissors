const choices = ['rock', 'paper', 'scissors'];
const nChoices = choices.length;
const Outcomes = Object.freeze({
  lose: Symbol('lose'),
  win: Symbol('win'),
  tie: Symbol('tie'),
});

let playerScore = 0;
let computerScore = 0;

let roundResult = document.querySelector('#round-result');
let playerScoreDisplay = document.querySelector('#player span');
let computerScoreDisplay = document.querySelector('#computer span');

document.querySelectorAll('button').forEach((item) => item.addEventListener('click', game));

function getComputerChoice() {
  let index = Math.floor(Math.random() * nChoices);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  if (choices.indexOf(playerSelection) < 0) {
    return 'Not a valid choice';
  }

  if (playerSelection === computerSelection) {
    // Tie
    return Outcomes.tie;
  }
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    // Player lose
    return Outcomes.lose;
  }

  // Player win
  return Outcomes.win;
}

function game(e) {
  let playerSelection = e.target.dataset.choice;
  let computerSelection = getComputerChoice();
  let outcome = playRound(playerSelection, computerSelection);

  switch (outcome) {
    case Outcomes.lose:
      roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
      break;
    case Outcomes.win:
      roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
      playerScore++;
      break;
    case Outcomes.tie:
      roundResult.textContent = "It's a tie!";
      break;
    default:
      console.log(outcome);
      break;
  }

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}
