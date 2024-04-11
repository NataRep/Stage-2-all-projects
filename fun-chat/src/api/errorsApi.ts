import { ErrorResponse } from '../utils/interfaces.ts/api.interfaces';
import { RequestOrResponse } from '../utils/interfaces.ts/api.interfaces';

export default class ResponsesForErrors {
  id: string;
  error: string;

  constructor(errorMessage: RequestOrResponse<ErrorResponse>) {
    this.id = errorMessage.id;
    this.error = errorMessage.payload.error;
  }

  throwError() {
    throw new Error(this.error);
  }
}
