let target;

const humanGuessInput = document.getElementById('human-guess');

const roundNumberDisplay = document.getElementById('round-number');

const computerGuessDisplay = document.getElementById('computer-guess');

const humanScoreDisplay = document.getElementById('human-score');

const computerScoreDisplay = document.getElementById('computer-score');

const targetNumberDisplay = document.getElementById('target-number');

const computerWinsDisplay = document.getElementById('computer-wins');

const guessButton = document.getElementById('guess');
const nextRoundButton = document.getElementById('next-round');


guessButton.addEventListener('click', () => {
    target = generateTarget();

    const currentHumanGuess = humanGuessInput.value;
    const computerGuess = Math.floor(Math.random() * 10);

    computerGuessDisplay.innerText = computerGuess;
    targetNumberDisplay.inerText = target;

    const humanisWinner = compareGuesses(currentHumanGuess, computerGuess, target);
    const winner = humanisWinner ? 'human' : 'computer';

    updateScore(winner);

    if (humanisWinner) {
        guessButton.innerText = "You Win!!!";
        guessButton.classList.toggle('winner-text');
    } else {
        computerWinsDisplay.innerText = "Computer Win!!!";
    }

    humanScoreDisplay.innerText = humanScore;
    computerScoreDisplay.innerText = computerScore;

    guessButton.setAttribute('disabled', true);
    nextRoundButton.removeAttribute('disabled');
});

nextRoundButton.addEventListener('click', () => {
    advanceRound();

    roundNumberDisplay.innerText = currentRoundNumber;

    nextRoundButton.setAttribute('disabled', true);
    guessButton.removeAttribute('disabled');

    targetNumberDisplay.innerText = '?';
    guessButton.innerText = 'Make a guess';
    humanGuessInput.value = '';
    computerGuessDisplay.innerText = '?';
    computerWinsDisplay.innerText = '';
    guessButton.classList.remove('winning-text');
});

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

addButton.addEventListener('click', () => {
    humanGuessInput.value = +humanGuessInput.value + 1;
    handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener('click', () => {
    humanGuessInput.value = +humanGuessInput.value - 1;
    handleValueChange(humanGuessInput.value);
});


const handleValueChange = value => {
    if (value > 0 && value <=9) {
        subtractButton.removeAttribute('disabled');
        addButton.removeAttribute('disabled');
    } else if (value > 9 ) {
        addButton.setAttribute('disable', true);
    } else if (value <= 0 ) {
        subtractButton.setAttribute('disable', true);
    }
}

humanGuessInput.addEventListener('input', function(e) {
    handleValueChange(e.target.value);
})




