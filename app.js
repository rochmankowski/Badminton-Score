const playerOneButton = document.querySelector('#playerOneButton');
const playerTwoButton = document.querySelector('#playerTwoButton');
const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#winningScoreSelect');

const darkModeButton = document.querySelector('#darkModeButton');
const langChangeButton = document.querySelector('#langChangeButton');

const playerOneScoreDisplay = document.querySelector('#playerOneScoreDisplay');
const playerTwoScoreDisplay = document.querySelector('#playerTwoScoreDisplay');
const scoreboard = document.querySelector('#scoreboard');
const shortSet = document.querySelector('#shortSet');
const normalSet = document.querySelector('#normalSet');
const title = document.querySelector('title');
const body = document.querySelector('.bodyClass');
const mainContainer = document.querySelector('.mainContainer');
const buttonContainer = document.querySelector('.buttonContainer');
const h1 = document.querySelector('.h1');
const image = document.querySelector('#image');


let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = 11;
let maxScore = 15

let isGameOver = false;
let shortGame = true; 
let isNoLangEng = false;
let isWhiteMode = false;
let playerOneWon = undefined;


function scoreAdvantage() {
    return Math.abs(playerOneScore - playerTwoScore);
}

function resetGame() {
    isGameOver = false;
    playerOneWon = undefined;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScoreDisplay.textContent = playerOneScore;
    playerTwoScoreDisplay.textContent = playerTwoScore;
    if (isWhiteMode === true) {
        playerOneScoreDisplay.className = 'playerOneScoreDisplayDm';
        playerTwoScoreDisplay.className = 'playerTwoScoreDisplayDm';
        playerOneButton.className = 'playerOneButtonDm';
        playerTwoButton.className = 'playerTwoButtonDm';
    } else if (isWhiteMode === false) {
        playerOneScoreDisplay.className = 'playerOneScoreDisplay';
        playerTwoScoreDisplay.className = 'playerTwoScoreDisplay';
        playerOneButton.className = 'playerOneButton';
        playerTwoButton.className = 'playerTwoButton';
    }
    if (shortGame === true) {
        winningScore = 11;
    } else {
        winningScore = 21;
    }
}

function addPointsPlayerOne() {
    if (!isGameOver) {
        playerOneScore += 1;
        playerOneScoreDisplay.textContent = playerOneScore;
        if (shortGame === true) {
            maxScore = 15;
            if (playerOneScore === maxScore) {
                isGameOver = true;
                playerOneScoreDisplay.className = 'playerOneScoreDisplayWin';
                playerTwoScoreDisplay.className = 'playerTwoScoreDisplayLose';
                playerOneButton.className = 'playerOneButtonWin';
                playerTwoButton.className = 'playerTwoButtonLose';
                playerOneWon = true;
            } else {
                if (playerOneScore === winningScore && scoreAdvantage() > 1) {
                    isGameOver = true;
                    playerOneScoreDisplay.className = 'playerOneScoreDisplayWin';
                    playerTwoScoreDisplay.className = 'playerTwoScoreDisplayLose';
                    playerOneButton.className = 'playerOneButtonWin';
                    playerTwoButton.className = 'playerTwoButtonLose';
                    playerOneWon = true;
                } else if (playerOneScore === winningScore && scoreAdvantage() == 1) {
                    winningScore += 1;
                }
            }
        } else if (shortGame === false) {
            maxScore = 30;
            if (playerOneScore === maxScore) {
                isGameOver = true;
                playerOneScoreDisplay.className = 'playerOneScoreDisplayWin';
                playerTwoScoreDisplay.className = 'playerTwoScoreDisplayLose';
                playerOneButton.className = 'playerOneButtonWin';
                playerTwoButton.className = 'playerTwoButtonLose';
                playerOneWon = true;
            } else {
                if (playerOneScore === winningScore && scoreAdvantage() > 1) {
                    isGameOver = true;
                    playerOneScoreDisplay.className = 'playerOneScoreDisplayWin';
                    playerTwoScoreDisplay.className = 'playerTwoScoreDisplayLose';
                    playerOneButton.className = 'playerOneButtonWin';
                    playerTwoButton.className = 'playerTwoButtonLose';
                    playerOneWon = true;
                } else if (playerOneScore === winningScore && scoreAdvantage() == 1) {
                    winningScore += 1;
                }
            }
        }
    }
}    

function addPointsPlayerTwo() {
    if (!isGameOver) {
        playerTwoScore += 1;
        playerTwoScoreDisplay.textContent = playerTwoScore;
        if (shortGame === true) {
            maxScore = 15;
            if (playerTwoScore === maxScore) {
                isGameOver = true;
                playerOneScoreDisplay.className = 'playerOneScoreDisplayLose';
                playerTwoScoreDisplay.className = 'playerTwoScoreDisplayWin';
                playerOneButton.className = 'playerOneButtonLose';
                playerTwoButton.className = 'playerTwoButtonWin';
                playerOneWon = false;
            } else {
                if (playerTwoScore === winningScore && scoreAdvantage() > 1) {
                    isGameOver = true;
                    playerOneScoreDisplay.className = 'playerOneScoreDisplayLose';
                    playerTwoScoreDisplay.className = 'playerTwoScoreDisplayWin';
                    playerOneButton.className = 'playerOneButtonLose';
                    playerTwoButton.className = 'playerTwoButtonWin';
                    playerOneWon = false;
                } else if (playerTwoScore === winningScore && scoreAdvantage() == 1) {
                    winningScore += 1;
                }
            }
        } else if (shortGame === false) {
            maxScore = 30;
            if (playerTwoScore === maxScore) {
                isGameOver = true;
                playerOneScoreDisplay.className = 'playerOneScoreDisplayLose';
                playerTwoScoreDisplay.className = 'playerTwoScoreDisplayWin';
                playerOneButton.className = 'playerOneButtonLose';
                playerTwoButton.className = 'playerTwoButtonWin';
                playerOneWon = false;
            } else {
                if (playerTwoScore === winningScore && scoreAdvantage() > 1) {
                    isGameOver = true;
                    playerOneScoreDisplay.className = 'playerOneScoreDisplayLose';
                    playerTwoScoreDisplay.className = 'playerTwoScoreDisplayWin';
                    playerOneButton.className = 'playerOneButtonLose';
                    playerTwoButton.className = 'playerTwoButtonWin';
                    playerOneWon = false;
                } else if (playerTwoScore === winningScore && scoreAdvantage() == 1) {
                    winningScore += 1;
                }
            }
        }
    }
}

