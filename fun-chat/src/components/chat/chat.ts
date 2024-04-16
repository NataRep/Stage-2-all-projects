import UsersList from './users-list/users-list';

export default class Chat {
  messageArray: MessageChat[];

  userList: UsersList;

  constructor() {
    this.userList = new UsersList();
  }

  private createWrapper(): HTMLElement {
    const chat = document.createElement('div');
    chat.className = 'chat';
    return chat;
  }

  public create(): HTMLElement {
    const chatWrapper = this.createWrapper();
    const userList = this.userList.createUl();
    chatWrapper.append(userList);

    return chatWrapper;
  }
}

interface MessageChat {
  message: {
    id: string;
    from: string;
    to: string;
    text: string;
    datetime: number;
    status: {
      isDelivered: boolean;
      isReaded: boolean;
      isEdited: boolean;
    };
  };
  //messageEl: MessageEl;
}
