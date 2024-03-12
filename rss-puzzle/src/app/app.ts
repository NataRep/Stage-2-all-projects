import User from './user';
import StartPage from '../pages/start/start-page';
import { LoginPage } from '../pages/login/login-page';
import { LocalStorageKeys } from '../utils/enums';

class App {
  user: User;

  constructor() {
    const name = localStorage.getItem(LocalStorageKeys.USER)
      ? JSON.parse(localStorage.getItem(LocalStorageKeys.USER)).name
      : '';
    const surname = localStorage.getItem(LocalStorageKeys.USER)
      ? JSON.parse(localStorage.getItem(LocalStorageKeys.USER)).surname
      : '';
    const level = localStorage.getItem(LocalStorageKeys.USER)
      ? JSON.parse(localStorage.getItem(LocalStorageKeys.USER)).level
      : 0;
    const round = localStorage.getItem(LocalStorageKeys.USER)
      ? JSON.parse(localStorage.getItem(LocalStorageKeys.USER)).round
      : 0;
    this.user = new User(name, surname, level, round);
  }

  public start(): void {
    if (localStorage.getItem(LocalStorageKeys.USER)) {
      //TODO
      //метод getUser - получаем данные из хранилища
      //запуск игры с указанного в джонсоне левела и раунда
      if (JSON.parse(localStorage.getItem(LocalStorageKeys.USER)).level === 0) {
        this.user = new User(
          JSON.parse(localStorage.getItem(LocalStorageKeys.USER)).name,
          JSON.parse(localStorage.getItem(LocalStorageKeys.USER)).surname,
          0,
          0
        );
        const page = new StartPage(this);
        page.drawStartPage();
      }
    } else {
      const loginPage = new LoginPage(this);
      loginPage.drawLoginPage();
    }
  }

  public login(name: string, surname: string): void {
    this.user = new User(name, surname, 0, 0);
    localStorage.setItem(LocalStorageKeys.USER, JSON.stringify(this.user));
  }

  public logout() {
    localStorage.removeItem(LocalStorageKeys.USER);
    this.start();
  }

  public getUser() {
    const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));
    return user;
  }
}

export default App;
