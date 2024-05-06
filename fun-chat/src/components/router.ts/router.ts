import App from '../../app/app';
import Page from '../../pages/page';
import ChatPage from '../../pages/chat/chat-page';
import AboutPage from '../../pages/about/about-page';
import { UrlPath } from '../../utils/enums/url-path';
import Storage from '../../app/storage';

export default class Router {
  urlPath;

  constructor() {
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
    if (!Object.values(this.urlPath).includes(location)) {
      location = '/';
    }
    if (location === this.urlPath.LOGIN) {
      if (Storage.getUser()) {
        Storage.removeUser();
      }
      app.loginPage.open();
    } else if (location === this.urlPath.CHAT) {
      if (!app.chatPage) {
        app.chatPage = new ChatPage(app);
      }

      app.chatPage.render();
    } else if (location === this.urlPath.ABOUT) {
      app.aboutPage = new AboutPage(app);
      app.aboutPage.render();
    }
  }

  public checkAndChangeUrl() {
    const urlPath = window.location.pathname;

    //страница не существует в списке доступных - меняем адрес на /
    if (window.location.pathname.length === 0 || !Object.values(this.urlPath).includes(urlPath)) {
      window.location.pathname = this.urlPath.LOGIN;
    }
    //у незалогинненого нет доступа к странице входа
    if (urlPath === this.urlPath.CHAT && !Storage.getUser()) {
      window.location.pathname = this.urlPath.LOGIN;
    }
    //у залогиненого нет доступа к странице входа
    if (urlPath === this.urlPath.LOGIN && Storage.getUser()) {
      window.location.pathname = this.urlPath.CHAT;
    }
  }
}
