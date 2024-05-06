import App from '../../app/app';
import Page from '../../pages/page';
import ChatPage from '../../pages/chat/chat-page';
import AboutPage from '../../pages/about/about-page';
import { UrlPath } from '../../utils/enums/url-path';
import Storage from '../../app/storage';

export default class Router {
  public urlRoute(app: App, urlPath: string) {
    window.history.pushState({}, '', urlPath);
    this.urlLocationHandler(app);
  }

  private urlLocationHandler(app: App) {
    Page.clearContent();
    let location = window.location.pathname as UrlPath;
    if (!Object.values(UrlPath).includes(location)) {
      location = UrlPath.LOGIN;
    }
    if (location === UrlPath.LOGIN) {
      if (Storage.getUser()) {
        Storage.removeUser();
      }
      app.loginPage.open();
    } else if (location === UrlPath.CHAT) {
      if (!app.chatPage) {
        app.chatPage = new ChatPage(app);
      }

      app.chatPage.render();
    } else if (location === UrlPath.ABOUT) {
      app.aboutPage = new AboutPage(app);
      app.aboutPage.render();
    }
  }

  public checkAndChangeUrl() {
    const urlPath = window.location.pathname as UrlPath;

    //страница не существует в списке доступных - меняем адрес на /
    if (window.location.pathname.length === 0 || !Object.values(UrlPath).includes(urlPath)) {
      window.location.pathname = UrlPath.LOGIN;
    }
    //у незалогинненого нет доступа к странице входа
    if (urlPath === UrlPath.CHAT && !Storage.getUser()) {
      window.location.pathname = UrlPath.LOGIN;
    }
    //у залогиненого нет доступа к странице входа
    if (urlPath === UrlPath.LOGIN && Storage.getUser()) {
      window.location.pathname = UrlPath.CHAT;
    }
  }
}
