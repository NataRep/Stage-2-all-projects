import App from '../../../app/app';
import { ChatMessage, messageResponse } from '../../../utils/interfaces.ts/interfaces';
import Button from '../../button/button';

export default class Message {
  static create(app: App, message: messageResponse): ChatMessage {
    const messageObj: ChatMessage = {
      message: message,
      element: this.createEl(app, message),
    };
    return messageObj;
  }

  static createEl(app: App, message: messageResponse): HTMLElement {
    const messageEl = document.createElement('div');
    messageEl.className = 'message';
    if (message.from === app.user.login) {
      messageEl.classList.add('message_myself');
    }
    const from = document.createElement('div');
    from.className = 'message__from';
    from.innerHTML = message.from !== app.user.login ? message.from : 'You';
    const text = document.createElement('div');
    text.className = 'message__text';
    text.innerHTML = message.text;
    const date = this.createMessageDate(message);
    const buttonRow = document.createElement('div');
    buttonRow.className = 'message__button-row';
    const buttonRemove = Button.create('', ['button_message', 'button_remove-message'], () => {
      console.log('Удвляю сообщение');
    });
    const buttonEdit = Button.create('', ['button_message', 'button_edit-message'], () => {
      console.log('Изменяю сообщение');
    });
    buttonRow.append(buttonRemove);
    buttonRow.append(buttonEdit);
    const statusRow = document.createElement('div');
    statusRow.className = 'message__status-row';
    const statusRead = document.createElement('div');
    statusRead.className = 'message__status-read';
    let statusReadText;
    if (message.status.isReaded) {
      statusReadText = 'readed';
    } else if (message.status.isDelivered) {
      statusReadText = 'delivered';
    }
    statusRead.innerHTML = statusReadText;
    const statusEdit = document.createElement('div');
    statusEdit.className = 'message__status-edit';
    statusEdit.innerHTML = message.status.isEdited ? 'edit' : '';
    statusRow.append(statusEdit);
    statusRow.append(statusRead);

    messageEl.append(from);
    messageEl.append(date);
    messageEl.append(buttonRow);
    messageEl.append(text);
    messageEl.append(statusRow);
    return messageEl;
  }

  static createMessageDate(message: messageResponse): HTMLElement {
    const dateWrapper = document.createElement('div');
    dateWrapper.className = 'message__date';

    const dateMessage = new Date(message.datetime);
    const year = String(dateMessage.getFullYear());
    const month =
      dateMessage.getMonth() + 1 < 10 ? '0' + String(dateMessage.getMonth() + 1) : String(dateMessage.getMonth() + 1);
    const date = dateMessage.getDate() < 10 ? '0' + String(dateMessage.getDate()) : String(dateMessage.getDate());
    const hours = dateMessage.getHours() < 10 ? '0' + String(dateMessage.getHours()) : String(dateMessage.getHours());
    const min = String(dateMessage.getMinutes());
    const sec = String(dateMessage.getSeconds());

    dateWrapper.innerHTML = `${date}/${month}/${year} ${hours}:${min}:${sec}`;
    return dateWrapper;
  }
}
