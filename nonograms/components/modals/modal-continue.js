import { createModal } from "./modal.js";
import { chooseTask } from "../../js/choose-task.js";
import { startGame } from "../../js/start-game.js";
import { newGame } from "../../js/start-game.js";
import { draw } from "../../js/start-game.js";
import { setTimer } from "../../js/start-game.js";

export function createModalContinue() {
  const modal = createModal();
  modal.classList.add("modal_continue");

  const title = document.createElement("h2");
  title.classList.add("modal__h2");
  title.innerHTML = "Choose what you want to continue:";
  modal.append(title);

  let savedGames = localStorage.getItem("savedGame")
    ? JSON.parse(localStorage.getItem("savedGame"))
    : [];

  if (savedGames.length < 1) {
    const message = document.createElement("p");
    message.classList.add("modal__message");
    message.innerHTML = "Sorry. You don't have any saved games yet.";
    modal.append(message);
  } else {
    const gamesList = document.createElement("ul");
    gamesList.classList.add("modal__games-list");

    savedGames.forEach((game) => {
      const li = document.createElement("li");
      gamesList.classList.add("modal__saved-game");

      //отображаем время
      let sec = game.time % 60 > 9 ? game.time % 60 : "0" + (game.time % 60);
      let min =
        Math.floor(game.time / 60) > 9
          ? Math.floor(game.time / 60)
          : "0" + Math.floor(game.time / 60);

      li.innerHTML = `${game.level} - ${game.task} - ${min}:${sec}`;
      gamesList.append(li);

      //вешаем обработчик
      li.addEventListener("click", () => {
        modal.remove();

        const newTask = chooseTask(game.task, game.level);
        startGame(newTask);

        clearInterval(setTimer);

        //настройка игры
        newGame.gameFeild = game.gameFeild;
        newGame.time = game.time;

        //перерисовка игрового поля
        draw.changeTimer(newGame.time);
        draw.showSolution(game.gameFeild.matrix);

        let markedBoxes = draw.boxList.filter((box, index) => {
          if (game.markedBoxes.indexOf(index) > -1) return box;
        });

        markedBoxes.forEach((box) => {
          box.boxEl.classList.add("marked");
        });
      });
    });
    modal.append(gamesList);
  }

  return modal;
}
