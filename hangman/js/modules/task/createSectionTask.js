import { taskLettersArray } from "../../../js/utils/globalVariables.js";
import { questionElement } from "../../../js/utils/globalVariables.js";
import { arrayLetterFields } from "../../../js/utils/globalVariables.js";

export function createSectionTask() {
  const section = document.createElement("section");
  section.classList.add("task");

  //создаем блок для слова
  const wordField = document.createElement("ul");
  wordField.classList.add("task__word");

  //заполняем блок слова контейнерами для букв
  taskLettersArray.map((li) => {
    arrayLetterFields.push(li);
    wordField.append(li);
    li.classList.add("task__letter");
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
