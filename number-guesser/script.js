let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const humanDifference = Math.abs(targetNumber - humanGuess);
    const computerDifference = Math.abs(targetNumber - computerGuess)
    return humanDifference <= computerDifference;
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++
    }
}

const advanceRound = () => currentRoundNumber++;


