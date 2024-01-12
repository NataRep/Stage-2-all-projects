import { body } from "./js/utils/globalVariables.js";
import { createIllustration } from "./js/modules/illustration/createIllustration.js";
import { createSectionTask } from "./js/modules/task/createSectionTask.js";
import { data } from "./js/utils/data.js";
import { chooseTask } from "./js/modules/task/chooseTask.js";
import { createCounterSection } from "./js/modules/counter/createCounterSection.js";
import { createKeyboardSection } from "./js/modules/keyboard/createKeyboardSection.js";

//глобальные переменные//

let countIncorrectGuesses;
let task;

//начало игры//
function startGame() {
  countIncorrectGuesses = 0;
  task = chooseTask(data);
}

function fillBody() {
  body.classList.add("page");

  const main = document.createElement("main");
  main.classList.add("main");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Hangman game";

  const content = document.createElement("div");
  content.classList.add("content", "main__content");

  //заполняем документ блоками
  const illustration = createIllustration();
  const taskSection = createSectionTask(task);
  const counterSection = createCounterSection();
  const keyboardSection = createKeyboardSection();

  body.append(h1);
  body.append(main);
  main.append(content);
  content.append(h1);
  content.append(illustration);
  content.append(taskSection);
  content.append(counterSection);
  content.append(keyboardSection);
}

startGame();
fillBody();
