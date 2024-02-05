import { Game } from "./game.js";
import { DrawGame } from "../components/playing-field/draw-game.js";
import { createModalWin } from "../components/modals/modal-win.js";
import { buttonsTools } from "../sections/main/create-main-section.js";
import { audio } from "../components/audio/audio.js";

export let newGame;
export let draw;
export let setTimer;

export function startGame(task) {
  const main = document.getElementsByTagName("main")[0];

  newGame = new Game(task);
  draw = new DrawGame(newGame);

  newGame.createGameFeild();

  //проверяем есть ли уже отрисованное поле и перерисовываем если требуется
  let mainChildren = Array.from(main.children[0].children);
  let gameNode = mainChildren.find((el) => el.classList.contains("game"));

  let playFeildEl = draw.drawPlayFeildEl();
  playFeildEl.classList.add(`size-${task.level}`);

  if (gameNode) {
    //перерисовываем поле
    gameNode.before(playFeildEl);
    gameNode.remove();
  } else {
    //рисуем поле первый раз
    main.children[0].append(playFeildEl);
  }

  //делаем активными кнопки для этой игры
  buttonsTools.forEach((button) => (button.disabled = false));

  //вешаем обработчик фиксации хода в объекте игры

  //клетки берем из массива draw.boxList, в нем для кадой клетки объект
  //const boxObj = {
  //  boxEl: box,
  //  x: i,
  //  y: indexRow,
  //};

  draw.boxList.forEach((box) => {
    //обработка клика на левую кнопку мыши
    box.boxEl.addEventListener("click", () => {
      //отмечаем ход в матрице
      let marker = box.boxEl.classList.contains("painted") ? "x" : "_";
      newGame.checkBoxInMatrix(box.x, box.y, marker);

      //запускаем таймер
      if (newGame.stopTimer) {
        newGame.stopTimer = false;
        setTimer = setInterval(() => {
          newGame.time++;
          draw.changeTimer(newGame.time);
        }, 1000);
      }

      //выбираем звук
      let sound = marker == "x" ? audio.paint : audio.clean;
      sound.play();
      //сравниваем матрицу таска и текущий результат
      newGame.compareMatrix();

      //проверяем выигрыш
      if (newGame.isWin) {
        //звук победы
        audio.win.play();

        //выводим модалку
        setTimeout(() => {
          draw.gameEl.append(createModalWin(newGame.time));
        }, 700);
        //останавливаем таймер
        clearInterval(setTimer);
        //убираем возможность кликать по полю
        draw.stopGame();
        //делаем не активными кнопки для этой игры
        buttonsTools.forEach((button) => (button.disabled = true));
      }
    });
    //обработка клика на правую кнопку мыши
    box.boxEl.addEventListener("contextmenu", () => {
      newGame.checkBoxInMatrix(box.x, box.y, "_");

      //запускаем таймер
      if (newGame.stopTimer) {
        newGame.stopTimer = false;
        setTimer = setInterval(() => {
          newGame.time++;
          draw.changeTimer(newGame.time);
        }, 1000);
      }

      let sound =
        box.boxEl.classList.contains("painted") ||
        box.boxEl.classList.contains("marked")
          ? audio.mark
          : audio.clean;
      sound.play();
    });
  });
}
