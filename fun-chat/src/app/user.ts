import Dialogue from '../components/chat/dialogue/dialogue';

export default class User {
  login: string;

  password: string;

  isLogin: boolean;

  dialogues: Dialogue[];

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
    this.isLogin = false;
    this.dialogues = [];
  }
}
