import WebSocketAPI from '../api/api';
import ErrorsFromResponses from '../api/errorsApi';
import Router from '../components/router.ts/router';
import ChatPage from '../pages/chat/chat';
import LoginPage from '../pages/login/login-page';
import Page from '../pages/page';
import AppHtmlEllements from '../utils/app-html-ellements';
import { typeMessagesFromCerver } from '../utils/enums/messages-from-server';
import { ErrorResponse, RequestOrResponse } from '../utils/interfaces.ts/interfaces';
import User from './user';

export default class App {
  webSocket: WebSocket;
  appHtmlEllements: AppHtmlEllements;
  loginPage: LoginPage;
  chatPage: ChatPage;
  user: User;
  router: Router;

  constructor() {
    this.appHtmlEllements = new AppHtmlEllements();
    this.loginPage = new LoginPage(this);
    this.chatPage = new ChatPage(this);
    this.router = new Router(this);
  }

  public async start() {
    const url = 'ws://localhost:4000';
    this.webSocket = new WebSocket(url);

    if (sessionStorage.getItem('current-user_nuttik')) {
      this.user = JSON.parse(sessionStorage.getItem('current-user_nuttik')) as User;
      //жду подключения сервера
      setTimeout(this.login.bind(this, this.user.login, this.user.password), 1000);
    } else {
      this.loginPage.render();
    }
    //запускаем обработку сообщений с сервера
    this.webSocket.onmessage = (event) => {
      this.onMessage(JSON.parse(event.data));
    };
  }

  public login(login: string, password: string) {
    WebSocketAPI.sendUserAuthentication(this, this.webSocket, login, password);
    this.user = {
      login: login,
      password: password,
    };
    const userStr = JSON.stringify(this.user);
    sessionStorage.setItem('current-user_nuttik', userStr);
  }

  private onMessage(message: RequestOrResponse<ErrorResponse>) {
    //сделать действие на каждый тип получаемых сообщений
    switch (message.type) {
      case typeMessagesFromCerver.ERROR:
        //..обработчик
        // выясняем какая ошибка пришла и как ее обработать
        break;
      case typeMessagesFromCerver.USER_LOGIN:
        this.router.urlRoute(this, this.router.urlPath.CHAT);
        break;
      case typeMessagesFromCerver.USER_LOGOUT:
        //..обработчик
        //..открываем страницу логина c с пустыми полями формы
        break;
      case typeMessagesFromCerver.USER_EXTERNAL_LOGIN:
        //..обработчик
        break;
      case typeMessagesFromCerver.USER_EXTERNAL_LOGOUT:
        //..обработчик
        break;
      case typeMessagesFromCerver.USER_ACTIVE:
        //..обработчик
        break;
      case typeMessagesFromCerver.USER_INACTIVE:
        //..обработчик
        break;
      case typeMessagesFromCerver.MSG_SEND:
        //..обработчик
        break;
      case typeMessagesFromCerver.MSG_EDIT:
        //..обработчик
        break;
      case typeMessagesFromCerver.MSG_READ:
        //..обработчик
        break;
      case typeMessagesFromCerver.MSG_DELETE:
        //..обработчик
        break;
    }
  }
}
