import { User } from '../utils/interfaces.ts/interfaces';

const KEY_USER = 'user_fun-chat';

//сохранять  ОБЪЕКТ а не по отдельным ключам

export default class Storage {
  static getUser(): User | boolean {
    if (sessionStorage.getItem(KEY_USER)) {
      return JSON.parse(sessionStorage.getItem(KEY_USER));
    } else {
      return false;
    }
  }

  static setUser(login: string, password: string) {
    const user: User = {
      login: login,
      password: password,
    };
    sessionStorage.setItem(KEY_USER, JSON.stringify(user));
  }

  static removeUser() {
    sessionStorage.removeItem(KEY_USER);
  }
}
