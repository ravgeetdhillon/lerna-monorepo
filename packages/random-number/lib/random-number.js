"use strict";

function randomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
}

module.exports = randomNumber;
