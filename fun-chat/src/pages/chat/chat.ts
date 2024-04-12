import App from '../../app/app';
import { Header } from '../../components/header/header';
import Page from '../page';

export default class ChatPage extends Page {
  constructor(app: App) {
    super();

    const header = Header.create(app) as HTMLElement;
    const demo = document.createElement('p');
    demo.innerHTML = 'Это тестовое наполнение страницы чата';
    this.mainContent.append(header);
    this.mainContent.append(demo);
  }
}
