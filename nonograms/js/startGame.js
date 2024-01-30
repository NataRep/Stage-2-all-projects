import { Game } from "./game.js";
import { chooseTask } from "./chooseTask.js";

export function startGame() {
  //let newGame = new Game(chooseTask("random"));

  let newGame = new Game(chooseTask("chair"));

  newGame.createGameFeild();
}
