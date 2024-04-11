import App from '../app/app';
import { MessageRequest, RequestOrResponse, UserRequest } from '../utils/interfaces.ts/interfaces';

export default class WebSocketAPI {
  static sendRequest<T>(webSocket: WebSocket, type: string, payload: T) {
    const id = crypto.randomUUID();
    const request: RequestOrResponse<T> = {
      id: id,
      type: type,
      payload: payload,
    };
    webSocket.send(JSON.stringify(request));
  }

  static sendUserAuthentication(app: App, webSocket: WebSocket, login: string, password: string) {
    const payload: UserRequest = {
      user: {
        login: login,
        password: password,
      },
    };
    this.sendRequest(webSocket, 'USER_LOGIN', payload);
  }

  static sendUserLogout(app: App, webSocket: WebSocket, login: string, password: string) {
    const payload: UserRequest = {
      user: {
        login: login,
        password: password,
      },
    };
    this.sendRequest(webSocket, 'USER_LOGOUT', payload);
  }

  static getAllAuthenticatedUsers(app: App, webSocket: WebSocket) {
    this.sendRequest(webSocket, 'USER_ACTIVE', null);
  }

  static getAllUnauthorizedUsers(app: App, webSocket: WebSocket) {
    const request = this.sendRequest(webSocket, 'USER_INACTIVE', null);
  }

  static sendMessageToUser(app: App, webSocket: WebSocket, toId: string, text: string) {
    const payload: MessageRequest = {
      message: {
        to: toId,
        text: text,
      },
    };
    const request = this.sendRequest(webSocket, 'MSG_SEND', payload);
  }

  static getMessageHistoryWithUser(app: App, webSocket: WebSocket, login: string) {
    const payload = {
      user: {
        login: login,
      },
    };
    const request = this.sendRequest(webSocket, 'MSG_FROM_USER', payload);
  }
}
