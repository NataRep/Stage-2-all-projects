import App from '../app/app';
import { TypeMessagesFromServer } from '../utils/enums/messages-from-server';
import { ResponseServer } from '../utils/interfaces.ts/interfaces';
import Message from '../components/chat/message/message';
import ErrorsFromResponses from './errorsApi';
import PopUp from '../components/popUp/popUp';

const URL = 'ws://localhost:4000';
export default class WebSocketManager {
  private webSocket: WebSocket;

  private URL: string;

  constructor() {
    this.URL = URL;
  }

  public async init(app: App) {
    this.webSocket = new WebSocket(this.URL);
    app.webSocket = this.webSocket;

    this.webSocket.onopen = () => {
      app.autoLogin();
      app.openPage();
    };
    this.webSocket.onmessage = (event) => {
      this.onMessage(app, JSON.parse(event.data));
    };
    this.webSocket.onclose = () => {
      this.handleWebSocketClose();
    };
    this.webSocket.onerror = () => {
      this.handleWebSocketClose();
    };
  }

  private onMessage(app: App, message: ResponseServer) {
    switch (message.type) {
      case TypeMessagesFromServer.ERROR:
        const error = new ErrorsFromResponses(message);
        error.catchError(app);
        break;
      case TypeMessagesFromServer.USER_LOGIN:
        app.login();
        break;
      case TypeMessagesFromServer.USER_LOGOUT:
        app.logout();
        break;
      case TypeMessagesFromServer.USER_EXTERNAL_LOGIN:
        app.changeUserExternalStatus(message);
        break;
      case TypeMessagesFromServer.USER_EXTERNAL_LOGOUT:
        app.changeUserExternalStatus(message);
        break;
      case TypeMessagesFromServer.MSG_SEND:
        app.chat.getMessageFromServer(app, message);
        break;
      case TypeMessagesFromServer.MSG_READ:
        Message.changeStatusReadedMessage(app, message);
        break;
      case TypeMessagesFromServer.MSG_DELETE:
        Message.deleteMessage(app, message);
        break;
    }
  }

  private handleWebSocketClose() {
    const handler = function () {
      const app = new App();
      app.start();
    };
    PopUp.createConnection(handler);
  }
}
