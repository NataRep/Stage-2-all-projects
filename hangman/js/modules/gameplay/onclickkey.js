import { checkLetter } from "./check-letter.js";

export function onClickKey(event) {
  //отмечаем кнопку как использованную
  const key = event.target;
  //ищем совпадение буквы в секретном слове
  const letter = event.target.innerHTML;
  checkLetter(letter);
}
