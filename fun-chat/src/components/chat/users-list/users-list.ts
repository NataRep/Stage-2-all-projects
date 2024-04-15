export default class UsersList {
  usersArray: UserChat[];
  list: HTMLUListElement;

  public createList() {
    this.list = document.createElement('ul');
    this.list.className = 'chat__users-list';
    //array.forEach((response) => {
    // this.createUser(response.payload.user.login, response.payload.user.isLogined);
    //});
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
    li.className = isLogined ? 'chat__user user_online' : 'chat__user user_offline';
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
