import App from '../../app/app';
import { Header } from '../../components/header/header';
import Page from '../page';
import Footer from '../../components/footer/footer';

export default class ChatPage extends Page {
  constructor(app: App) {
    super();

    const header = Header.create(app) as HTMLElement;
    const main = document.createElement('main');
    const footer = Footer.create();
    this.mainContent.append(header);
    this.mainContent.append(main);
    this.mainContent.append(footer);
  }
}
