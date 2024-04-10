import { MessageRequest, RequestFormat, UserRequest } from '../interfaces.ts/api.interfaces';

export default class WebSocketAPI {
  static sendRequest<T>(webSocket: WebSocket, id: string, type: string, payload: T) {
    const request: RequestFormat<T> = {
      id: id,
      type: type,
      payload: payload,
    };
    webSocket.send(JSON.stringify(request));
  }

  static sendUserAuthentication(webSocket: WebSocket, id: string, login: string, password: string) {
    const payload: UserRequest = {
      user: {
        login: login,
        password: password,
      },
    };
    this.sendRequest(webSocket, id, 'USER_LOGIN', payload);
  }

  static sendUserLogout(webSocket: WebSocket, id: string, login: string, password: string) {
    const payload: UserRequest = {
      user: {
        login: login,
        password: password,
      },
    };
    this.sendRequest(webSocket, id, 'USER_LOGOUT', payload);
  }

  static getAllAuthenticatedUsers(webSocket: WebSocket, id: string) {
    this.sendRequest(webSocket, id, 'USER_ACTIVE', null);
  }

  static getAllUnauthorizedUsers(webSocket: WebSocket, id: string) {
    this.sendRequest(webSocket, id, 'USER_INACTIVE', null);
  }

  static sendMessageToUser(webSocket: WebSocket, id: string, toId: string, text: string) {
    const payload: MessageRequest = {
      message: {
        to: toId,
        text: text,
      },
    };
    this.sendRequest(webSocket, id, 'MSG_SEND', payload);
  }

  static getMessageHistoryWithUser(webSocket: WebSocket, id: string, login: string) {
    const payload = {
      user: {
        login: login,
      },
    };
    this.sendRequest(webSocket, id, 'MSG_FROM_USER', payload);
  }
}
