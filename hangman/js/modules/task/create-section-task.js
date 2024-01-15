import { questionElement } from "../../utils/global-variables.js";
import { game } from "../../utils/global-variables.js";
import { arrayLetterFields } from "../../utils/global-variables.js";

export function createSectionTask() {
  const section = document.createElement("section");
  section.classList.add("task");

  //создаем блок для слова
  const wordField = document.createElement("ul");
  wordField.classList.add("task__word");

  //заполняем блок слова контейнерами для букв
  let array = game.task.word.split("");
  array.map((letter) => {
    let li = document.createElement("li");
    li.classList.add("task__letter");
    arrayLetterFields.push(li);
    wordField.append(li);
  });

  //создаем блок с вопросом
  const hint = document.createElement("div");
  hint.classList.add("task__hint", "hint");

  const hintTitle = document.createElement("div");
  hintTitle.classList.add("hint__title");
  hintTitle.innerHTML = "Hint:";

  section.append(wordField);
  section.append(hint);
  hint.append(hintTitle);
  hint.append(questionElement);

  return section;
}
