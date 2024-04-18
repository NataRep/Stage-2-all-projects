import App from '../../app/app';
import { Header } from '../../components/header/header';
import Page from '../page';
import Footer from '../../components/footer/footer';
import Chat from '../../components/chat/chat';
import UsersList from '../../components/chat/users-list/users-list';
import WebSocketAPI from '../../api/api';
import { ResponseServer, UserResponse } from '../../utils/interfaces.ts/interfaces';

export default class ChatPage extends Page {
  constructor(app: App) {
    super();
    app.chat = new Chat(app);
    app.chat.userList = new UsersList();
    const header = Header.create(app) as HTMLElement;
    const main = document.createElement('main');
    const chatEl = app.chat.create();
    main.append(chatEl);
    const footer = Footer.create();
    this.mainContent.append(header);
    this.mainContent.append(main);
    this.mainContent.append(footer);
    this.createList(app);
  }

  private async getUsersFromServer(app: App): Promise<UserResponse[]> {
    const usersLoginData = (await WebSocketAPI.getAllAuthenticatedUsers(app.webSocket)) as ResponseServer;
    const usesUnloginData = (await WebSocketAPI.getAllUnauthorizedUsers(app.webSocket)) as ResponseServer;
    return usersLoginData.payload.users.concat(usesUnloginData.payload.users);
  }

  private async createList(app: App) {
    const usersArray = await this.getUsersFromServer(app);
    usersArray.forEach((user) => {
      if (user.login != app.user.login) {
        app.chat.userList.createUser(app, user.login, user.isLogined);
      }
    });
  }

  private clearList(app: App) {
    app.chat.userList.usersArray = [];
    app.chat.userList.list.innerHTML = '';
  }
}
