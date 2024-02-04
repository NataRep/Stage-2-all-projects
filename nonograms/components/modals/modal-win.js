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

  //отображаем рекорды
  const subTitle = document.createElement("h3");
  subTitle.classList.add("modal__h3");
  subTitle.innerHTML = "Your latest results:";

  const records = document.createElement("ul");
  records.classList.add("modal__records");
  let lastWins = JSON.parse(localStorage.getItem("lastWin"));

  const currentWin = lastWins[lastWins.length - 1];

  //сортируем по времени
  lastWins.sort((a, b) => {
    return +a.time - +b.time;
  });

  lastWins.forEach((win) => {
    const li = document.createElement("li");
    li.classList.add("modal__record");

    if (win === currentWin) {
      li.classList.add("modal__record_current");
    }

    //отображаем время
    let sec = win.time % 60 > 9 ? win.time % 60 : "0" + (win.time % 60);
    let min =
      Math.floor(win.time / 60) > 9
        ? Math.floor(win.time / 60)
        : "0" + Math.floor(win.time / 60);

    li.innerHTML = `${min}:${sec} - ${win.level} - ${win.task}`;
    records.append(li);
  });

  modal.append(title);
  modal.append(time);
  modal.append(subTitle);
  modal.append(records);

  return modal;
}
