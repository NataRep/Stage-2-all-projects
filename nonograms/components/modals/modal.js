export function createModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const close = document.createElement("div");
  close.classList.add("modal__close");
  close.innerHTML = "+";
  modal.append(close);

  //закрываем модалку по клику на крестик
  modal.addEventListener("click", closeModal);

  function closeModal(event) {
    if (event.target === close || event.target != modal) {
      modal.remove();
    }
    event.currentTarget.removeEventListener("click", closeModal);
  }
  //делаем возможность закрывать модалки по клику вне их,
  //откладываем обработчик, чтобы не убирал модалку сразу по клику на кнопку вызова модалки
  setTimeout(() => document.body.addEventListener("click", closeModal), 20);

  return modal;
}
