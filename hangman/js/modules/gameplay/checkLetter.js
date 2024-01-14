import { arrayLetterFields } from "../../../js/utils/globalVariables.js";
import { arrayKeyboardButtons } from "../../../js/utils/globalVariables.js";
import { game } from "../../../js/utils/globalVariables.js";
import { gameOver } from "../../../js/modules/gameplay/gameOver.js";
import { changeCounter } from "../../../js/modules/gameplay/changeCounter.js";

export function checkLetter(letter) {
  let result = false;

  //проверяем была ли ранее нажата эта буква (важная проверка, чтобы не дублировать использование букв на клавиатуре)

  if (!game.usedLetter.includes(letter)) {
    //запоминаем использованную букву
    game.usedLetter.push(letter);

    //добавлять класс для кнопок виртуальной клавиатуры нужно здесь, чтобы отмечать те кнопки, которые были использованы на реальной клавиатуре
    arrayKeyboardButtons.forEach((key) => {
      if (key.innerHTML === letter) {
        key.classList.add("disable");
      }
    });

    //проверяем правильно ли угалад игрок
    for (let i = 0; i < game.task.word.length; i++) {
      if (game.task.word[i] === letter) {
        console.log("верно");
        console.log(game.task.word.length);
        console.log(game.task.word);
        console.log(arrayLetterFields[i]);
        //если найдено совпадение, то показываем букву в слове
        arrayLetterFields[i].classList.add("open");
        arrayLetterFields[i].innerHTML = letter;
        result = true;
        //считаем верные ответы
        game.countCorrectGuesses++;
      }
    }
    if (result) {
      //проверяем угадано ли слово целиком
      if (game.countCorrectGuesses === game.task.word.length) {
        //выигрыш
        gameOver(true);
      }
    }
    if (!result) {
      //совпадения с буквой слова нет, увеличиваем счетчик ошибок
      game.countIncorrectGuesses++;

      //изменение состояния счетчика
      changeCounter(game.countIncorrectGuesses);

      //рисуем одну часть человечка
      const man = document.getElementById("svg-man");
      const manPath = man.querySelectorAll("path");
      manPath[game.countIncorrectGuesses - 1].style.opacity = "1";

      //TODO: можно добавить звук карандаша

      if (game.countIncorrectGuesses == 6) {
        //проигрыш
        gameOver(false);
      }
    }
  }
}
