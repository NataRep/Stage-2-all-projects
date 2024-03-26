import App from '../../app/app';
import Button from '../button/button';

class Navigation {
  nav: HTMLElement;

  constructor(app: App) {
    this.nav = document.createElement('nav');

    const buttonToGarage = Button.create('To garage', ['nav__button'], () => {
      app.pageGarage.clearContent();
      app.pageGarage.render();
    });

    const buttonToWinner = Button.create('To winners', ['nav__button'], () => {
      app.pageWinners.clearContent();
      app.pageWinners.render();
    });

    this.nav.append(buttonToGarage);
    this.nav.append(buttonToWinner);
  }

  render() {
    return this.nav;
  }
}
export default Navigation;
