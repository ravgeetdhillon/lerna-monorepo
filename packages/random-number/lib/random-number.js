"use strict";

function randomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}

module.exports = randomNumber;
