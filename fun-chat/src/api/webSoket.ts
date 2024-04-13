export default class AppWebSocket {
  url: string;

  constructor() {
    const URL = 'ws://localhost:4000';
    new WebSocket(URL);
  }
}
