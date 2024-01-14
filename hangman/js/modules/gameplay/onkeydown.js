import { checkLetter } from "../../../js/modules/gameplay/checkLetter.js";

export function onKeyDown(event) {
  const key = event.code;
  if (key.indexOf("Key") === 0) {
    const letter = key.slice(3).toLowerCase();
    checkLetter(letter);
  }
}
