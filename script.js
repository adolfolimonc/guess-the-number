'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 ¡A la verga!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 99;

document.querySelector('.guess').value = 99;
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess >= 1 && guess <= 20) {
    //no input
    if (!guess) {
      // document.querySelector('.message').textContent = '🚫 No number!';
      displayMessage('🚫 No number!');
      //When player wins
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = '🎉 ¡A la verga!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      displayMessage('🎉 ¡A la verga!');
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        guess > secretNumber
          ? displayMessage('📈 Too high!')
          : displayMessage('📉 Too low!');
        // ? (document.querySelector('.message').textContent = '📈 Too high!')
        // : (document.querySelector('.message').textContent = '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('😢 You lost the game');
        // document.querySelector('.message').textContent = '😢 You lost the game';
        document.querySelector('.score').textContent = 0;
      }
    }
  } else {
    // document.querySelector('.message').textContent = '❌ Between 1 and 20!';
    displayMessage('❌ Between 1 and 20!');

    setTimeout(function () {
      displayMessage('Start guessing...');
      // document.querySelector('.message').textContent = 'Start guessing...';
    }, 2000);
    document.querySelector('.guess').value = '';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  console.log(secretNumber);
});
