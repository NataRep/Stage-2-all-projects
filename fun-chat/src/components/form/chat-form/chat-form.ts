import WebSocketAPI from '../../../api/api';
import App from '../../../app/app';
import { ResponseServer } from '../../../utils/interfaces.ts/interfaces';
import Button from '../../button/button';
import Message from '../../chat/message/message';
import Form from '../form';
import './chat-form.scss';

export default class chatForm extends Form {
  textArea: HTMLTextAreaElement;

  button: HTMLButtonElement;

  constructor(app: App) {
    super('chat');

    this.textArea = this.addTextArea('Write your message');
    this.button = Button.create('Send', ['button_send', 'button_big'], () => {
      this.sendMessage(app, app.chat.currentcPartner.userData.login);
    });
    this.changeStateDisabled(true);
  }

  public changeStateDisabled(isDisabled: boolean) {
    if (isDisabled) {
      this.textArea.disabled = true;
      this.button.disabled = true;
    } else {
      this.textArea.disabled = false;
      this.button.disabled = false;
    }
  }

  private sendMessage(app: App, toUser: string) {
    if (this.textArea.value != '') {
      const text = this.textArea.value;
      WebSocketAPI.sendMessageToUser(app.webSocket, toUser, text);
    }
  }
}
