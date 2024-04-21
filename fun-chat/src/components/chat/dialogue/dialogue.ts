import WebSocketAPI from '../../../api/api';
import App from '../../../app/app';
import { ChatMessage, ResponseServer } from '../../../utils/interfaces.ts/interfaces';
import Message from '../message/message';
import './dialogue.scss';

export default class Dialogue {
  login: string;

  messageArray: ChatMessage[];

  dialogueEl: HTMLElement;

  statusEl: HTMLElement;

  startDefaultMessage: HTMLElement;

  app: App;

  constructor(app: App, login: string) {
    this.app = app;
    this.login = login;
    this.messageArray = [];
    this.dialogueEl = document.createElement('div');
    this.dialogueEl.className = 'chat__dialogue dialogue';
    this.createDialogueHistory(app);
    this.createDialogueHeading();
  }

  public createDialogueHeading() {
    const heading = document.createElement('div');
    heading.className = 'dialogue__heading';
    const loginEl = document.createElement('div');
    loginEl.className = 'dialogue__heading-login';
    loginEl.innerHTML = `Chat with ${this.login}`;
    const statusEl = document.createElement('div');
    this.statusEl = statusEl;
    statusEl.className = 'dialogue__heading-status';
    statusEl.innerHTML = ``;
    heading.append(loginEl);
    heading.append(statusEl);
    this.dialogueEl.append(heading);
  }

  public changeDialogHeadingStatus(app: App) {
    const currentUser = app.chat.userList.usersArray.find((user) => user.userData.login === this.login);
    if (currentUser) {
      this.statusEl.innerHTML = currentUser.userData.isLogined ? '(online)' : '(offline)';
    }
  }

  public async createDialogueHistory(app: App) {
    //получаем данные с сервера
    const data: ResponseServer = await WebSocketAPI.getMessageHistoryWithUser(app.webSocket, this.login);

    if (data.payload.messages) {
      if (data.payload.messages.length > 0) {
        data.payload.messages.forEach((response) => {
          if (this.startDefaultMessage) this.startDefaultMessage.remove();
          //для каждого сообщения создаем ChatMessage
          const message = Message.create(app, response);
          this.messageArray.push(message);
          this.dialogueEl.append(message.element);
        });
      } else {
        this.crateStartDefaultMessage();
        this.dialogueEl.append(this.startDefaultMessage);
      }
    }
  }

  public addMessage(app: App, data: ResponseServer) {
    if (this.startDefaultMessage) this.startDefaultMessage.remove();
    const message = Message.create(app, data.payload.message);
    this.messageArray.push(message);
    this.dialogueEl.append(message.element);
    //скролим до последнего сообщения
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

  public addHandlersForReadMessage(app: App) {
    // Сохраняем ссылки на обработчики событий
    this.onDialogueClick = this.onDialogueClick.bind(this);
    this.onSendMessageButtonClick = this.onSendMessageButtonClick.bind(this);
    this.onDialogueWrapperScroll = this.onDialogueWrapperScroll.bind(this);

    // Устанавливаем обработчики событий
    this.dialogueEl.addEventListener('click', this.onDialogueClick);
    app.chat.form.button.addEventListener('click', this.onSendMessageButtonClick);
    app.chat.dialogueWrapper.addEventListener('scroll', this.onDialogueWrapperScroll);
  }

  public removeHandlersForReadMessage(app: App) {
    console.log('!!!');
    this.dialogueEl.removeEventListener('click', this.onDialogueClick);
    app.chat.form.button.removeEventListener('click', this.onSendMessageButtonClick);
    app.chat.dialogueWrapper.removeEventListener('scroll', this.onDialogueWrapperScroll);
  }

  private crateStartDefaultMessage() {
    this.startDefaultMessage = document.createElement('div');
    this.startDefaultMessage.className = 'dialogue__start-message';
    this.startDefaultMessage.innerHTML = `Send a message to start a dialogue with ${this.login}...`;
  }

  private readMessageInDialogue(app: App, dialogue: Dialogue) {
    //отмечаю все сообщения прочитанными
    this.readAllUnreadedMessage(app, dialogue);
    //очищаю счетчик сообщений
    const userInList = app.chat.userList.usersArray.find((user) => user.userData.login === dialogue.login);
    if (userInList) {
      userInList.counter.clear();
    }
  }

  private onDialogueClick = () => {
    this.readMessageInDialogue(this.app, this);
  };

  private onSendMessageButtonClick = () => {
    this.readMessageInDialogue(this.app, this);
  };

  private onDialogueWrapperScroll = () => {
    this.readMessageInDialogueOnScroll(this.app);
  };

  private readMessageInDialogueOnScroll(app: App) {
    //ловлю скролл вверх от пользователя
    const position = app.chat.dialogueWrapper.scrollHeight;
    const scroll = app.chat.dialogueWrapper.scrollTop + app.chat.dialogueWrapper.offsetHeight;
    if (scroll < position) this.readMessageInDialogue(app, this);
  }

  static scrollToLastMessage(app: App) {
    app.chat.dialogueWrapper.scrollTop = app.chat.dialogueWrapper.scrollHeight;
  }
}
