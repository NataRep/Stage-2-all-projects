export interface RequestFormat<T> {
  id: string | null;
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
