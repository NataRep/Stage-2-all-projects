import { User } from '../utils/interfaces.ts/interfaces';

const KEY_LOGIN = 'login';
const KEY_PASSWORD = 'password';

export default class Storage {
  static getUser(): User | boolean {
    const login = sessionStorage.getItem(KEY_LOGIN);
    const password = sessionStorage.getItem(KEY_PASSWORD);

    if (login && password) {
      return {
        login: login,
        password: password,
      };
    } else {
      return false;
    }
  }

  static setUser(login: string, password: string) {
    sessionStorage.setItem(KEY_LOGIN, login);
    sessionStorage.setItem(KEY_PASSWORD, password);
  }

  static removeUser() {
    sessionStorage.removeItem(KEY_LOGIN);
    sessionStorage.removeItem(KEY_PASSWORD);
  }
}
