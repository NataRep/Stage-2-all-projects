const burgerMenu = document.querySelector(".burger-menu");
const ico = document.querySelector(".burger-menu__ico");
const menu = document.getElementById("burger-nav");
const closeButton = burgerMenu.querySelector(".close");

function openMenu(event) {
  if (event.target.closest(".burger-menu__ico") || event.target.closest("a")) {
    burgerMenu.classList.toggle("active");
    document.querySelector("body").classList.toggle("scroll-none");
  }
}
burgerMenu.addEventListener("click", openMenu);
