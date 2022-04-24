"use strict";

function forgottenLetter(letterArray) {
  let forgottenLetters = [];

  if (letterArray != null && letterArray != undefined && letterArray.length > 0) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startingPoint = alphabet.indexOf(letterArray[0]);

    for (let i = 0; i < letterArray.length; i++) {
      if (
        letterArray[i] != alphabet[startingPoint + i] &&
        letterArray[i] != undefined &&
        letterArray[i] != null
      ) {
        forgottenLetters.push(alphabet[startingPoint + i]);
        startingPoint += 1;
      }
    }
  }

  return forgottenLetters;
};

module.exports = { forgottenLetter };
