import './popUp.scss';

export default class PopUp {
  element: HTMLElement;

  static create(classList: string[], h1: string, text: string) {
    const popUp = document.createElement('div');
    popUp.className = 'popUp';

    classList.forEach((item) => popUp.classList.add(item));
    const popUpTitle = document.createElement('h1');
    popUpTitle.className = 'popUp__h1';
    popUpTitle.innerHTML = h1;

    const popUpText = document.createElement('p');
    popUpText.className = 'popUp__p';
    popUpText.innerHTML = text;

    popUp.append(popUpTitle);
    popUp.append(popUpText);
    document.body.append(popUp);
    document.body.addEventListener('click', (event) => {
      if (event.target != popUp) {
        popUp.remove();
      }
    });
  }
}
