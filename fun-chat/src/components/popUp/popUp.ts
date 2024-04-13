import './popUp.scss';

export default class PopUp {
  element: HTMLElement;

  static create(classList: string[], h1: string, text: string) {
    const popUp = document.createElement('div');
    popUp.className = 'popUp';

    classList.forEach((item) => popUp.classList.add(item));

    const close = document.createElement('div');
    close.className = 'popUp__close';
    close.innerHTML = '+';

    const popUpTitle = document.createElement('h1');
    popUpTitle.className = 'popUp__h1';
    popUpTitle.innerHTML = h1;

    const popUpText = document.createElement('p');
    popUpText.className = 'popUp__p';
    popUpText.innerHTML = text;

    popUp.append(close);
    popUp.append(popUpTitle);
    popUp.append(popUpText);
    document.body.append(popUp);

    function removePopUp(event: Event) {
      const target = event.target as HTMLElement;
      if (!target.closest('.popUp') || event.target === close) {
        popUp.remove();
        document.body.removeEventListener('click', removePopUp);
      }
    }
    document.body.addEventListener('click', removePopUp);
  }
}
