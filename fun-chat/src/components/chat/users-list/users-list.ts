import Dialogue from '../dialogue/dialogue';
import './users-list.scss';
export default class UsersList {
  usersArray: UserChat[];

  list: HTMLUListElement;

  public createUl() {
    this.list = document.createElement('ul');
    this.list.className = 'chat__users-list users-list';
    this.usersArray = [];
    return this.list;
  }

  public createUser(login: string, isLogined: boolean) {
    const user: UserChat = {
      userData: {
        login: login,
        isLogined: isLogined,
      },
      userDialogue: new Dialogue(),
      userEl: this.createUserEl(login, isLogined),
    };
    this.usersArray.push(user);
    this.list.append(user.userEl);
  }

  private createUserEl(login: string, isLogined: boolean): HTMLElement {
    const li = document.createElement('li');
    li.className = isLogined ? 'users-list__user online' : 'users-list__user offline';
    li.innerHTML = login;
    return li;
  }

  public changUserStatus(login: string, isLogined: boolean) {
    const user = this.usersArray.find((user) => user.userData.login === login);
    if (user) {
      user.userData.isLogined = isLogined;
      user.userEl.className = isLogined ? 'users-list__user online' : 'users-list__user offline';
    } else if (isLogined === true) {
      this.createUser(login, isLogined);
    }
  }
}

interface UserChat {
  userData: {
    login: string;
    isLogined: boolean;
  };
  userDialogue: Dialogue;
  userEl: HTMLElement;
}
