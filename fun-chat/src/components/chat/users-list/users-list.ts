import App from '../../../app/app';
import { UserChat } from '../../../utils/interfaces.ts/interfaces';
import Counter from '../counter/counter';
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

  public createUser(app: App, login: string, isLogined: boolean) {
    const user: UserChat = {
      userData: {
        login: login,
        isLogined: isLogined,
      },
      userDialogue: new Dialogue(app, login),
      counter: new Counter(),
      userEl: null,
    };
    user.userEl = this.createUserEl(user.counter, login, isLogined);
    user.userEl.addEventListener('click', () => this.userOnClick(app, user));
    this.usersArray.push(user);
    this.list.append(user.userEl);
    app.user.dialogues.push(user.userDialogue);
  }

  private createUserEl(counter: Counter, login: string, isLogined: boolean): HTMLElement {
    const li = document.createElement('li');
    li.className = isLogined ? 'users-list__user online' : 'users-list__user offline';
    li.innerHTML = login;
    const counterEl = counter.elem;
    li.append(counterEl);
    return li;
  }

  public changUserStatus(app: App, login: string, isLogined: boolean) {
    const currentUser = this.usersArray.find((user) => user.userData.login === login);
    if (currentUser) {
      currentUser.userData.isLogined = isLogined;
      currentUser.userEl.className = isLogined ? 'users-list__user online' : 'users-list__user offline';
    } else if (isLogined === true) {
      this.createUser(app, login, isLogined);
    }
  }

  private userOnClick(app: App, user: UserChat) {
    if (app.chat.currentcPartner) {
      app.chat.currentcPartner.userEl.classList.remove('current-partner');
    }
    user.userEl.classList.add('current-partner');
    //сохраняю текущего собеседнику
    app.chat.currentcPartner = user;
    //заменяю историю сообщений
    if (app.chat.dialogueWrapper.children.length > 0) {
      app.chat.dialogueWrapper.replaceChildren(user.userDialogue.dialogueEl);
    }
    //разблокирую форму если она была закрыта
    app.chat.form.changeStateDisabled(false);
    //очищаю поле ввода и перевожу курсор
    app.chat.form.textArea.value = '';
    app.chat.form.textArea.focus();
    //прокручиваю окно чата до последнего сообщения
    Dialogue.scrollToLastMessage(app);
  }
}
