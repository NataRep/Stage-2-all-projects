import App from '../../app/app';
import chatForm from '../form/chat-form/chat-form';
import UsersList from './users-list/users-list';
import './chat.scss';
import { ResponseServer, UserChat } from '../../utils/interfaces.ts/interfaces';

export default class Chat {
  userList: UsersList;

  form: chatForm;

  currentcPartner: UserChat;

  dialogueWrapper: HTMLElement;

  constructor(app: App) {
    this.userList = new UsersList();
    this.form = new chatForm(app);
  }

  public create(): HTMLElement {
    const chatWrapper = document.createElement('div');
    chatWrapper.className = 'chat';
    const userList = this.userList.createUl();
    chatWrapper.append(userList);

    const dialogueWrapper = document.createElement('div');
    dialogueWrapper.className = 'chat__dialogue-wrapper';
    this.dialogueWrapper = dialogueWrapper;
    const dialogueDefault = document.createElement('p');
    dialogueDefault.className = 'chat__default';
    dialogueDefault.innerHTML = 'To begin, please select a contact from the list. Have fun!';
    dialogueWrapper.append(dialogueDefault);
    chatWrapper.append(dialogueWrapper);
    const formWrapper = document.createElement('div');
    formWrapper.className = 'chat__form-wrapper';
    const form = this.form.create();
    formWrapper.append(form);
    chatWrapper.append(formWrapper);
    return chatWrapper;
  }

  public getMessageFromServer(app: App, message: ResponseServer) {
    //ищем в какой какие диалоги добавлять сообщение
    const senderDialogue = app.chat.userList.usersArray.find((user) => user.userDialogue);
    const recipientDialogue = app.chat.currentcPartner.userDialogue.addMessage(app, message);
    app.chat.form.textArea.value = '';
  }
}
