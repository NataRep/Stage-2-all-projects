import UsersList from './users-list/users-list';

export default class Chat {
  userList: UsersList;

  constructor() {
    this.userList = new UsersList();
  }

  public create(): HTMLElement {
    const chatWrapper = document.createElement('div');
    chatWrapper.className = 'chat';
    const userList = this.userList.createUl();
    chatWrapper.append(userList);

    const dialogueWrapper = document.createElement('div');
    dialogueWrapper.className = 'chat__dialogue-wrapper';
    const dialogueDefault = document.createElement('p');
    dialogueDefault.className = 'chat__default';
    dialogueDefault.innerHTML = 'To begin, please select a contact from the list.';
    dialogueWrapper.append(dialogueDefault);
    chatWrapper.append(dialogueWrapper);

    const formWrapper = document.createElement('div');
    formWrapper.className = 'chat__form-wrapper';
    chatWrapper.append(formWrapper);
    return chatWrapper;
  }
}
