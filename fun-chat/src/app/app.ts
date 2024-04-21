import WebSocketAPI from '../api/api';
import ErrorsFromResponses from '../api/errorsApi';
import Chat from '../components/chat/chat';
import Message from '../components/chat/message/message';
import PopUp from '../components/popUp/popUp';
import Router from '../components/router.ts/router';
import AboutPage from '../pages/about/about-page';
import ChatPage from '../pages/chat/chat-page';
import LoginPage from '../pages/login/login-page';
import { TypeMessagesFromServer } from '../utils/enums/messages-from-server';
import { ResponseServer } from '../utils/interfaces.ts/interfaces';
import User from './user';

export default class App {
  webSocket: WebSocket;

  URL: string;

  loginPage: LoginPage;

  chatPage: ChatPage;

  aboutPage: AboutPage;

  user: User;

  router: Router;

  chat: Chat;

  constructor() {
    this.loginPage = new LoginPage(this);
    this.router = new Router();
    this.URL = 'ws://localhost:4000';
    this.user = new User('', '');
  }

  public async start() {
    this.webSocket = new WebSocket(this.URL);
    this.webSocket.onopen = () => {
      this.autoLogin();
      this.openPage();
    };
    this.webSocket.onmessage = (event) => {
      this.onMessage(JSON.parse(event.data));
    };
    this.webSocket.onclose = () => {
      this.addPopUpConnectionError();
    };
    this.webSocket.onerror = () => {
      this.addPopUpConnectionError();
    };
    window.onpopstate = () => this.openPage();
  }

  private addPopUpConnectionError() {
    const handler = function () {
      const app = new App();
      app.start();
    };
    PopUp.createConnection(handler);
  }

  private autoLogin() {
    if (sessionStorage.getItem('current-user_nuttik_login') && sessionStorage.getItem('current-user_nuttik_password')) {
      this.user.login = sessionStorage.getItem('current-user_nuttik_login');
      this.user.password = sessionStorage.getItem('current-user_nuttik_password');
      WebSocketAPI.sendUserAuthentication(this.webSocket, this.user.login, this.user.password);
    }
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
    sessionStorage.removeItem('current-user_nuttik_login');
    sessionStorage.removeItem('current-user_nuttik_password');
    this.router.urlRoute(this, this.router.urlPath.LOGIN);
  }

  private onMessage(message: ResponseServer) {
    //сделать действие на каждый тип получаемых сообщений
    //console.log(message);

    switch (message.type) {
      case TypeMessagesFromServer.ERROR:
        //..обработчик
        const error = new ErrorsFromResponses(message);
        error.catchError(this);
        break;
      case TypeMessagesFromServer.USER_LOGIN:
        this.login();
        break;
      case TypeMessagesFromServer.USER_LOGOUT:
        this.logout();
        break;
      case TypeMessagesFromServer.USER_EXTERNAL_LOGIN:
        if (this.chat) {
          this.chat.userList.changUserStatus(this, message.payload.user.login, message.payload.user.isLogined);
          //меняю статус в диалоге
          const curentDialog = this.chat.userList.usersArray.find(
            (user) => user.userData.login === message.payload.user.login
          ).userDialogue;
          curentDialog.changeDialogHeadingStatus(this);
        }
        break;
      case TypeMessagesFromServer.USER_EXTERNAL_LOGOUT:
        this.chat.userList.changUserStatus(this, message.payload.user.login, message.payload.user.isLogined);
        //меняю статус в диалоге
        const curentDialog = this.chat.userList.usersArray.find(
          (user) => user.userData.login === message.payload.user.login
        ).userDialogue;
        curentDialog.changeDialogHeadingStatus(this);
        break;
      case TypeMessagesFromServer.USER_ACTIVE:
        //..обработчик
        break;
      case TypeMessagesFromServer.USER_INACTIVE:
        //..обработчик
        break;
      case TypeMessagesFromServer.MSG_SEND:
        //..обработчик
        this.chat.getMessageFromServer(this, message);
        break;
      case TypeMessagesFromServer.MSG_EDIT:
        //..обработчик
        break;
      case TypeMessagesFromServer.MSG_READ:
        //..обработчик
        Message.changeStatusReadedMessage(this, message);
        break;
      case TypeMessagesFromServer.MSG_DELETE:
        Message.deleteMessage(this, message);
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
