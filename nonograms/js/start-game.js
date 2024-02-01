import { Game } from "./game.js";
import { chooseTask } from "./choose-task.js";
import { DrawGame } from "../components/playing-field/draw-game.js";
import { createModalWin } from "../components/modals/modal-win.js";

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

  //вешаем обработчик фиксации хода в объекте игры

  //клетки берем из массива draw.boxList, в нем для кадой клетки объект
  //const boxObj = {
  //  boxEl: box,
  //  x: i,
  //  y: indexRow,
  //};

  draw.boxList.forEach((box) => {
    box.boxEl.addEventListener("click", () => {
      //отмечаем ход в матрице
      newGame.checkBoxInMatrix(box.x, box.y);
      //сравниваем матрицу таска и текущий результат
      newGame.compareMatrix();
      //проверяем выигрыш
      if (newGame.isWin) {
        draw.stopGame();
        setTimeout(draw.gameEl.append(createModalWin(newGame.time)), 3000);
      }
    });
  });
}
