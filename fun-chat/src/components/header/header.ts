import App from '../../app/app';
import Button from '../button/button';
import WebSocketAPI from '../../api/api';
import { createLogotype } from '../logotype/logotype';
import './header.scss';
import User from '../../app/user';

export class Header {
  static create(app: App): HTMLElement {
    const header = document.createElement('header');
    header.className = 'header';
    const logotype = createLogotype();

    const leftRow = document.createElement('header');
    leftRow.className = 'header__left';

    const buttonsRow = document.createElement('div');
    buttonsRow.className = 'header__button-row';

    const [buttonAbout, buttonLogout, buttonChat, buttonLogin] = this.createHeaderButtons(app);

    const user = document.createElement('div');
    user.className = 'header__user';
    user.innerHTML = `Hello, ${app.user.login}!`;

    if (window.location.pathname === app.router.urlPath.CHAT) {
      buttonsRow.append(buttonAbout);
      buttonsRow.append(buttonLogout);
    }
    if (window.location.pathname === app.router.urlPath.ABOUT && app.user.isLogin === true) {
      buttonsRow.append(buttonChat);
      buttonsRow.append(buttonLogout);
    }
    if (window.location.pathname === app.router.urlPath.ABOUT && app.user.isLogin === false) {
      buttonsRow.append(buttonLogin);
    }

    leftRow.append(logotype);
    leftRow.append(user);
    header.append(leftRow);
    header.append(buttonsRow);
    return header;
  }

  static createHeaderButtons(app: App): HTMLElement[] {
    const buttonArray: HTMLElement[] = [];
    const buttonAbout = Button.create('About Us', ['button_about'], () => {
      app.router.urlRoute(app, app.router.urlPath.ABOUT);
    });
    buttonArray.push(buttonAbout);

    const buttonLogout = Button.create('Logout', ['button_logout'], () => {
      WebSocketAPI.sendUserLogout(app, app.webSocket, app.user.login, app.user.password);
    });
    buttonArray.push(buttonLogout);

    const buttonChat = Button.create('Chat', ['button_chat'], () => {
      app.router.urlRoute(app, app.router.urlPath.CHAT);
    });
    buttonArray.push(buttonChat);

    const buttonLogin = Button.create('Login', ['button_login'], () => {
      app.router.urlRoute(app, app.router.urlPath.LOGIN);
    });
    buttonArray.push(buttonLogin);

    return buttonArray;
  }
}
