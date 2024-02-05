export function createModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const close = document.createElement("div");
  close.classList.add("modal__close");
  close.innerHTML = "+";
  modal.append(close);

  //закрываем модалку
  function closeModal(event) {
    if (event.target === close) {
      modal.remove();
      event.currentTarget.removeEventListener("click", closeModal);
    } else if (!event.target.closest(".modal")) {
      modal.remove();
      event.currentTarget.removeEventListener("click", closeModal);
    }
  }
  //делаем возможность закрывать модалки по клику вне их,
  //откладываем обработчик, чтобы не убирал модалку сразу по клику на кнопку вызова модалки
  setTimeout(() => document.body.addEventListener("click", closeModal), 20);

  return modal;
}
