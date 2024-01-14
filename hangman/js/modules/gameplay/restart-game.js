import { data } from "../../../js/utils/data.js";
import { game } from "../../../js/utils/globalVariables.js";
import { body } from "../../../js/utils/globalVariables.js";
import { questionElement } from "../../../js/utils/globalVariables.js";
import { counterElement } from "../../../js/utils/globalVariables.js";
import { arrayKeyboardButtons } from "../../../js/utils/globalVariables.js";
import { chooseTask } from "../../../js/modules/task/chooseTask.js";
import { fillBody } from "../../../js/utils/fill-body.js";
import { taskLettersArray } from "../../../js/utils/globalVariables.js";
import { arrayLetterFields } from "../../../js/utils/globalVariables.js";

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

  console.log(game.task);

  body.innerHTML = "";
  taskLettersArray.splice(0, taskLettersArray.length); //чтобы обновилось задание нужно обновить taskLettersArray = createLettersArray(game.task.word);
  arrayLetterFields.splice(0, arrayLetterFields.length);

  fillBody();
  console.log(arrayLetterFields);

  body.style.overflow = "auto";
  questionElement.innerHTML = game.task.question;

  //сбросить счетчик ошибок на 0
  counterElement.innerHTML = "0";

  console.log("новая игра");
}
