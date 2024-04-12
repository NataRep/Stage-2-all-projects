import WebSocketAPI from '../api/api';
import App from '../app/app';
import Button from '../components/button/button';

export default class AppHtmlEllements {
  buttonAbout: HTMLButtonElement;

  buttonLogout: HTMLButtonElement;

  loginForm: HTMLElement;

  constructor(app: App) {
    this.buttonAbout = Button.create('About', ['button_about'], () => {
      app.router.urlRoute(app, app.router.urlPath.ABOUT);
    });

    this.buttonLogout = Button.create('Logout', ['button_logout'], () => {
      WebSocketAPI.sendUserLogout(app, app.webSocket, app.user.login, app.user.password);
    });
  }
}
