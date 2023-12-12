//DOM
const carousel = document.querySelector(".carousel");
const carouselWrapper = carousel.querySelector(".carousel__wrapper");
const carouselList = carousel.querySelector(".carousel__item-list");
const carouselItems = carousel.querySelectorAll(".carousel__item");
const progressBarLines = carousel.querySelectorAll(".progress-bar__line");
const buttonLeft = carousel.querySelector(".carousel__arrow_left");
const buttonRight = carousel.querySelector(".carousel__arrow_right");
const carouselProgressBarList = carousel.querySelectorAll(
  ".progress-bar__fill"
);

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
  addCurrentClass(indexCurrent);
}

function rotateRight() {
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
let touchStartX;
function stopRotateOnTab(event) {
  touchStartX = event.touches[0].clientX;
  stopRotate();
}
function rotateCaroselSwipe(event) {
  //получаем координаты свайпа
  let tochEndX = event.changedTouches[event.changedTouches.length - 1].pageX;
  let distance = Math.abs(touchStartX - tochEndX);
  let swipe = 20;

  //вращаем карусель по свайпу
  if (distance >= swipe) {
    //убираем паузу у анимации
    pausedAnimation(false);

    //меняем направление
    direction = touchStartX - tochEndX > 0 ? "right" : "left";
    if (direction === "left") {
      rotateLeft();
      timer = 0;
    }
    if (direction === "right") {
      rotateRight();
      timer = 0;
    }
  }
  //продолжаем вращение в нужную сторону
  rotateCarosel();
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
carouselWrapper.addEventListener("touchstart", stopRotateOnTab, false);
carouselWrapper.addEventListener("touchend", rotateCaroselSwipe, false);
window.addEventListener("resize", function () {
  containerWith = carouselWrapper.clientWidth;
  rotateCarosel();
  console.log("повернули");
});
