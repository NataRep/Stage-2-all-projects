import App from '../../../app/app';
import { ChatMessage, messageResponse } from '../../../utils/interfaces.ts/interfaces';

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

    //кнопки изменить текст и удалить сообщение
    const from = document.createElement('div');
    from.className = 'message__from';
    from.innerHTML = message.from !== app.user.login ? message.from : 'You';

    const text = document.createElement('div');
    text.className = 'message__text';
    text.innerHTML = message.text;

    messageEl.append(text);
    return messageEl;
  }
}
