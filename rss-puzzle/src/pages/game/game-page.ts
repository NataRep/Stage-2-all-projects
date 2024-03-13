import './game-page.scss';
import Page from '../page';
import Button from '../../components/button/button';
import App from '../../app/app';

class GamePage extends Page {
  constructor(app: App) {
    super('page_game', app);
  }

  private createBasicTemplate() {
    const pageContainer: HTMLDivElement = document.createElement('div');
    pageContainer.className = 'page__container';
    this.content = pageContainer;

    const header: HTMLElement = document.createElement('header');
    const main: HTMLElement = document.createElement('main');
    const logotype: HTMLElement = document.createElement('div');
    const button: HTMLButtonElement = Button.create(
      'Logout',
      ['button_logout', 'button_small'],
      this.app.logout.bind(this.app)
    );
    logotype.className = 'logotype';
    header.append(button);
    this.content.append(logotype);
    this.content.append(header);
    this.content.append(main);
  }

  public drawGamePage() {
    this.changeBodyClass();
    this.createBasicTemplate();
    this.drawPages(this.content);

    const footer: HTMLElement = document.createElement('footer');
    document.body.append(footer);
  }
}

export default GamePage;
