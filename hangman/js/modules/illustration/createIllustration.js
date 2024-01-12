function createIllustration() {
  const section = document.createElement("section");
  section.classList.add("image");

  section.insertAdjacentHTML =
    '<object type="image/svg+xml" data="assets/images/man.svg"></object>';
}
