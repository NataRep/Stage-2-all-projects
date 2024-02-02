import { createButton } from "../../components/button/button.js";
import { createModalChooseTask } from "../../components/modals/modal-choose.js";
import { chooseTask } from "../../js/choose-task.js";
import { startGame } from "../../js/start-game.js";

export function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const container = document.createElement("div");
  container.classList.add("header__container");

  const logo = document.createElement("img");
  logo.src = "/nonograms/assets/images/logo.svg";
  logo.alt = "logotype";
  logo.classList.add("logo");

  const buttonRow = document.createElement("div");
  buttonRow.classList.add("header__buttons");

  const buttonNewGame = createButton(["button", "button_new-random"], "random");

  buttonNewGame.addEventListener("click", () => {
    const newTask = chooseTask("random");
    startGame(newTask);
  });

  const buttonTheme = createButton(["button", "button_theme"], "");

  const buttonChoose = createButton(["button", "button_choose"], "choose task");
  buttonChoose.addEventListener("click", () => {
    header.append(createModalChooseTask());
  });

  const buttonContinue = createButton(
    ["button", "button_continue"],
    "continue"
  );

  container.append(logo);
  buttonRow.append(buttonNewGame);
  buttonRow.append(buttonChoose);
  buttonRow.append(buttonContinue);
  container.append(buttonRow);
  header.append(container);

  return header;
}
