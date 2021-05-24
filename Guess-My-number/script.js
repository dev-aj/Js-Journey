'use strict';

let guessInput = document.querySelector('.guess');
let trueNumber = document.querySelector('.number');
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let again = document.querySelector('.again');
let round = document.querySelector('.round');
let totalScore = document.querySelector('.totalscore');

const numberGenerator = () => Math.floor(Math.random() * 20 + 1);

let numberToGuess = numberGenerator();
//console.log(numberToGuess);
check.addEventListener('click', function () {
  let guess = Number(guessInput.value);
  let currentScore = Number(score.textContent);
  if (!guess) {
    message.textContent = `🙂 Please input a value from 1 to 20.`;
  } else {
    if (currentScore > 1 && guess !== numberToGuess) {
      message.textContent =
        guess > numberToGuess ? '📈 Too High !!' : '📉 Too Low !!';
      currentScore--;
      score.textContent = currentScore;
    } else if (currentScore > 1 && guess === numberToGuess) {
      message.textContent = `🎉 🥳 Correct Number !!`;
      highscore.textContent =
        Number(highscore.textContent) > currentScore
          ? highscore.textContent
          : currentScore;
      totalScore.textContent = Number(totalScore.textContent) + currentScore;
      document.querySelector('body').style = 'background-color:#60b347';
    } else {
      currentScore--;
      score.textContent = currentScore;
      message.textContent = '💥 You lost the game!';
    }
  }
});

again.addEventListener('click', () => {
  round.textContent = Number(round.textContent) + 1;
  numberToGuess = numberGenerator();
  document.querySelector('body').style = 'background-color:#222';
  score.textContent = 20;
  //highscore.textContent = 0;
  guessInput.value = '';
  message.textContent = 'Start guessing...';
  guessInput.focus = false;
});
