import { data } from "../../../js/utils/data.js";
import { game } from "../../utils/global-variables.js";
import { body } from "../../utils/global-variables.js";
import { questionElement } from "../../utils/global-variables.js";
import { counterElement } from "../../utils/global-variables.js";
import { arrayKeyboardButtons } from "../../utils/global-variables.js";
import { chooseTask } from "../task/choose-task.js";
import { fillBody } from "../../../js/utils/fill-body.js";
import { taskLettersArray } from "../../utils/global-variables.js";
import { arrayLetterFields } from "../../utils/global-variables.js";
import { onKeyDown } from "../../../js/modules/gameplay/onkeydown.js";

export function restartGame(event) {
  //удалить модальное окно
  let modal = event.target.closest(".modal");
  modal.remove();

  // сделать все кпопки клавиатуры активными
  arrayKeyboardButtons.forEach((key) => {
    if (key.classList.contains("disable")) {
      key.classList.remove("disable");
    }
  });

  arrayLetterFields.forEach((el) => el.classList.remove("open"));

  //сбросить информацию о ходах
  game.countIncorrectGuesses = 0;
  game.countCorrectGuesses = 0;
  game.usedLetter = [];

  //заново выбрать задачу и обновить вопрос и игровое поле
  game.task = chooseTask(data);

  body.innerHTML = "";
  //чтобы обновилось задание нужно обновить чтобы масивы с полями для букв были пустыми;
  taskLettersArray.splice(0, taskLettersArray.length);
  arrayLetterFields.splice(0, arrayLetterFields.length);

  fillBody();

  body.style.overflow = "auto";
  questionElement.innerHTML = game.task.question;

  //сбросить счетчик ошибок на 0
  counterElement.innerHTML = "0";
  document.addEventListener("keydown", onKeyDown);
}
