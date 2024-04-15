import { MessageRequest, RequestServer, UserRequest } from '../utils/interfaces.ts/interfaces';
export default class WebSocketAPI {
  static async sendRequest<T>(webSocket: WebSocket, type: string, payload: T): Promise<any> {
    const id = crypto.randomUUID();
    const request: RequestServer<T> = {
      id: id,
      type: type,
      payload: payload,
    };
    webSocket.send(JSON.stringify(request));

    // Ожидание ответа от сервера
    return new Promise((resolve) => {
      webSocket.addEventListener('message', (event) => {
        const response = JSON.parse(event.data);
        if (response.id === id) {
          resolve(response);
        }
      });
    });
  }

  static async sendUserAuthentication(webSocket: WebSocket, login: string, password: string): Promise<any> {
    const payload: UserRequest = {
      user: {
        login: login,
        password: password,
      },
    };
    return await this.sendRequest(webSocket, 'USER_LOGIN', payload);
  }

  static async sendUserLogout(webSocket: WebSocket, login: string, password: string): Promise<any> {
    const payload: UserRequest = {
      user: {
        login: login,
        password: password,
      },
    };
    return await this.sendRequest(webSocket, 'USER_LOGOUT', payload);
  }

  static async getAllAuthenticatedUsers(webSocket: WebSocket): Promise<any> {
    return await this.sendRequest(webSocket, 'USER_ACTIVE', null);
  }

  static async getAllUnauthorizedUsers(webSocket: WebSocket): Promise<any> {
    return await this.sendRequest(webSocket, 'USER_INACTIVE', null);
  }

  static async sendMessageToUser(webSocket: WebSocket, toId: string, text: string): Promise<any> {
    const payload: MessageRequest = {
      message: {
        to: toId,
        text: text,
      },
    };
    return await this.sendRequest(webSocket, 'MSG_SEND', payload);
  }

  static async getMessageHistoryWithUser(webSocket: WebSocket, login: string): Promise<any> {
    const payload = {
      user: {
        login: login,
      },
    };
    return await this.sendRequest(webSocket, 'MSG_FROM_USER', payload);
  }
}
