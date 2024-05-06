import App from '../app/app';
import PopUp from '../components/popUp/popUp';
import { ResponseServer } from '../utils/interfaces.ts/interfaces';
import { UrlPath } from '../utils/enums/url-path';

const userError: string[] = [
  'a user with this login is already authorized',
  'incorrect password',
  'the user with the specified login does not exist',
  'incorrect password',
  'the user was not authorized',
];

export default class ErrorsFromResponses {
  message: ResponseServer;

  id: string;

  error: string;

  constructor(errorMessage: ResponseServer) {
    this.message = errorMessage;
    this.id = errorMessage.id;
    this.error = errorMessage.payload.error;
  }

  private handlerUserError(app: App) {
    if (window.location.pathname != UrlPath.LOGIN) {
      app.logout();
    }
  }

  public catchError(app: App) {
    const errorText = this.message.payload.error;
    if (typeof errorText === 'string') {
      if (userError.indexOf(errorText) > 0) this.handlerUserError(app);
      this.displayError(this.message.payload.error);
    }
  }

  public displayError(text: string) {
    PopUp.create(['popUp_error'], 'Oops!', text);
  }
}
