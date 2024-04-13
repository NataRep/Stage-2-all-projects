export interface RequestServer<T> {
  id: string;
  type: string;
  payload: T;
}
export interface ResponseServer {
  id: string;
  type: string;
  payload: {
    user?: User;
    error?: string;
  };
}
export interface UserRequest {
  user: User;
}
export interface UserRequestHistory {
  user: {
    login: string;
  };
}
export interface User {
  login: string;
  password: string;
}
export interface MessageRequest {
  message: {
    to: string;
    text: string;
  };
}
