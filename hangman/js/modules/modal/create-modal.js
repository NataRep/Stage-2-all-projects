import { restartGame } from "../../../js/modules/gameplay/restart-game.js";

export function createModal(massege, word) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal__container");

  const h2 = document.createElement("h2");
  h2.classList.add("modal__title");
  h2.innerHTML = "Game Over!";

  const result = document.createElement("div");
  result.classList.add("modal__massege");
  result.innerHTML = massege;

  const rowWord = document.createElement("div");
  rowWord.classList.add("modal__row-word");
  const secretWord = document.createElement("span");
  secretWord.classList.add("modal__word");
  secretWord.innerHTML = word;
  rowWord.append("Secret word: ");
  rowWord.append(secretWord);

  const button = document.createElement("button");
  button.classList.add("modal__button");
  button.innerHTML = "Play again";
  button.addEventListener("click", restartGame);

  modal.append(modalContainer);
  modalContainer.append(h2);
  modalContainer.append(result);
  modalContainer.append(rowWord);
  modalContainer.append(button);

  return modal;
}
