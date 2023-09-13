'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let secretNumber = document.querySelector('.number');
let guess = Number(document.querySelector('.guess').value);
let score = 20;
let highScore = 0;
check.addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // when the you guess nothin
  if (guess === 0) {
    message.textContent = '⚠ No number';

    //when your guess is right
  } else if (guess === number) {
    secretNumber.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'blue';
    message.textContent = 'You have guess right👏🏾';
    document.querySelector('.number').textContent = number;
    console.log('You have guess right👏🏾');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when your guess is too high
  } else if (guess > number) {
    if (score > 0) {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      message.textContent = ' too higher 📉 ';
    } else {
      message.textContent = ' Game Over 🥵';
    }
  }
  // when your guess is too low
  else if (guess < number) {
    if (score > 0) {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      message.textContent = 'too low📈';
    } else {
      message.textContent = ' Game Over 🥵';
    }
  }
});

let again = document.querySelector('.again');
again.addEventListener('click', () => {
  document.querySelector('.score').textContent = '20';
  secretNumber.textContent = '?';
  message.textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
