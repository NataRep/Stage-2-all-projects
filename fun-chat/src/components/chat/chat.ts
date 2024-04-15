import UsersList from './users-list/users-list';

export default class Chat {
  messageArray: MessageChat[];

  userList: UsersList;

  constructor() {
    this.userList = new UsersList();
  }

  public createEl(): HTMLElement {
    const chat = document.createElement('div');
    chat.className = 'chat';

    return chat;
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
