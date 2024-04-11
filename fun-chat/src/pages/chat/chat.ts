import App from '../../app/app';
import Page from '../page';

export default class ChatPage extends Page {
  constructor(app: App) {
    super();
    const demo = document.createElement('p');
    demo.innerHTML = 'Это тестовое наполнение страницы чата';
    this.mainContent.append(demo);
  }
}
