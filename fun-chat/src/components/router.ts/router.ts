import App from '../../app/app';
import Page from '../../pages/page';
import ChatPage from '../../pages/chat/chat';

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
      if (sessionStorage.getItem('current-user_nuttik')) {
        sessionStorage.removeItem('current-user_nuttik');
      }
      app.loginPage.open(app);
    }
    if (location === this.urlPath.CHAT) {
      app.chatPage = new ChatPage(app);
      app.chatPage.render();
    }
    if (location === this.urlPath.ABOUT) {
    }
  }

  public checkAndChangeUrl() {
    const urlPath = window.location.pathname;

    //страница не существует в списке доступных - меняем адрес на /
    if (window.location.pathname.length === 0 || !Object.values(this.urlPath).includes(urlPath)) {
      window.location.pathname = this.urlPath.LOGIN;
    }
    //у залогинненого нет доступа к странице входа
    if (urlPath === this.urlPath.CHAT && !sessionStorage.getItem('current-user_nuttik')) {
      window.location.pathname = this.urlPath.LOGIN;
    }
    //у залогиненого нет доступа к странице входа
    if (urlPath === this.urlPath.LOGIN && sessionStorage.getItem('current-user_nuttik')) {
      window.location.pathname = this.urlPath.CHAT;
    }
  }
}
