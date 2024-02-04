export function createModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const close = document.createElement("div");
  close.classList.add("modal__close");
  close.innerHTML = "+";
  modal.append(close);

  //закрываем модалку по клику на крестик
  modal.addEventListener("click", () => {
    if (event.target === close) {
      modal.remove();
    }
  });

  return modal;
}
