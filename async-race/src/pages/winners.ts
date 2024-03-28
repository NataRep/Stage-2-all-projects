import App from '../app/app';
import { State } from '../app/state';
import Page from './page';

class WinnersPageView extends Page {
  constructor(app: App) {
    super(app);

    const title = document.createElement('h1');
    title.textContent = 'Добро пожаловать на страницу Победители';
    this.mainContent.appendChild(title);

    const description = document.createElement('p');
    description.textContent = 'Это пример минимального контента';
    this.mainContent.appendChild(description);
  }
}

export default WinnersPageView;
