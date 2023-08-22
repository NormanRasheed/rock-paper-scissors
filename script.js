let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
