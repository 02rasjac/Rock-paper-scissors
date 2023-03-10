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

document.querySelectorAll('[data-choice]').forEach((item) => item.addEventListener('click', playRound));
document.querySelector('#reset').addEventListener('click', reset);

// ====
// MAIN
// ====
reset();
displayScore();
// ========
// END MAIN
// ========

function reset() {
  playerScore = 0;
  computerScore = 0;
  roundResult.textContent = 'Choose your weapon!';
  displayScore();
}

function displayScore() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function getComputerChoice() {
  let index = Math.floor(Math.random() * nChoices);
  return choices[index];
}

function compareChoices(playerSelection, computerSelection) {
  if (choices.indexOf(playerSelection) < 0) {
    return 'Not a valid choice';
  }

  if (playerSelection === computerSelection) {
    return Outcomes.tie;
  }
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    return Outcomes.lose;
  }

  return Outcomes.win;
}

function playRound(e) {
  if (playerScore >= 5 || computerScore >= 5) {
    return;
  }

  let playerSelection = e.target.dataset.choice;
  let computerSelection = getComputerChoice();
  let outcome = compareChoices(playerSelection, computerSelection);

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

  displayScore();

  if (playerScore === 5) {
    roundResult.textContent = 'You won the game!';
  } else if (computerScore === 5) {
    roundResult.textContent = 'You lost the game!';
  }
}
