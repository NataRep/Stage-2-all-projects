import { createModal } from "./modal.js";

export function createModalWin(timer) {
  const modal = createModal();
  modal.classList.add("modal_win");

  const title = document.createElement("h2");
  title.classList.add("modal__h2");
  title.innerHTML = "Great!";

  const time = document.createElement("div");
  time.classList.add("modal__time");
  /*let sec = timer % 60 > 10 ? timer % 60 : "0" + (timer % 60);
  let min =
    Math.floor(timer / 60) > 10
      ? Math.floor(timer / 60)
      : "0" + Math.floor(timer / 60);
    */
  time.innerHTML = `You have solved the nonogram in ${timer}&nbsp;seconds!`;

  const records = document.createElement("ul");
  records.classList.add("modal__records");

  modal.append(title);
  modal.append(time);
  modal.append(records);

  return modal;
}
