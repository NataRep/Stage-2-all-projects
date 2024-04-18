import WebSocketAPI from '../api/api';
import ErrorsFromResponses from '../api/errorsApi';
import Chat from '../components/chat/chat';
import Router from '../components/router.ts/router';
import AboutPage from '../pages/about/about-page';
import ChatPage from '../pages/chat/chat-page';
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

  aboutPage: AboutPage;

  user: User;

  router: Router;

  chat: Chat;

  constructor() {
    this.appHtmlEllements = new AppHtmlEllements();
    this.loginPage = new LoginPage(this);
    this.router = new Router();

    this.user = new User('', '');
  }

  public async start() {
    const URL = 'ws://localhost:4000';
    this.webSocket = await new WebSocket(URL);

    //Если возможно, автоматически логинемся
    if (sessionStorage.getItem('current-user_nuttik_login') && sessionStorage.getItem('current-user_nuttik_password')) {
      this.user.login = sessionStorage.getItem('current-user_nuttik_login');
      this.user.password = sessionStorage.getItem('current-user_nuttik_password');
      // Ждем подключения сервера перед отправкой запроса аутентификации
      this.webSocket.onopen = () => {
        WebSocketAPI.sendUserAuthentication(this.webSocket, this.user.login, this.user.password);
      };
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
    if (
      !sessionStorage.getItem('current-user_nuttik_login') &&
      !sessionStorage.getItem('urrent-user_nuttik_password')
    ) {
      sessionStorage.setItem('current-user_nuttik_login', this.user.login);
      sessionStorage.setItem('current-user_nuttik_password', this.user.password);
    }
    if (window.location.pathname === this.router.urlPath.LOGIN) {
      this.router.urlRoute(this, this.router.urlPath.CHAT);
    }
  }

  public logout() {
    this.user.isLogin = false;
    sessionStorage.removeItem('current-user_nuttik');
    this.router.urlRoute(this, this.router.urlPath.LOGIN);
  }

  private onMessage(message: ResponseServer) {
    //сделать действие на каждый тип получаемых сообщений
    console.log(message);

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
        this.chat.userList.changUserStatus(this, message.payload.user.login, message.payload.user.isLogined);
        break;
      case typeMessagesFromServer.USER_EXTERNAL_LOGOUT:
        this.chat.userList.changUserStatus(this, message.payload.user.login, message.payload.user.isLogined);
        break;
      case typeMessagesFromServer.USER_ACTIVE:
        //..обработчик
        break;
      case typeMessagesFromServer.USER_INACTIVE:
        //..обработчик
        break;
      case typeMessagesFromServer.MSG_SEND:
        //..обработчик

        this.chat.currentcPartner.userDialogue.addMessage(this, message);
        this.chat.form.textArea.value = '';
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
