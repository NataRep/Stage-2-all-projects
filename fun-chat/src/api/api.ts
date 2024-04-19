import { MessageRequest, RequestServer, ResponseServer, UserRequest } from '../utils/interfaces.ts/interfaces';
export default class WebSocketAPI {
  static async sendRequest<T>(webSocket: WebSocket, type: string, payload: T): Promise<ResponseServer> {
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

  static async sendUserAuthentication(webSocket: WebSocket, login: string, password: string): Promise<ResponseServer> {
    const payload: UserRequest = {
      user: {
        login: login,
        password: password,
      },
    };
    const responseServer: ResponseServer = await this.sendRequest(webSocket, 'USER_LOGIN', payload);
    return responseServer;
  }

  static async sendUserLogout(webSocket: WebSocket, login: string, password: string): Promise<ResponseServer> {
    const payload: UserRequest = {
      user: {
        login: login,
        password: password,
      },
    };
    const responseServer: ResponseServer = await this.sendRequest(webSocket, 'USER_LOGOUT', payload);
    return responseServer;
  }

  static async getAllAuthenticatedUsers(webSocket: WebSocket): Promise<ResponseServer> {
    const responseServer: ResponseServer = await this.sendRequest(webSocket, 'USER_ACTIVE', null);
    return responseServer;
  }

  static async getAllUnauthorizedUsers(webSocket: WebSocket): Promise<ResponseServer> {
    const responseServer: ResponseServer = await this.sendRequest(webSocket, 'USER_INACTIVE', null);
    return responseServer;
  }

  static async sendMessageToUser(webSocket: WebSocket, toUser: string, text: string): Promise<ResponseServer> {
    const payload: MessageRequest = {
      message: {
        to: toUser,
        text: text,
      },
    };
    const responseServer: ResponseServer = await this.sendRequest(webSocket, 'MSG_SEND', payload);
    return responseServer;
  }

  static async getMessageHistoryWithUser(webSocket: WebSocket, login: string): Promise<ResponseServer> {
    const payload = {
      user: {
        login: login,
      },
    };
    const responseServer: ResponseServer = await this.sendRequest(webSocket, 'MSG_FROM_USER', payload);
    return responseServer;
  }

  static async sedRequestToReadMessage(webSocket: WebSocket, idMessage: string): Promise<ResponseServer> {
    const payload = {
      message: {
        id: idMessage,
      },
    };
    const responseServer: ResponseServer = await this.sendRequest(webSocket, 'MSG_READ', payload);
    return responseServer;
  }
}
