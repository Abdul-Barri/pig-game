"use strict";

// Selecting HTML elements
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");
const diceImage = document.querySelector(".dice");
const diceRollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");

// Setting up initial game state
score0.textContent = 0;
score1.textContent = 0;
diceImage.classList.add("hidden");

const finalScores = new Array(0, 0);
let randomNum = 0;
let currentScore = 0;
let activePlayer = 0;

// Functions declaration
const diceRoll = function (diceNum) {
  diceNum = Math.trunc(Math.random() * 6 + 1);
  return diceNum;
};

const updateDiceRoll = function () {
  diceImage.src = `dice-${randomNum}.png`;
  diceImage.classList.remove("hidden");
};

const updateCurrentScore = function () {
  currentScore += randomNum;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

const switchPlayer = function () {
  updateDiceRoll();
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
};

// Roll dice button functionality
diceRollBtn.addEventListener("click", function () {
  randomNum = diceRoll();

  if (randomNum !== 1) {
    if (randomNum === 2) {
      updateDiceRoll();
      updateCurrentScore();
    } else if (randomNum === 3) {
      updateDiceRoll();
      updateCurrentScore();
    } else if (randomNum === 4) {
      updateDiceRoll();
      updateCurrentScore();
    } else if (randomNum === 5) {
      updateDiceRoll();
      updateCurrentScore();
    } else if (randomNum === 6) {
      updateDiceRoll();
      updateCurrentScore();
    }
  } else {
    // switch player
    switchPlayer();
  }
});

// Hold button functionality
holdBtn.addEventListener("click", function () {
  finalScores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    finalScores[activePlayer];
  if (finalScores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document.getElementById(`name--${activePlayer}`).textContent = `Player ${
      activePlayer + 1
    } Wins`;
    diceRollBtn.classList.add("hidden");
    diceImage.classList.add("hidden");
    holdBtn.classList.add("hidden");
  } else {
    switchPlayer();
  }
});

// New game button functionality
newGameBtn.addEventListener("click", function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  document.getElementById(`name--${activePlayer}`).textContent = `Player ${
    activePlayer + 1
  }`;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  
  score0.textContent = 0;
  score1.textContent = 0;
  diceImage.classList.add("hidden");

  finalScores[0] = 0;
  finalScores[1] = 0;
  randomNum = 0;
  currentScore = 0;
  activePlayer = 0;
  diceRollBtn.classList.remove("hidden");
  holdBtn.classList.remove("hidden");
});
