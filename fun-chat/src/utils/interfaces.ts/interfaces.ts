export interface RequestServer<T> {
  id: string;
  type: string;
  payload: T;
}
export interface ResponseServer {
  id: string;
  type: string;
  payload: {
    user?: UserResponse;
    error?: string;
    users?: UserResponse[];
    message?: messageResponse;
    messages?: messageResponse[];
  };
}

export interface UserRequest {
  user: User;
}

export interface UserResponse {
  login: string;
  isLogined: boolean;
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
export interface messageResponse {
  id: string;
  from: string;
  to: string;
  text: string;
  datetime: number;
  status: {
    isDelivered: boolean;
    isReaded: boolean;
    isEdited: boolean;
  };
}

export interface ChatMessage {
  message: messageResponse;
  element: HTMLElement;
}
