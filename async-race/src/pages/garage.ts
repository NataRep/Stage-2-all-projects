import App from '../app/app';
import { State } from '../app/state';
import Page from './page';
//import Button from '../components/button/button';

class GaragePageView extends Page {
  constructor(state: State, app: App) {
    super(app);

    const title = document.createElement('h1');
    title.textContent = 'Добро пожаловать на главную страницу';
    this.mainContent.appendChild(title);

    const description = document.createElement('p');
    description.textContent = 'Это пример минимального контента на главной странице';
    this.mainContent.appendChild(description);
  }
}

export default GaragePageView;
