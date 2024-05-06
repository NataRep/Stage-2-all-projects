import WebSocketAPI from '../api/api';
import WebSocketManager from '../api/webSoket';
import Chat from '../components/chat/chat';
import Router from '../components/router.ts/router';
import AboutPage from '../pages/about/about-page';
import ChatPage from '../pages/chat/chat-page';
import LoginPage from '../pages/login/login-page';
import { ResponseServer } from '../utils/interfaces.ts/interfaces';
import Storage from './storage';
import { UrlPath } from '../utils/enums/url-path';
import User from './user';

export default class App {
  webSocketManager: WebSocketManager;

  webSocket: WebSocket;

  loginPage: LoginPage;

  chatPage: ChatPage;

  aboutPage: AboutPage;

  user: User;

  router: Router;

  chat: Chat;

  constructor() {
    this.loginPage = new LoginPage(this);
    this.router = new Router();
    this.user = new User('', '');
  }

  public async start() {
    this.webSocketManager = new WebSocketManager();
    this.webSocketManager.init(this);
    window.onpopstate = () => this.openPage();
  }

  public autoLogin() {
    const storageUser = Storage.getUser();
    if (typeof storageUser === 'object') {
      this.user.login = storageUser.login;
      this.user.password = storageUser.password;
      WebSocketAPI.sendUserAuthentication(this.webSocket, this.user.login, this.user.password);
    }
  }

  public login() {
    this.user.isLogin = true;
    Storage.setUser(this.user.login, this.user.password);
    if (window.location.pathname === UrlPath.LOGIN) {
      this.router.urlRoute(this, UrlPath.CHAT);
    }
  }

  public logout() {
    this.user.isLogin = false;
    Storage.removeUser();
    this.router.urlRoute(this, UrlPath.LOGIN);
  }

  public openPage() {
    this.router.checkAndChangeUrl();
    //даю отсрочку чтобы сменить адрес страницы и открываю страницу
    setTimeout(() => {
      const urlPath = window.location.pathname;
      this.router.urlRoute(this, urlPath);
    }, 200);
  }

  public changeUserExternalStatus(message: ResponseServer) {
    if (this.chat) {
      this.chat.userList.changUserStatus(this, message.payload.user.login, message.payload.user.isLogined);
      //меняю статус в диалоге
      const curentDialog = this.chat.userList.usersArray.find(
        (user) => user.userData.login === message.payload.user.login
      ).userDialogue;
      curentDialog.changeDialogHeadingStatus(this);
    }
  }
}
