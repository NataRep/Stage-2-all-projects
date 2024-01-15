import { body } from "./global-variables.js";
import { game } from "./global-variables.js";
import { createSectionIllustration } from "../modules/illustration/create-section-illustration.js";
import { createSectionTask } from "../modules/task/create-section-task.js";
import { createLettersArray } from "../modules/task/create-letters-array.js";

import { createCounterSection } from "../modules/counter/create-counter-section.js";
import { createKeyboardSection } from "../modules/keyboard/create-keyboard-section.js";

export function fillBody() {
  console.log("The secret word: " + game.task.word);

  createLettersArray(game.task.word);

  body.classList.add("page");

  const main = document.createElement("main");
  main.classList.add("main");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Hangman game";

  const content = document.createElement("div");
  content.classList.add("content", "main__content");

  //заполняем документ блоками
  const illustration = createSectionIllustration();
  const taskSection = createSectionTask(game.task);
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
