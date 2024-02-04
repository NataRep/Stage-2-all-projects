import { createButton } from "../../components/button/button.js";
import { createModalChooseTask } from "../../components/modals/modal-choose.js";
import { createModalContinue } from "../../components/modals/modal-continue.js";
import { chooseTask } from "../../js/choose-task.js";
import { startGame } from "../../js/start-game.js";
import { audio } from "../../components/audio/audio.js";

export const buttonNewGame = createButton(
  ["button", "button_new-random"],
  "random"
);
buttonNewGame.addEventListener("click", () => {
  const newTask = chooseTask("random", "random");
  startGame(newTask);
});

export const buttonContinue = createButton(
  ["button", "button_continue"],
  "continue"
);

buttonContinue.addEventListener("click", () => {
  header.append(createModalContinue());
});

export let header;

export function createHeader() {
  header = document.createElement("header");
  header.classList.add("header");

  const container = document.createElement("div");
  container.classList.add("header__container");

  const logo = document.createElement("img");
  logo.src = "../nonograms/assets/images/logo.svg";
  logo.alt = "logotype";
  logo.classList.add("logo");

  //контейнер для кнопок начала игры
  const buttonRow = document.createElement("div");
  buttonRow.classList.add("header__buttons");

  const buttonChoose = createButton(["button", "button_choose"], "choose task");
  buttonChoose.addEventListener("click", () => {
    header.append(createModalChooseTask());
  });

  //контейнер для кнопок настройки звука и темы
  const buttonTools = document.createElement("div");
  buttonTools.classList.add("header__tools");

  const buttonTheme = createButton(
    ["button", "button_theme", "button_circle"],
    ""
  );
  buttonTheme.addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark-theme");
  });

  const buttonSound = createButton(
    ["button", "button_sound", "button_circle"],
    ""
  );
  buttonSound.addEventListener("click", () => {
    buttonSound.classList.toggle("off");
    if (buttonSound.classList.contains("off")) {
      for (let sound in audio) {
        audio[sound].volume = 0;
      }
    } else {
      for (let sound in audio) {
        audio[sound].volume = 1;
      }
    }
  });

  container.append(logo);
  buttonRow.append(buttonNewGame);
  buttonRow.append(buttonChoose);
  buttonRow.append(buttonContinue);
  container.append(buttonRow);
  buttonTools.append(buttonSound);
  buttonTools.append(buttonTheme);
  container.append(buttonTools);
  header.append(container);

  return header;
}
