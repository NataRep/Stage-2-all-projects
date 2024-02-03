import { createButton } from "../../components/button/button.js";
import { newGame } from "../../js/start-game.js";
import { draw } from "../../js/start-game.js";
import { setTimer } from "../../js/start-game.js";
import { audio } from "../../components/audio/audio.js";

//Создаем кнопки и вешаем оброаботчики
export const buttonReset = createButton(["button", "button_reset"], "Reset");
buttonReset.addEventListener("click", () => {
  newGame.reset();
  draw.reset();
  clearInterval(setTimer);
  newGame.stopTimer = true;
});

export const buttonSave = createButton(["button", "button_save"], "Save");
buttonSave.addEventListener("click", () => {
  newGame.save();
  audio.save.play();
});

export const buttonSolution = createButton(
  ["button", "button_solution"],
  "Solution"
);
buttonSolution.addEventListener("click", () => {
  //отображаем решение на поле
  draw.showSolution(newGame.matrix);

  //делаем не активными кнопки для этой игры
  buttonsTools.forEach((button) => (button.disabled = true));

  //отключаю возможность кликать по полю
  draw.stopGame();

  //останавливаем таймер
  clearInterval(setTimer);
  newGame.stopTimer = true;
});

export const buttonsTools = [buttonReset, buttonSave, buttonSolution];

export function createMainSection() {
  const mainSection = document.createElement("main");
  mainSection.classList.add("main");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main__container");

  const rowButtons = document.createElement("div");
  rowButtons.classList.add("main__row-buttons");

  rowButtons.append(buttonReset);
  rowButtons.append(buttonSave);
  rowButtons.append(buttonSolution);

  mainContainer.append(rowButtons);

  mainSection.append(mainContainer);

  return mainSection;
}
