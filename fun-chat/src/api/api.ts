import { MessageRequest, RequestOrResponse, UserRequest } from '../utils/interfaces.ts/api.interfaces';

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

  static sendUserAuthentication(webSocket: WebSocket, login: string, password: string) {
    const payload: UserRequest = {
      user: {
        login: login,
        password: password,
      },
    };
    this.sendRequest(webSocket, 'USER_LOGIN', payload);
  }

  static sendUserLogout(webSocket: WebSocket, login: string, password: string) {
    const payload: UserRequest = {
      user: {
        login: login,
        password: password,
      },
    };
    this.sendRequest(webSocket, 'USER_LOGOUT', payload);
  }

  static getAllAuthenticatedUsers(webSocket: WebSocket) {
    this.sendRequest(webSocket, 'USER_ACTIVE', null);
  }

  static getAllUnauthorizedUsers(webSocket: WebSocket) {
    this.sendRequest(webSocket, 'USER_INACTIVE', null);
  }

  static sendMessageToUser(webSocket: WebSocket, toId: string, text: string) {
    const payload: MessageRequest = {
      message: {
        to: toId,
        text: text,
      },
    };
    this.sendRequest(webSocket, 'MSG_SEND', payload);
  }

  static getMessageHistoryWithUser(webSocket: WebSocket, login: string) {
    const payload = {
      user: {
        login: login,
      },
    };
    this.sendRequest(webSocket, 'MSG_FROM_USER', payload);
  }
}
