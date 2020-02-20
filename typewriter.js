"use strict";

window.addEventListener("DOMContentLoaded", start);
//let typewrittenElement = document.querySelector(".typewritten");
//let typewrittenStr = document.querySelector(".typewritten").textContent;
let letterCounter = 0;

let enableSoundBool = false;

let sound1Playing = false;
let sound2Playing = false;

let typeSpaceSound = document.querySelector("#typespace");
let typeLetterSound1 = document.querySelector("#typekey1").cloneNode(true);
let typeLetterSound1b = document.querySelector("#typekey1");
let typeLetterSound2 = document.querySelector("#typekey2").cloneNode(true);
let typeLetterSound2b = document.querySelector("#typekey2");

function start() {
  const element = document.querySelector(".typewritten");
  typeWriter(element, done);
}

function done() {
  console.log("Done!");
}

function typeWriter(element, callback) {
  let typewrittenSubStr;
  //make typewritten string empty
  document.addEventListener("click", enableSound);
  document.querySelector("#sounds").textContent = "Click anywhere to enable sound";
  let typewrittenStr = element.textContent;
  element.textContent = "";
  console.log(letterCounter);
  console.log(typewrittenStr.length);
  showNextLetter();
  function showNextLetter() {
    typewrittenSubStr = typewrittenStr.substring(0, letterCounter + 1);
    playSound(typewrittenSubStr);
    console.log(typewrittenSubStr);

    element.textContent = typewrittenSubStr;

    letterCounter++;
    if (letterCounter < typewrittenStr.length) {
      const offset = Math.random() * 100 + 50;
      setTimeout(showNextLetter, offset);
    } else {
      callback();
    }
  }
  function enableSound() {
    enableSoundBool = true;
  }

  function playSound(typewrittenSubStr) {
    //add sounds to string
    if (enableSoundBool) {
      //console.log("We are playing sound!");
      if (typewrittenSubStr.charAt(typewrittenSubStr.length - 1) == " ") {
        typeSpaceSound.play();
      } else if (Math.random() > 0.5) {
        if (sound1Playing) {
          typeLetterSound1b.play();
          sound1Playing = false;
        } else {
          typeLetterSound1.play();
          sound1Playing = true;
        }
      } else {
        if (sound2Playing) {
          typeLetterSound2.play();
          sound2Playing = false;
        } else {
          typeLetterSound2b.play();
          sound2Playing = true;
        }
      }
    }
  }
}

//Link to site through github: https://jona74c2.github.io/typewriter/typewriter.html
