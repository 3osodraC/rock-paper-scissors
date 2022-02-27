const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');

const playerScoreDisplayDiv = document.querySelector('.player-score-display');
const computerScoreDisplayDiv = document.querySelector('.computer-score-display');
const announcer = document.querySelector('.announcer');

// Each button calls playRound() with the respective argument (rock/paper/scissors)
// and outputs the result to the announcer div.
btnRock.addEventListener('click', () => {
    announcer.textContent = playRound('rock', computerPlay());
    updateScoreDisplay();
    announceWinner();
});

btnPaper.addEventListener('click', () => {
    announcer.textContent = playRound('paper', computerPlay());
    updateScoreDisplay();
    announceWinner();
});

btnScissors.addEventListener('click', () => {
    announcer.textContent = playRound('scissors', computerPlay());
    updateScoreDisplay();
    announceWinner();
});

let playerScoreDisplay = 0;
let computerScoreDisplay = 0;

// Updates the score by scanning the announcer.
function updateScoreDisplay() {
    let cmpScoreText;
    let plyrScoreText;

    switch(true) {
        case announcer.textContent === "You Win! :D Paper beats Rock!" ||
        announcer.textContent === "You Win! :D Rock beats Scissors!" ||
        announcer.textContent === "You Win! :D Scissors beats Paper!":
            playerScoreDisplay++;
            plyrScoreText = playerScoreDisplay.toString();
            playerScoreDisplayDiv.textContent = plyrScoreText;
            break;
        case announcer.textContent === "Draw!":
            break;
        default:
            computerScoreDisplay++;
            cmpScoreText = computerScoreDisplay.toString();
            computerScoreDisplayDiv.textContent = cmpScoreText;
            break;
    }
}

function announceWinner() {
    if(playerScoreDisplayDiv.textContent === '5') {
        announcer.textContent = 'End of Game! You Won! 🎉';
        setTimeout(function() {
            location.reload();
        }, 2000);
    } else if(computerScoreDisplayDiv.textContent === '5') {
        announcer.textContent = 'End of Game! You Lost! ❌';
        setTimeout(function() {
            location.reload();
        }, 2000);
    } else {
        return;
    }
}

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