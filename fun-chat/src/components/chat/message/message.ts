import WebSocketAPI from '../../../api/api';
import App from '../../../app/app';
import { ChatMessage, MessageResponse } from '../../../utils/interfaces.ts/interfaces';
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
      console.log('Удвляю сообщение');
    });
    const buttonEdit = Button.create('', ['button_message', 'button_edit-message'], () => {
      console.log('Изменяю сообщение');
    });
    buttonRow.append(buttonEdit);
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
    const statusEdit = document.createElement('div');
    statusEdit.className = 'message__status-edit';
    statusEdit.innerHTML = message.status.isEdited ? 'edit' : '';
    statusRow.append(statusEdit);
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
    unreadedMessage.message.status.isReaded === response.payload.message.status.isReaded;
    //изменили текст статуса в элементе
    Message.changeMessageReadedStatusText(unreadedMessage);
  }
}
