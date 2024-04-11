import { ErrorResponse } from '../utils/interfaces.ts/interfaces';
import { RequestOrResponse } from '../utils/interfaces.ts/interfaces';

export default class ErrorsFromResponses {
  id: string;
  error: string;

  constructor(errorMessage: RequestOrResponse<ErrorResponse>) {
    this.id = errorMessage.id;
    this.error = errorMessage.payload.error;
  }

  throwError() {
    throw new Error(this.error);
  }

  private checkTypeError(id: string) {}

  private catchLoginError() {}
}
