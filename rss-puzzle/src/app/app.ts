import User from './user';
import { LoginPage } from '../pages/login/login-page';
import { LocalStorageKeys } from '../utils/enums';

export let USER: User;
class App {
  /* constructor() {
    this.game = new Game();
  }*/

  public start(): void {
    if (window.localStorage.getItem(LocalStorageKeys.USER)) {
      //TODO
      //метод getUser - получаем данные из хранилища
      //запуск игры с указанного в джонсоне левела и раунда
    } else {
      const loginPage = new LoginPage();
      loginPage.drawLoginPage();
    }
  }

  public login(name: string, surname: string): void {
    USER = new User(name, surname, 0, 0);
    window.localStorage.setItem(LocalStorageKeys.USER, JSON.stringify(USER));
  }

  public logout() {
    window.localStorage.removeItem(LocalStorageKeys.USER);
  }

  public getUser() {
    const user = JSON.parse(window.localStorage.getItem(LocalStorageKeys.USER));
    return user;
  }
}

export default App;
