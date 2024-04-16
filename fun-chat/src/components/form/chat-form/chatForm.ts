import App from '../../../app/app';
import Button from '../../button/button';
import Form from '../form';

export default class chatForm extends Form {
  input: HTMLInputElement;

  button: HTMLButtonElement;

  constructor(app: App) {
    super('chat');

    this.input = this.addInput('input-message', null, 'Write your message', 1, 600, false);
    this.input.pattern = '';
    this.button = Button.create('Send', ['button_send'], () => {
      console.log('Отправляю сообщение');
    });
  }
}
