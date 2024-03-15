import User from './user';
import Game from './game';
import StartPage from '../pages/start/start-page';
import { LoginPage } from '../pages/login/login-page';
import { LocalStorageKeys } from '../utils/enums';

class App {
  user: User;

  game: Game | null;

  playGame: boolean;

  constructor() {
    const name = localStorage.getItem(LocalStorageKeys.USER)
      ? JSON.parse(localStorage.getItem(LocalStorageKeys.USER)).name
      : '';
    const surname = localStorage.getItem(LocalStorageKeys.USER)
      ? JSON.parse(localStorage.getItem(LocalStorageKeys.USER)).surname
      : '';
    this.user = new User(name, surname);

    this.playGame = false;

    this.game = null;
  }

  public start(): void {
    if (localStorage.getItem(LocalStorageKeys.USER)) {
      //TODO
      //метод getUser - получаем данные из хранилища
      //запуск игры с указанного в джонсоне левела и раунда
      if (!this.playGame) {
        this.user = new User(
          JSON.parse(localStorage.getItem(LocalStorageKeys.USER)).name,
          JSON.parse(localStorage.getItem(LocalStorageKeys.USER)).surname
        );
        const page = new StartPage(this);
        this.game = new Game(this.user, 1, 1);
        page.drawStartPage();
      }
    } else {
      const loginPage = new LoginPage(this);
      loginPage.drawLoginPage();
    }
  }

  public login(name: string, surname: string): void {
    this.user = new User(name, surname);
    this.game = new Game(this.user, 1, 1);
    localStorage.setItem(LocalStorageKeys.USER, JSON.stringify(this.user));
  }

  public logout() {
    localStorage.removeItem(LocalStorageKeys.USER);
    this.playGame = false;
    this.start();
    this.game = null;
  }

  public getUser() {
    const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));
    return user;
  }
}

export default App;
