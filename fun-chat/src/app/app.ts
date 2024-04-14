import WebSocketAPI from '../api/api';
import ErrorsFromResponses from '../api/errorsApi';
import Router from '../components/router.ts/router';
import ChatPage from '../pages/chat/chat';
import LoginPage from '../pages/login/login-page';
import AppHtmlEllements from '../utils/app-html-ellements';
import { typeMessagesFromServer } from '../utils/enums/messages-from-server';
import { ResponseServer } from '../utils/interfaces.ts/interfaces';
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

    //включаю обработку переходов по страницам вперед и назад
    window.onpopstate = () => this.openPage();
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

  private onMessage(message: ResponseServer) {
    console.log(message);
    //сделать действие на каждый тип получаемых сообщений
    switch (message.type) {
      case typeMessagesFromServer.ERROR:
        //..обработчик
        const error = new ErrorsFromResponses(message);
        error.catchError();
        break;
      case typeMessagesFromServer.USER_LOGIN:
        this.login();
        break;
      case typeMessagesFromServer.USER_LOGOUT:
        this.logout();
        break;
      case typeMessagesFromServer.USER_EXTERNAL_LOGIN:
        //..обработчик
        console.log(message);
        break;
      case typeMessagesFromServer.USER_EXTERNAL_LOGOUT:
        this.logout();
        break;
      case typeMessagesFromServer.USER_ACTIVE:
        //..обработчик
        break;
      case typeMessagesFromServer.USER_INACTIVE:
        //..обработчик
        console.log(message);
        break;
      case typeMessagesFromServer.MSG_SEND:
        //..обработчик
        console.log(message);
        break;
      case typeMessagesFromServer.MSG_EDIT:
        //..обработчик
        break;
      case typeMessagesFromServer.MSG_READ:
        //..обработчик
        console.log(message);
        break;
      case typeMessagesFromServer.MSG_DELETE:
        //..обработчик
        console.log(message);
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
