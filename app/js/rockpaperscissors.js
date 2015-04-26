////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(playerMove) {
    getInput(playerMove = "rock" || "paper" || "scissors")
        do getComputerMove;
    return computerMove;
}

function getComputerMove(computerMove) {
    if (playerMove){
        do randomPlay;
        console.log(computerMove)
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
switch(playerMove,computerMove){
    case playerMove === "scissors" && computerMove === "rock":return        computerWins;
    case playerMove === "scissors" && computerMove === "paper":return       playerWins;
    case playerMove === "scissors" && computerMove === "scissors":return    tie;

    case playerMove === "paper" && computerMove === "scissors":return       computerWins;
    case playerMove === "paper" && computerMove === "rock":return           playerWins;
    case playerMove === "paper" && computerMove === "paper":return          tie;

    case playerMove === "rock" && computerMove === "paper":return           computerWins;
    case playerMove === "rock" && computerMove === "scissors":return        playerWins;
    case playerMove === "rock" && computerMove === "rock":return            tie;

    default: return null;
    }
}

function playToFive(X) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while(X<3){
        do getPlayerMove;
        X += 1;
    }

    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
}