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
}

interface UserChat {
  userData: {
    login: string;
    isLogined: boolean;
  };
  userEl: HTMLElement;
}
