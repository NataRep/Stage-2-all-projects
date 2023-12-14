function openMenu(event) {
  if (
    event.target.closest(".burger-menu__ico") ||
    event.target.closest("a") ||
    event.target.closest(".burger-menu__header-menu-link")
  ) {
    burgerMenu.classList.toggle("active");
    document.querySelector("body").classList.toggle("scroll-none");
  }
}
burgerMenu.addEventListener("click", openMenu);
