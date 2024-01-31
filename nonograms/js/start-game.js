import { Game } from "./game.js";
import { chooseTask } from "./choose-task.js";
import { DrawGame } from "../components/playing-field/draw-game.js";

export function startGame() {
  const main = document.getElementsByTagName("main")[0];

  let newGame = new Game(chooseTask("random"));
  let draw = new DrawGame(newGame);

  newGame.createGameFeild();

  //проверяем есть ли уже отрисованное поле и перерисовываем если требуется
  let mainChildren = Array.from(main.children[0].children);
  let gameNode = mainChildren.find((el) => el.classList.contains("game"));

  if (gameNode) {
    //перерисовываем поле
    gameNode.before(draw.drawPlayFeildEl());
    gameNode.remove();
    console.log("удаляем поле");
  } else {
    //рисуем поле первый раз
    main.children[0].append(draw.drawPlayFeildEl());
  }
}
