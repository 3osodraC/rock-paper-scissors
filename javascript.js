const playerSelection = getPlayerInput();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

// Makes the computer's play by generating a random number (0-2),
// and converting it to rock / paper / scissors.
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);

    let compPlay;
    if(randomNum === 0) {
        compPlay = 'rock';
    } 
    else if(randomNum === 1) {
        compPlay = 'paper';
    } 
    else {
        compPlay = 'scissors';
    }
    return compPlay;
}

// Plays a round of the game, comparing every possibility
// and returning the result of the game.
function playRound(playerSelection, computerSelection) {
    let result;
    switch(true) {
        // player wins scenarios
        case playerSelection === 'paper' && computerSelection === 'rock':
            result = "You Win! :D Paper beats Rock!";
            return result;
        case playerSelection === 'rock' && computerSelection === 'scissors':
            result = "You Win! :D Rock beats Scissors!";
            return result;
        case playerSelection === 'scissors' && computerSelection === 'paper':
            result = "You Win! :D Scissors beats Paper!";
            return result;
        // player loses scenarios
        case playerSelection === 'paper' && computerSelection === 'scissors':
            result = "You Lose! :( Scissors beats Paper!";
            return result;
        case playerSelection === 'scissors' && computerSelection === 'rock':
            result = "You Lose! :( Rock beats Scissors!";
            return result;
        case playerSelection === 'rock' && computerSelection === 'paper':
            result = "You Lose! :( Paper beats Rock!";
            return result;
        // draw scenarios
        case playerSelection === computerSelection:
            result = "Draw!";
            return result;
    }
}

// Prompt user for their selection. Keeps prompting until input is valid.
function getPlayerInput() {
    let userPlay;
    while(true) {
        userPlay = prompt('Make your play.');
        let newUserPlay = userPlay.toLowerCase();

        if(newUserPlay === 'rock' || newUserPlay === 'paper' || newUserPlay === 'scissors') {
            return newUserPlay;
        }
    }
}