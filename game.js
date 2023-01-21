const choices = ["rock", "paper", "scissors"];
const nChoices = choices.length;

function getComputerChoice() {
    let index = Math.floor(Math.random() * nChoices);
    return choices[index];
}
