let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
function playRound(playerSelection = prompt("make your choice"), computerSelection = getComputerChoice()) {

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === "rock" && computerSelection === "paper"){
        return "You lose, paper beats rock!"
    };
    if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win, paper beats rock!"
    };
    if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You win, scissors beats paper!"
    };
    if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose, scissors beats paper!"
    };
    if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose, rock beats scissors!"
    };
    if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You win, rock beats scissors!"
    };
    if(playerSelection === "scissors" && computerSelection === "scissors"){
        return "Draw"
    };
    if(playerSelection === "rock" && computerSelection === "rock"){
        return "Draw"
    };
    if(playerSelection === "paper" && computerSelection === "paper"){
        return "Draw"
    };
  }

  function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        console.log(playRound(playerSelection = prompt("make your choice"), computerSelection = getComputerChoice()));
    }
    return
  }