winningScoreSelect.addEventListener('change', function() {
    if (parseInt(this.value) == 11) {
        shortGame = true;
        winningScore = 11;
    } else {
        shortGame = false;
        winningScore = 21;
    }
    resetGame();
})

darkModeButton.addEventListener('click', function() {
    if (isWhiteMode === false) {
        body.className = 'bodyClassDm';
        mainContainer.className = 'mainContainerDm';
        h1.className = 'h1Dm';
        darkModeButton.className = 'darkModeButtonDm';
        resetButton.className = 'resetButtonDm';
        winningScoreSelect.className = 'scoreSelectDm';
        playerOneButton.className = 'playerOneButtonDm';
        playerTwoButton.className = 'playerTwoButtonDm';
        langChangeButton.className = 'langChangeButtonDm';
        image.src = 'badminton-photo-dm.jpg';
        if (playerOneWon === true) {
            playerOneScoreDisplay.className = 'playerOneScoreDisplayWin';
            playerTwoScoreDisplay.className = 'playerTwoScoreDisplayLose';
            playerOneButton.className = 'playerOneButtonWin';
            playerTwoButton.className = 'playerTwoButtonLose';
        } else if (playerOneWon === false) {
            playerOneScoreDisplay.className = 'playerOneScoreDisplayLose';
            playerTwoScoreDisplay.className = 'playerTwoScoreDisplayWin';
            playerOneButton.className = 'playerOneButtonLose';
            playerTwoButton.className = 'playerTwoButtonWin';
        } else {
            playerOneScoreDisplay.className = 'playerOneScoreDisplayDm';
            playerTwoScoreDisplay.className = 'playerTwoScoreDisplayDm';
        }
    } else if (isWhiteMode === true) {
        body.className = 'bodyClass';
        mainContainer.className = 'mainContainer';
        h1.className = 'h1';
        darkModeButton.className = 'darkModeButton';
        resetButton.className = 'resetButton';
        winningScoreSelect.className = 'scoreSelect';
        playerOneButton.className = 'playerOneButton';
        playerTwoButton.className = 'playerTwoButton';
        langChangeButton.className = 'langChangeButton';
        image.src = 'badminton-photo.jpg';
        if (playerOneWon === true) {
            playerOneScoreDisplay.className = 'playerOneScoreDisplayWin';
            playerTwoScoreDisplay.className = 'playerTwoScoreDisplayLose';
            playerOneButton.className = 'playerOneButtonWin';
            playerTwoButton.className = 'playerTwoButtonLose';
        } else if (playerOneWon === false) {
            playerOneScoreDisplay.className = 'playerOneScoreDisplayLose';
            playerTwoScoreDisplay.className = 'playerTwoScoreDisplayWin';
            playerOneButton.className = 'playerOneButtonLose';
            playerTwoButton.className = 'playerTwoButtonWin';
        } else {
            playerOneScoreDisplay.className = 'playerOneScoreDisplay';
            playerTwoScoreDisplay.className = 'playerTwoScoreDisplay';
        }
    }
    isWhiteMode = !isWhiteMode;
})

langChangeButton.addEventListener('click', function() {
    if (isNoLangEng === true) {
        scoreboard.innerText = 'TO';
        shortSet.innerText = 'SHORT SET';
        normalSet.innerText = 'NORMAL SET';
        title.innerText = '🏸 Badminton Score 🏸';
        darkModeButton.innerText = 'DARK MODE';
        playerOneButton.innerText = '+1 PLAYER ONE';
        playerTwoButton.innerText = '+1 PLAYER TWO';
        resetButton.innerText = 'RESET';
        langChangeButton.innerText = 'ENGLISH';
    } else if (isNoLangEng === false) {
        scoreboard.innerText = 'DO';
        shortSet.innerText = 'KRÓTKI SET';
        normalSet.innerText = 'NORMALNY SET';
        title.innerText = '🏸 Licznik Punktów 🏸'
        darkModeButton.innerText = 'TRYB CIEMNY';
        playerOneButton.innerText= '+1 GRACZ PIERWSZY';
        playerTwoButton.innerText = '+1 GRACZ DRUGI';
        resetButton.innerText = 'RESETUJ';
        langChangeButton.innerText = 'POLSKI';
    }
    isNoLangEng = !isNoLangEng;
    resetGame();
})


resetButton.addEventListener('click', resetGame);

playerOneButton.addEventListener('click', addPointsPlayerOne);

playerTwoButton.addEventListener('click', addPointsPlayerTwo);







