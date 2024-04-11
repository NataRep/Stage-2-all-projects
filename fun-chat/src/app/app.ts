import WebSocketAPI from '../api/api';
import LoginPage from '../pages/login/login-page';
import AppHtmlEllements from '../utils/app-html-ellements';
import { RequestOrResponse } from '../utils/interfaces.ts/interfaces';
import User from './user';

export default class App {
  webSocket: WebSocket;
  appHtmlEllements: AppHtmlEllements;
  user: User;

  constructor() {
    this.appHtmlEllements = new AppHtmlEllements();
  }

  public async start() {
    const loginPage = new LoginPage(this);
    loginPage.render();
    const url = 'ws://localhost:4000';
    this.webSocket = new WebSocket(url);

    this.webSocket.onopen = (event) => {
      console.log('Соединение установлено');
      WebSocketAPI.sendUserAuthentication(this.webSocket, 'Логин', 'Пароль');
      WebSocketAPI.sendUserLogout(this.webSocket, 'Логин', 'Пароль');
    };

    const id = crypto.randomUUID();

    const requestAuthenticatedUsers: RequestOrResponse<null> = {
      id: id,
      type: 'USER_ACTIVE',
      payload: null,
    };

    this.webSocket.onmessage = (event) => {
      console.log(event.data);
    };
  }

  public login(login: string, password: string) {
    console.log('Логин');
  }
}
