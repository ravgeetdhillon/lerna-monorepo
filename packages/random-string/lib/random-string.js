"use strict";

const charactersSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function randomString(len = 5) {
  const str = [...Array(len)]
    .map((i) =>
      charactersSet.charAt(Math.floor(Math.random() * charactersSet.length))
    )
    .join("");
  return str;
}

module.exports = randomString;
