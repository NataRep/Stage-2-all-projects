import { Game } from "./game.js";
import { chooseTask } from "./chooseTask.js";
import { Draw } from "../components/playing-field/draw.js";

export function startGame() {
  const body = document.getElementsByTagName("body")[0];
  console.log(body);

  let newGame = new Game(chooseTask("random"));
  let draw = new Draw(newGame);

  newGame.createGameFeild();

  body.append(draw.drawPlayFeildEl());
}
