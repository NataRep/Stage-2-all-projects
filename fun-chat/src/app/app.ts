import WebSocketAPI from '../api/api';
import { RequestOrResponse } from '../utils/interfaces.ts/api.interfaces';

export default class App {
  webSocket: WebSocket;

  public async start() {
    const url = 'ws://localhost:4000';
    this.webSocket = new WebSocket(url);

    this.webSocket.onopen = (event) => {
      console.log('Соединение установлено');
      WebSocketAPI.sendUserAuthentication(this.webSocket, 'Логин', 'Пароль');
      WebSocketAPI.sendUserLogout(this.webSocket, 'Логин', 'Пароль');
    };

    const id = crypto.randomUUID();

    const requestAuthenticatedUsers: RequestOrResponse<null> = {
      id: id,
      type: 'USER_ACTIVE',
      payload: null,
    };

    this.webSocket.onmessage = (event) => {
      console.log(event.data);
    };
  }
}
