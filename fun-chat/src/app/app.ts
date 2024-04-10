import WebSocketAPI from './api';
import { RequestFormat } from '../interfaces.ts/api.interfaces';

export default class App {
  webSocket: WebSocket;
  id: string;

  public async start() {
    const url = 'ws://localhost:4000';
    this.webSocket = new WebSocket(url);

    this.webSocket.onopen = (event) => {
      console.log('Соединение установлено');
      WebSocketAPI.sendUserAuthentication(this.webSocket, this.id, 'Логин', 'Пароль');
      WebSocketAPI.sendUserLogout(this.webSocket, this.id, 'Логин', 'Пароль');
    };

    this.id = crypto.randomUUID();

    const requestAuthenticatedUsers: RequestFormat<null> = {
      id: this.id,
      type: 'USER_ACTIVE',
      payload: null,
    };

    this.webSocket.onmessage = (event) => {
      console.log(event.data);
    };
  }
}
