export interface RequestOrResponse<T> {
  id: string;
  type: string;
  payload: T;
}
export interface UserRequest {
  user: User;
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
export interface ErrorResponse {
  error: string;
}
