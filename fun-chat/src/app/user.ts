export default class User {
  login: string;

  password: string;

  isLogin: boolean;

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
    this.isLogin = false;
  }
}
