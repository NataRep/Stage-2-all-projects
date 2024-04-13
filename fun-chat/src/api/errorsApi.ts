import { ResponseServer } from '../utils/interfaces.ts/interfaces';

export default class ErrorsFromResponses {
  id: string;

  error: string;

  constructor(errorMessage: ResponseServer) {
    this.id = errorMessage.id;
    this.error = errorMessage.payload.error;
  }

  public throwError() {
    throw new Error(this.error);
  }

  //private checkTypeError(id: string) {}

  //private catchLoginError() {}
}
