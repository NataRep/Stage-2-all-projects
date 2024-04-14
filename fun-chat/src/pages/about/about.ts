import { Header } from '../../components/header/header';
import Page from '../page';
import App from '../../app/app';

export default class AboutPage extends Page {
  constructor(app: App) {
    super();

    const header = Header.create(app) as HTMLElement;
    const demo = document.createElement('p');
    demo.innerHTML = 'Тут будет описание проекта';
    this.mainContent.append(header);
    this.mainContent.append(demo);
  }
}
