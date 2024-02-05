import { createModal } from "./modal.js";

export function createModalResults() {
  const modal = createModal();
  modal.classList.add("modal_win");

  //отображаем рекорды
  const title = document.createElement("h2");
  title.classList.add("modal__h2");
  title.innerHTML = "Your latest results:";

  const records = document.createElement("ul");
  records.classList.add("modal__records");

  let lastWins = JSON.parse(localStorage.getItem("lastWin"));

  if (lastWins) {
    //сортируем по времени
    lastWins.sort((a, b) => {
      return +a.time - +b.time;
    });

    lastWins.forEach((win) => {
      const li = document.createElement("li");
      li.classList.add("modal__record");
      //отображаем время
      let sec = win.time % 60 > 9 ? win.time % 60 : "0" + (win.time % 60);
      let min =
        Math.floor(win.time / 60) > 9
          ? Math.floor(win.time / 60)
          : "0" + Math.floor(win.time / 60);

      li.innerHTML = `${min}:${sec} - ${win.level} - ${win.task}`;
      records.append(li);
    });
  } else {
    const li = document.createElement("li");
    li.classList.add("modal__record");
    li.innerHTML = `Sorry, you haven't won this game yet`;
    records.append(li);
  }

  modal.append(title);
  modal.append(records);

  return modal;
}
