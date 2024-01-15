import { game } from "./js/utils/global-variables.js";
import { onKeyDown } from "./js/modules/gameplay/onkeydown.js";
import { fillBody } from "./js/utils/fill-body.js";

//начало игры//
function startGame() {
  game.countIncorrectGuesses = 0;
  document.addEventListener("keydown", onKeyDown);
}

startGame();
fillBody();
