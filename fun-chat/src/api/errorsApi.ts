import PopUp from '../components/popUp/popUp';
import { ResponseServer } from '../utils/interfaces.ts/interfaces';

const errorText: { [key: string]: string } = {
  ALREADY_LOGGED: 'a user with this login is already authorized',
  AUTHENTICATION_INCORRECT_PASSWORD: 'incorrect password',

  //LOGOUT_LOGIN_DOESNT_EXIST = 'the user with the specified login does not exist',
  //LOGOUT_INCORRECT_PASSWORD = 'incorrect password',
  //LOGOUT_NOT_AUTHORISED = 'the user was not authorized',
  //LOGOUT_ALREADY_AUTHORISED = 'a user with this login is already authorized',

  //MESSAGE_SEND_TO_YOURSELF = 'sender and recipient logins are the same',
  //MESSAGE_LOGIN_DOESNT_EXIST = 'the user with the specified login does not exist',
  //MESSAGE_SENDER_ERROR = 'user not registered or not logged',

  // MESSAGE_HISTORY_SEND_TO_YOURSELF = 'sender and recipient logins are the same',
  //MESSAGE_HISTORY_LOGIN_DOESNT_EXIST = 'the user with the specified login does not exist',
  //MESSAGE_HISTORY_SENDER_ERROR = 'user not registered or not logged',
};

export default class ErrorsFromResponses {
  message: ResponseServer;

  id: string;

  error: string;

  constructor(errorMessage: ResponseServer) {
    this.message = errorMessage;
    this.id = errorMessage.id;
    this.error = errorMessage.payload.error;
  }

  private checkTypeError(text: string): string {
    let result: string;
    for (const key in errorText) {
      if (errorText[key] === text) {
        console.log(text);
        result = key;
      }
    }
    if (!result) {
      throw new Error(this.error);
    }
    return result;
  }

  public catchError() {
    // const typeError = this.checkTypeError(this.message.payload.error);
    this.displayError(this.message.payload.error);
  }

  public displayError(text: string) {
    PopUp.create(['popUp_error'], 'Oops!', text);
  }
}
