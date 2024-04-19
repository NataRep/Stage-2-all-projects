import Dialogue from '../../components/chat/dialogue/dialogue';

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
    message?: MessageResponse;
    messages?: MessageResponse[];
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
export interface MessageResponse {
  id: string;
  from?: string;
  to?: string;
  text?: string;
  datetime?: number;
  status?: {
    isDelivered?: boolean;
    isReaded?: boolean;
    isEdited?: boolean;
  };
}

export interface ChatMessage {
  message: MessageResponse;
  element: HTMLElement;
}

export interface UserChat {
  userData: {
    login: string;
    isLogined: boolean;
  };
  userDialogue: Dialogue;
  userEl: HTMLElement;
}
