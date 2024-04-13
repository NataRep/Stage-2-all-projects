import WebSocketAPI from '../api/api';
import Router from '../components/router.ts/router';
import ChatPage from '../pages/chat/chat';
import LoginPage from '../pages/login/login-page';
import AppHtmlEllements from '../utils/app-html-ellements';
import { typeMessagesFromCerver } from '../utils/enums/messages-from-server';
import { ErrorResponse, RequestOrResponse, UserRequest } from '../utils/interfaces.ts/interfaces';
import User from './user';

export default class App {
  webSocket: WebSocket;

  appHtmlEllements: AppHtmlEllements;

  loginPage: LoginPage;

  chatPage: ChatPage;

  user: User;

  router: Router;

  constructor() {
    this.appHtmlEllements = new AppHtmlEllements(this);
    this.loginPage = new LoginPage(this);
    this.chatPage = new ChatPage(this);
    this.router = new Router();

    this.user = new User('', '');
  }

  public start() {
    const URL = 'ws://localhost:4000';
    this.webSocket = new WebSocket(URL);

    //Если возможно, автоматически логинемся
    if (sessionStorage.getItem('current-user_nuttik')) {
      this.user = JSON.parse(sessionStorage.getItem('current-user_nuttik')) as User;
      //жду подключения сервера
      setTimeout(() => {
        WebSocketAPI.sendUserAuthentication(this, this.webSocket, this.user.login, this.user.password);
      }, 200);
    }

    //Открываю страницу приложения
    this.openPage();

    //запускаем обработку сообщений с сервера
    this.webSocket.onmessage = (event) => {
      this.onMessage(JSON.parse(event.data));
    };
  }

  public login() {
    this.user.isLogin = true;
    const userStr = JSON.stringify(this.user);
    sessionStorage.setItem('current-user_nuttik', userStr);
    this.router.urlRoute(this, this.router.urlPath.CHAT);
  }

  public logout() {
    this.user.isLogin = false;
    sessionStorage.removeItem('current-user_nuttik');
    this.router.urlRoute(this, this.router.urlPath.LOGIN);
  }

  private onMessage(message: RequestOrResponse<UserRequest>) {
    //сделать действие на каждый тип получаемых сообщений
    switch (message.type) {
      case typeMessagesFromCerver.ERROR:
        //..обработчик
        // выясняем какая ошибка пришла и как ее обработать
        break;
      case typeMessagesFromCerver.USER_LOGIN:
        this.login();
        break;
      case typeMessagesFromCerver.USER_LOGOUT:
        this.logout();
        break;
      case typeMessagesFromCerver.USER_EXTERNAL_LOGIN:
        //..обработчик
        break;
      case typeMessagesFromCerver.USER_EXTERNAL_LOGOUT:
        this.logout();
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

  private openPage() {
    //выбираю какую страницу открывать
    this.router.checkAndChangeUrl();
    //даю отсрочку чтобы сменить адрес страницы и открываю страницу
    setTimeout(() => {
      const urlPath = window.location.pathname;
      this.router.urlRoute(this, urlPath);
    }, 200);
  }
}
