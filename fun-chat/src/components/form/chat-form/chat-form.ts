import App from '../../../app/app';
import Button from '../../button/button';
import Form from '../form';
import './chat-form.scss';

export default class chatForm extends Form {
  textArea: HTMLTextAreaElement;

  button: HTMLButtonElement;

  constructor(app: App) {
    super('chat');

    this.textArea = this.addTextArea('Write your message');
    this.button = Button.create('Send', ['button_send', 'button_big'], () => {
      console.log('Отправляю сообщение');
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
}
