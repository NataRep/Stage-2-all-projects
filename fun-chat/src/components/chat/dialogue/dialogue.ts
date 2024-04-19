import WebSocketAPI from '../../../api/api';
import App from '../../../app/app';
import { ChatMessage, ResponseServer } from '../../../utils/interfaces.ts/interfaces';
import Message from '../message/message';
import './dialogue.scss';

export default class Dialogue {
  login: string;

  messageArray: ChatMessage[];

  dialogueEl: HTMLElement;

  constructor(app: App, login: string) {
    this.login = login;
    this.messageArray = [];
    this.dialogueEl = document.createElement('div');
    this.dialogueEl.className = 'chat__dialogue dialogue';
    this.createDialogueHistory(app);
    this.dialogueEl.addEventListener('click', () => this.onClickDialogueEl(app, this));
    //app.user.dialogues.push(this);
  }

  public async createDialogueHistory(app: App) {
    //получаем данные с сервера
    const data: ResponseServer = await WebSocketAPI.getMessageHistoryWithUser(app.webSocket, this.login);

    //для каждого сообщения создаем ChatMessage
    if (data.payload.messages.length > 0) {
      data.payload.messages.forEach((response) => {
        const message = Message.create(app, response);
        this.messageArray.push(message);
        this.dialogueEl.append(message.element);
      });
    }
  }

  public addMessage(app: App, data: ResponseServer) {
    const message = Message.create(app, data.payload.message);
    this.messageArray.push(message);
    this.dialogueEl.append(message.element);
    Dialogue.scrollToLastMessage(app);
  }

  public readAllUnreadedMessage(app: App, dialogue: Dialogue) {
    const unreadedMessages = dialogue.messageArray.filter(
      (message) => message.message.status.isReaded === false && message.message.from != app.user.login
    );
    unreadedMessages.forEach((message) => {
      WebSocketAPI.sedRequestToReadMessage(app.webSocket, message.message.id);
    });
  }

  private onClickDialogueEl(app: App, dialogue: Dialogue) {
    this.readAllUnreadedMessage(app, dialogue);
  }

  static scrollToLastMessage(app: App) {
    app.chat.dialogueWrapper.scrollTop = app.chat.dialogueWrapper.scrollHeight;
  }
}
