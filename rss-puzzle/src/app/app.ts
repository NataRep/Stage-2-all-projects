import { LoginPage } from '../pages/login/login-page';
import { LocalStorageKeys } from '../utils/enums';

class App {
  /* constructor() {
    this.game = new Game();
  }*/

  public start(): void {
    if (window.localStorage.getItem(LocalStorageKeys.USER)) {
      //TODO
      //парсинг из джойсона
      //запуск игры с указанного в джонсоне левела и раунда
    } else {
      const loginPage = new LoginPage();
      loginPage.drawLoginPage();
    }
  }
}

export default App;
