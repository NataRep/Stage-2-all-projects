import App from '../../app/app';
import Page from '../../pages/page';

export default class Router {
  urlPath;

  constructor(app: App) {
    this.urlPath = {
      LOGIN: '/',
      CHAT: '/chat',
      ABOUT: '/about',
    };
  }

  public urlRoute(app: App, urlPath: string) {
    window.history.pushState({}, '', urlPath);
    this.urlLocationHandler(app);
  }

  private urlLocationHandler(app: App) {
    Page.clearContent();
    let location = window.location.pathname;
    if (location.length === 0 || !Object.values(this.urlPath).includes(location)) {
      location = '/';
    }
    if (location === this.urlPath.LOGIN) {
      app.loginPage.render();
    }
    if (location === this.urlPath.CHAT) {
      app.chatPage.render();
    }
    if (location === this.urlPath.ABOUT) {
    }
  }
}
