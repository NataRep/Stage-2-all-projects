export function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const container = document.createElement("div");
  container.classList.add("footer__container");

  const copy = document.createElement("div");
  copy.classList.add("footer__copy");
  copy.innerHTML = "2024 Nuttik(c)";

  container.append(copy);
  footer.append(container);
  return footer;
}
