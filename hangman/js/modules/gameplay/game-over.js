import { createModal } from "../modal/create-modal.js";
import { game } from "../../utils/global-variables.js";
import { body } from "../../utils/global-variables.js";
import { onKeyDown } from "./onkeydown.js";

export function gameOver(result) {
  let massege = result === true ? "You win!" : "You loss!";

  //отключаем возможность вводить буквы с клавиатуры
  document.removeEventListener("keydown", onKeyDown);

  //создаем модалку с результатами
  const modal = createModal(massege, game.task.word);
  setTimeout(() => {
    body.append(modal);
    body.style.overflow = "hidden";
  }, 300);
}
