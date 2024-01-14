import { createModal } from "../../../js/modules/modal/create-modal.js";
import { game } from "../../../js/utils/globalVariables.js";
import { body } from "../../../js/utils/globalVariables.js";
import { onKeyDown } from "../../../js/modules/gameplay/onkeydown.js";

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
