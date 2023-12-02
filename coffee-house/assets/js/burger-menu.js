function openMenu(event) {
  if (event.target.closest(".burger-menu__ico") || event.target.closest("a")) {
    burgerMenu.classList.toggle("active");
    document.querySelector("body").classList.toggle("scroll-none");
  }
}
burgerMenu.addEventListener("click", openMenu);
