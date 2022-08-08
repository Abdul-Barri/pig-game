"use strict";

// Selecting HTML elements
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");
const diceImage = document.querySelector(".dice");
const diceRollBtn = document.querySelector(".btn--roll");

// Setting up initial game state
score0.textContent = 0;
score1.textContent = 0;
diceImage.classList.add("hidden");

let randomNum = 0;
let currentScore = 0;

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
  currentScore0.textContent = currentScore;
};

diceRollBtn.addEventListener("click", function () {
  randomNum = diceRoll();
  console.log(typeof randomNum, randomNum);
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
    console.log("Switch Player");
  }
});
