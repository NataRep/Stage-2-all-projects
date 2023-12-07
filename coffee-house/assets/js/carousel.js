//отмерять длительность показа карточки по таймеру с сетИнтервал. на ховере таймер останавливать
let timer = 0;
let direction = "right";
let speed = 6;
let indexCurrent = 1;
let interval;

let translateX = 0;
// ширины контейнера обертки
const containerWith = carouselWrapper.clientWidth;
// ширина списка всех эллементов каресели
const carouselWidth = carouselList.clientWidth;

function rotateLeft() {
  translateX =
    translateX == 0
      ? -(carouselWidth - containerWith)
      : translateX + containerWith + 160;
  carouselList.style.transform = `translateX(${translateX}px)`;
  direction = "left";
}

function rotateRight() {
  //сдвивгаем список в лево 160 - расстояние между карточками в стилях
  translateX =
    translateX - containerWith != -carouselWidth
      ? translateX + -(containerWith + 160)
      : 0;
  carouselList.style.transform = `translateX(${translateX}px)`;
  direction = "right";
}

function changeDirection(event) {
  if (this === buttonLeft) {
    rotateLeft();
    timer = 0;
    direction = "left";
  }
  if (this === buttonRight) {
    rotateRight();
    timer = 0;
    direction = "right";
  }
}

function rotateCarosel() {
  console.log("начало отсчета");
  interval = setInterval(function () {
    timer += 1;
    if (timer === speed) {
      if (direction === "right") {
        rotateRight();
        timer = 0;
      } else if (direction === "left") {
        rotateLeft();
        timer = 0;
      }
    }
    console.log(timer);
  }, 1000);
}

function stopRotate() {
  clearInterval(interval);
  console.log("конец отсчета");
}

rotateCarosel();

buttonLeft.addEventListener("click", changeDirection);
buttonRight.addEventListener("click", changeDirection);

carouselWrapper.addEventListener("mouseenter", stopRotate, false);
carouselWrapper.addEventListener("mouseleave", rotateCarosel, false);
carouselWrapper.addEventListener("touchstart", stopRotate, false);
carouselWrapper.addEventListener("touchend", rotateCarosel, false);
