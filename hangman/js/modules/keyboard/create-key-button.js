import { onClickKey } from "../gameplay/onclickkey.js";

export function createKeyButton(letter) {
  const button = document.createElement("div");
  button.classList.add("keyboard__key");
  button.dataset.letter = letter;
  button.innerHTML = letter;

  button.addEventListener("click", onClickKey);
  return button;
}
