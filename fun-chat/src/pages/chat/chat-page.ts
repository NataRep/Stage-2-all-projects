import App from '../../app/app';
import { Header } from '../../components/header/header';
import Page from '../page';
import Footer from '../../components/footer/footer';
import Chat from '../../components/chat/chat';
import UsersList from '../../components/chat/users-list/users-list';
import WebSocketAPI from '../../api/api';

export default class ChatPage extends Page {
  constructor(app: App) {
    super();

    this.sendRequests(app);

    app.chat = new Chat();
    app.chat.userList = new UsersList();
    const header = Header.create(app) as HTMLElement;
    const main = document.createElement('main');
    const chatEl = app.chat.createEl();
    const userList = app.chat.userList.createList();
    chatEl.append(userList);
    main.append(chatEl);
    const footer = Footer.create();
    this.mainContent.append(header);
    this.mainContent.append(main);
    this.mainContent.append(footer);
  }

  private async sendRequests(app: App) {
    WebSocketAPI.getAllAuthenticatedUsers(app, app.webSocket);
    WebSocketAPI.getAllUnauthorizedUsers(app, app.webSocket);
  }
}
