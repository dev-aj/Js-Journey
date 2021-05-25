'use strict';

//Selecting elements
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldScore = document.querySelector('.btn--hold');
const totalScore0El = document.getElementById('score--0');
const totalScore1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const activePlayer0 = document.querySelector('.player--0');
const activePlayer1 = document.querySelector('.player--1');

let playing;

//Initial conditions
function init() {
  playing = true;
  totalScore0El.textContent = 0;
  totalScore1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  activePlayer0.classList.add('player--active');
  activePlayer1.classList.remove('player--active');
  activePlayer0.classList.remove('player--winner');
  activePlayer1.classList.remove('player--winner');
  dice.classList.add('hidden');
}

//Initializing game
init();

//Implemting function to set dice according to the number
function setDice(num) {
  dice.classList.remove('hidden');
  dice.src = `dice-${num}.png`;
}

//switching player
function switchPlayer() {
  if (activePlayer0.classList.contains('player--active')) {
    activePlayer0.classList.remove('player--active');
    activePlayer1.classList.add('player--active');
    currentScore0El.textContent = 0;
  } else {
    activePlayer0.classList.add('player--active');
    activePlayer1.classList.remove('player--active');
    currentScore1El.textContent = 0;
  }
}

//Checking for winner
function checkWinner(player, score) {
  if (Number(score) >= 100) {
    player === 0
      ? activePlayer0.classList.add('player--winner')
      : activePlayer1.classList.add('player--winner');
    playing = false;
    dice.classList.add('hidden');
  } else {
    switchPlayer();
  }
}

//Implementing rolling of dice
btnRollDice.addEventListener('click', () => {
  if (playing) {
    const rolledNum = Math.trunc(Math.random() * 6) + 1;
    setDice(rolledNum);

    if (rolledNum === 1) {
      switchPlayer();
    } else {
      if (activePlayer0.classList.contains('player--active')) {
        currentScore0El.textContent =
          Number(currentScore0El.textContent) + rolledNum;
      } else {
        currentScore1El.textContent =
          Number(currentScore1El.textContent) + rolledNum;
      }
    }
  }
});

//Implementing Button hold
btnHoldScore.addEventListener('click', () => {
  if (playing) {
    if (activePlayer0.classList.contains('player--active')) {
      totalScore0El.textContent =
        Number(totalScore0El.textContent) + Number(currentScore0El.textContent);
      checkWinner(0, totalScore0El.textContent);
    } else {
      totalScore1El.textContent =
        Number(totalScore1El.textContent) + Number(currentScore1El.textContent);
      checkWinner(1, totalScore1El.textContent);
    }
  }
});

//Reset or start a new game
btnNewGame.addEventListener('click', init);
