import { word } from "../../../js/utils/globalVariables.js";
import { arrayLetterFields } from "../../../js/utils/globalVariables.js";
import { counterElement } from "../../../js/utils/globalVariables.js";
import { game } from "../../../js/utils/globalVariables.js";

export function checkLetter(letter) {
  let result = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
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
    if (game.countCorrectGuesses === word.length) {
      //выигрыш
      //gameOver(true);
      console.log("win!!!");
    }
  }
  if (!result) {
    //совпадения с буквой слова нет, увеличиваем счетчик ошибок
    game.countIncorrectGuesses++;

    //рисуем одну часть человечка
    const man = document.getElementById("svg-man");
    const manPath = man.querySelectorAll("path");
    console.log(manPath);
    console.log(game.countIncorrectGuesses);
    manPath[game.countIncorrectGuesses - 1].style.opacity = "1";

    //TODO: можно добавить звук карандаша

    if (game.countIncorrectGuesses == 6) {
      //проигрыш
      //gameOver(false);
      console.log("loss!!!");
    }
  }
}
