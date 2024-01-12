import { body } from "./js/utils/globalVariables.js";
import { countIncorrectGuesses } from "./js/utils/globalVariables.js";

function startGame() {
  countIncorrectGuesses = 0;
}

function fillBody() {
  body.classList.add("page");
  const h1 = document.createElement("h1");
  h1.innerHTML = "Hangman game";
  const main = document.createElement("main");
  main.classList.add("main");

  body.append(h1);
  body.append(main);
}

startGame();
fillBody();
