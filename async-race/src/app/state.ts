export class State {
  inputCreateValue: string;

  inputCreateColor: string;

  inputUpdateValue: string;

  inputUpdateColor: string;

  constructor(value1: string, color1: string, value2: string, color2: string) {
    this.inputCreateValue = value1;
    this.inputCreateColor = color1;
    this.inputUpdateValue = value2;
    this.inputUpdateColor = color2;
  }
}
