export class Draw {
  constructor(game) {
    this.gameObj = game;
    this.boxList = []; //массив дивов клеток поля для очистки и изменения
  }
  drawPlayFeildEl() {
    const gameEl = document.createElement("div");
    gameEl.classList.add("game");

    //название таска и секундомер
    const wrapperInfoLine = document.createElement("div");
    wrapperInfoLine.classList.add("game__info-row");

    const nameEl = document.createElement("div");
    nameEl.classList.add("game__name");
    nameEl.innerHTML = `"${this.gameObj.taskName}"`;
    //запоминаем эллемент в объекте
    this.nameTaskEl = nameEl;

    const timerEl = document.createElement("div");
    timerEl.classList.add("game__timer");
    timerEl.innerHTML = "00:00";
    //запоминаем эллемент в объекте
    this.timerEl = timerEl;

    wrapperInfoLine.append(nameEl);
    wrapperInfoLine.append(timerEl);

    //Игровое поле

    const playField = document.createElement("div");
    playField.classList.add("game__playfield");

    //функция заполнения ячеек подсказок
    function drawCeilHint(array, place) {
      array.forEach((ceil) => {
        const hint = document.createElement("div");
        hint.classList.add("game__hint");

        ceil.forEach((num) => {
          let numHint = document.createElement("p");
          numHint.classList.add("game__num");
          numHint.innerHTML = num;
          hint.append(numHint);
        });
        place.append(hint);
      });
    }

    //верхние подсказки
    const hintTop = document.createElement("div");
    hintTop.classList.add("game__hints", "game__hints_top");

    //заполняем строку подсказками из объекта игры
    drawCeilHint(this.gameObj.gameFeild.hintCeils, hintTop);
    //боковые подсказки
    const hintLeft = document.createElement("div");
    hintLeft.classList.add("game__hints", "game__hints_left");

    //заполняем строку подсказками из объекта игры
    drawCeilHint(this.gameObj.gameFeild.hintRows, hintLeft);

    //игровое поле
    const picture = document.createElement("div");
    picture.classList.add("game__picture");

    //заполняем поле строками с клетками
    this.gameObj.gameFeild.matrix.forEach((row) => {
      const rowPlayField = document.createElement("div");
      rowPlayField.classList.add("game__row");

      for (let i = 0; i < row.length; i++) {
        const box = document.createElement("div");
        box.classList.add("game__box");
        rowPlayField.append(box);

        this.boxList.push(box);
      }
      picture.append(rowPlayField);
    });

    playField.append(hintTop);
    playField.append(hintLeft);
    playField.append(picture);

    gameEl.append(wrapperInfoLine);
    gameEl.append(playField);

    return gameEl;
  }
}
