import Button from '../button/button';
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

  static createConnection(handler: () => void) {
    const popUp = document.createElement('div');
    popUp.className = 'popUp popUp_error-connection';

    const bg = document.createElement('div');
    bg.className = 'popUp__bg';

    const popUpTitle = document.createElement('h1');
    popUpTitle.className = 'popUp__h1';
    popUpTitle.innerHTML = 'Connection Error!';

    const popUpText = document.createElement('p');
    popUpText.className = 'popUp__p';
    popUpText.innerHTML = 'Failed to connect to the server. <br> Try reconnecting?';

    const button: HTMLButtonElement = Button.create('Yes', ['reconnecting'], handler);

    popUp.append(popUpTitle);
    popUp.append(popUpText);
    popUp.append(button);
    document.body.append(popUp);
    popUp.before(bg);

    function removePopUp(event: Event) {
      if (event.target === button) {
        popUp.remove();
        bg.remove();
        document.body.removeEventListener('click', removePopUp);
      }
    }
    document.body.addEventListener('click', removePopUp);
  }
}
