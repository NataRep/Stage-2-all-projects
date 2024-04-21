import WebSocketAPI from '../../../api/api';
import App from '../../../app/app';
import { ChatMessage, MessageResponse, UserChat } from '../../../utils/interfaces.ts/interfaces';
import Button from '../../button/button';
import { ResponseServer } from '../../../utils/interfaces.ts/interfaces';
import './message.scss';
import { MessageStatus } from '../../../utils/enums/message-status';

export default class Message {
  static create(app: App, message: MessageResponse): ChatMessage {
    const messageObj: ChatMessage = {
      message: message,
      element: this.createEl(app, message),
    };
    //увеличить счетчик непрочитанных сообщений
    const userInList = app.chat.userList.usersArray.find((user) => user.userData.login === message.from);
    if (userInList && !message.status.isReaded) {
      userInList.counter.increase();
    }

    return messageObj;
  }

  static createEl(app: App, message: MessageResponse): HTMLElement {
    const messageWrapper = document.createElement('div');
    messageWrapper.className = 'message-wrapper';
    if (message.from === app.user.login) {
      messageWrapper.classList.add('message-wrapper_myself');
    }
    const messageEl = document.createElement('div');
    messageEl.className = 'message';

    const descRow = document.createElement('div');
    descRow.className = 'message__desc-row';
    const from = document.createElement('div');
    from.className = 'message__from';
    from.innerHTML = message.from !== app.user.login ? message.from : 'You';
    const date = this.createMessageDate(message);
    descRow.append(from);
    descRow.append(date);

    const text = document.createElement('div');
    text.className = 'message__text';
    text.insertAdjacentHTML('afterbegin', `<p>${message.text}</p>`);

    const buttonRow = document.createElement('div');
    buttonRow.className = 'message__button-row';
    const buttonRemove = Button.create('', ['button_message', 'button_remove-message'], () => {
      WebSocketAPI.sedRequestToDeletedMessage(app.webSocket, message.id);
    });
    //const buttonEdit = Button.create('', ['button_message', 'button_edit-message'], () => {
    //  console.log('Изменяю сообщение');
    //});
    //buttonRow.append(buttonEdit);
    buttonRow.append(buttonRemove);
    const statusRow = document.createElement('div');
    statusRow.className = 'message__status-row';
    const statusRead = document.createElement('div');
    statusRead.className = 'message__status-read';
    let statusReadText;
    if (message.status.isReaded) {
      statusReadText = MessageStatus.READED;
    } else if (message.status.isDelivered) {
      statusReadText = MessageStatus.DELIVERED;
    } else if (!message.status.isDelivered) {
      statusReadText = MessageStatus.UNDELIVERED;
    }
    statusRead.innerHTML = statusReadText;
    //const statusEdit = document.createElement('div');
    //statusEdit.className = 'message__status-edit';
    //statusEdit.innerHTML = message.status.isEdited ? 'edit' : '';
    //statusRow.append(statusEdit);
    statusRow.append(statusRead);

    messageEl.append(descRow);
    messageEl.append(buttonRow);
    messageEl.append(text);
    messageEl.append(statusRow);
    messageWrapper.append(messageEl);
    return messageWrapper;
  }

  static createMessageDate(message: MessageResponse): HTMLElement {
    const dateWrapper = document.createElement('div');
    dateWrapper.className = 'message__date';

    const dateMessage = new Date(message.datetime);
    const year = String(dateMessage.getFullYear());
    const month = String(dateMessage.getMonth()).padStart(2, '0');
    const date = String(dateMessage.getDate()).padStart(2, '0');
    const hours = String(dateMessage.getHours()).padStart(2, '0');
    const min = String(dateMessage.getMinutes()).padStart(2, '0');
    const sec = String(dateMessage.getSeconds()).padStart(2, '0');

    dateWrapper.innerHTML = `${date}/${month}/${year} ${hours}:${min}:${sec}`;
    return dateWrapper;
  }

  static changeMessageReadedStatusText(message: ChatMessage) {
    const status = message.element.querySelector('.message__status-read') as HTMLElement;
    status.innerHTML = MessageStatus.READED;
  }

  static changeMessageEditStatusText(message: ChatMessage) {
    const status = message.element.querySelector('.message__status-edit') as HTMLElement;
    status.innerHTML = MessageStatus.EDITED;
  }

  static changeStatusReadedMessage(app: App, response: ResponseServer) {
    //получили сообщение сервера о том, что сообщение было прочитано
    const id = response.payload.message.id;
    let unreadedMessage: ChatMessage;
    //нашли это сообщение в диалогах
    app.user.dialogues.forEach((dialogue) => {
      dialogue.messageArray.forEach((message) => {
        if (message.message.id === id) unreadedMessage = message;
      });
    });
    //изменили статус сообщения в данных
    unreadedMessage.message.status.isReaded = response.payload.message.status.isReaded;
    //изменили текст статуса в элементе
    Message.changeMessageReadedStatusText(unreadedMessage);
  }

  static findMessage(app: App, id: string): ChatMessage | void {
    let result: ChatMessage = null;
    app.chat.userList.usersArray.forEach((user) => {
      const finded = user.userDialogue.messageArray.find((message) => message.message.id === id);
      if (finded) result = finded;
    });
    return result;
  }

  static findRecipient(app: App, login: string): UserChat | null {
    let result: UserChat = null;
    result = app.chat.userList.usersArray.find((user) => user.userData.login === login);
    return result;
  }

  static deleteMessageFromArray(app: App, message: ChatMessage) {
    let array;
    let indexofMessage;
    app.chat.userList.usersArray.forEach((user) => {
      const finded = user.userDialogue.messageArray.find((current) => current === message);
      if (finded) {
        array = user.userDialogue.messageArray;
        indexofMessage = array.indexOf(message);
        array = array.splice(indexofMessage, 1);
      }
    });
  }

  static deleteMessage(app: App, message: ResponseServer) {
    let currentMessage = Message.findMessage(app, message.payload.message.id);
    let recipient = null;
    if (currentMessage) {
      currentMessage.element.remove();
      recipient = Message.findRecipient(app, currentMessage.message.from);

      if (recipient && currentMessage.message.status.isReaded === false) {
        recipient.counter.reduce();
      }
      Message.deleteMessageFromArray(app, currentMessage);
      currentMessage = null;
    }
  }
}
