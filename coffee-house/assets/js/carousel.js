//отмерять длительность показа карточки по таймеру с сетИнтервал. на ховере таймер останавливать
let timer = 0;
let direction = "right";
let speed = 6;
let indexCurrent = 0;
let interval;

let translateX = 0;
// ширины контейнера обертки
const containerWith = carouselWrapper.clientWidth;
// ширина списка всех эллементов каресели
const carouselWidth = carouselList.clientWidth;

function rotateLeft() {
  removeCurrentClass(indexCurrent);
  if (translateX == 0) {
    translateX = -(carouselWidth - containerWith);
    indexCurrent = 2;
  } else {
    translateX = translateX + containerWith + 160;
    indexCurrent -= 1;
  }
  carouselList.style.transform = `translateX(${translateX}px)`;
  direction = "left";
  console.log(indexCurrent);
  addCurrentClass(indexCurrent);
}

function rotateRight() {
  //сдвивгаем список в лево 160 - расстояние между карточками в стилях
  removeCurrentClass(indexCurrent);
  if (translateX - containerWith != -carouselWidth) {
    translateX = translateX + -(containerWith + 160);
    indexCurrent += 1;
  } else {
    translateX = 0;
    indexCurrent = 0;
  }
  carouselList.style.transform = `translateX(${translateX}px)`;
  direction = "right";
  console.log(indexCurrent);
  addCurrentClass(indexCurrent);
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
  }, 1000);
  pausedAnimation(false);
}

function stopRotate() {
  clearInterval(interval);
  pausedAnimation(true);
}

function addCurrentClass(current) {
  progressBarLines[current].classList.remove("prev");
  progressBarLines[current].classList.add("current");
}
function removeCurrentClass(prev) {
  progressBarLines[prev].classList.remove("current");
  progressBarLines[prev].classList.add("prev");
}
function pausedAnimation(isOnPause) {
  if (isOnPause) {
    let activeLine = carousel.querySelector(".current .progress-bar__fill");
    activeLine.style.animationPlayState = "paused";
  } else {
    let activeLine = carousel.querySelector(".current .progress-bar__fill");
    activeLine.style.animationPlayState = "running";
  }
}

rotateCarosel();

buttonLeft.addEventListener("click", changeDirection);
buttonRight.addEventListener("click", changeDirection);

carouselWrapper.addEventListener("mouseenter", stopRotate, false);
carouselWrapper.addEventListener("mouseleave", rotateCarosel, false);
carouselWrapper.addEventListener("touchstart", stopRotate, false);
carouselWrapper.addEventListener("touchend", rotateCarosel, false);
