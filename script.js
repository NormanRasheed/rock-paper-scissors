let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, paper beats rock!"
    };
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win, paper beats rock!"
    };
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win, scissors beats paper!"
    };
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose, scissors beats paper!"
    };
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose, rock beats scissors!"
    };
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win, rock beats scissors!"
    };
    if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Draw"
    };
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Draw"
    };
    if (playerSelection === "paper" && computerSelection === "paper") {
        return "Draw"
    };

}

const div = document.createElement('div');

const resultDiv = document.createElement('div');
div.appendChild(resultDiv);

const compScoreDive = document.createElement('div')
div.appendChild(compScoreDive);

const playerScoreDiv = document.createElement('div');
div.appendChild(playerScoreDiv);

document.body.appendChild(div);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        console.log(roundResult);

        if (roundResult.includes("win")) {
            playerScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }

        console.log(`The player score is: ${playerScore}`);
        console.log(`The computer score is: ${computerScore}`);

        resultDiv.textContent = `Results: ${roundResult}`;
        compScoreDive.textContent = `Computer Score: ${computerScore}`;
        playerScoreDiv.textContent = `Player Score: ${playerScore}`;


        if (playerScore === 5) {
            return "Player has won";
        } else if (playerScore === computerScore) {
            return "The game is a draw";
        } else {
            return "The computer has won";
        }
    });
});




// function game() { // for(let i = 0; i < 5; i++){
//     let result = playRound(playerSelection = prompt("make your choice"), computerSelection = getComputerChoice());

//     console.log(result);

//     if (result.includes("win")) {
//         playerScore++;
//     };
//     if (result.includes("lose")) {
//         computerScore++;
//     };
//     console.log(`The player score is:${playerScore}`);
//     console.log(`The computer score is:${computerScore}`);
//     // }
//     if (playerScore === 5) {
//         return "Player has won"
//     } else if (playerScore === computerScore) {
//         return "The game is a draw"
//     } else {
//         return "The computer has won"
//     }
// }
