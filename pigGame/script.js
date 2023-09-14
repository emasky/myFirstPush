'use strict';

// selecting element
const player0el = document.querySelector('.player--0 ');
const player1el = document.querySelector('.player--1 ');

const score01p1 = document.querySelector('#score--0');
const score01p2 = document.querySelector('#score--1');
const currentScorep1 = document.querySelector('#current--0');
const diceEl = document.querySelector('.dice');

const buttonNew = document.querySelector('.btn--new');

const buttonRoll = document.querySelector('.btn--roll');

const buttonHold = document.querySelector('.btn--hold');

// starting condition
score01p1.textContent = 0;
score01p2.textContent = 0;
let score = [0, 0];
let activePlayer = 0;
diceEl.classList.add('hidden');
let currentScore = 0;

// function for rolling dice

buttonRoll.addEventListener('click', () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore = currentScore + dice;
    currentScorep1.textContent = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player0el.classList.toggle('player--active');
    player1el.classList.toggle('player--active');
  }
});
