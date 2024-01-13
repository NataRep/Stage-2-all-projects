import { body } from "./js/utils/globalVariables.js";
import { task } from "./js/utils/globalVariables.js";
import { createSectionIllustration } from "./js/modules/illustration/createSectionIllustration.js";
import { createSectionTask } from "./js/modules/task/createSectionTask.js";

import { createCounterSection } from "./js/modules/counter/createCounterSection.js";
import { createKeyboardSection } from "./js/modules/keyboard/createKeyboardSection.js";

//глобальные переменные//

let countIncorrectGuesses;

//начало игры//
function startGame() {}

function fillBody() {
  body.classList.add("page");

  const main = document.createElement("main");
  main.classList.add("main");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Hangman game";

  const content = document.createElement("div");
  content.classList.add("content", "main__content");

  //заполняем документ блоками
  const illustration = createSectionIllustration();
  const taskSection = createSectionTask(task);
  const counterSection = createCounterSection();
  const keyboardSection = createKeyboardSection();

  body.append(main);

  main.append(h1);
  main.append(content);
  content.append(illustration);
  content.append(taskSection);
  content.append(counterSection);
  content.append(keyboardSection);
}

startGame();
fillBody();
