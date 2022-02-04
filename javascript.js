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

// plays a round of the game, comparing every possibility
// and returning the result of the game.
function playRound(userPlay, compPlay) {
    let result;
    switch(userPlay, compPlay) {
        // player wins scenarios
        case userPlay === 'paper' && compPlay === 'rock':
            result = "You Win! :D Paper beats Rock!";
            return result;
        case userPlay === 'rock' && compPlay === 'scissors':
            result = "You Win! :D Rock beats Scissors!";
            return result;
        case userPlay === 'scissors' && compPlay === 'paper':
            result = "You Win! :D Scissors beats Paper!";
            return result;
        // player loses scenarios
        case userPlay === 'paper' && compPlay === 'scissors':
            result = "You Lose! :( Scissors beats Paper!";
            return result;
        case userPlay === 'scissors' && compPlay === 'rock':
            result = "You Lose! :( Rock beats Scissors!";
            return result;
        case userPlay === 'rock' && compPlay === 'paper':
            result = "You Lose! :( Paper beats Rock!";
            return result;
        // draw scenarios
        default:
            result = "Draw!";
            return result;
    }
}

console.log(computerPlay(), userPlay);