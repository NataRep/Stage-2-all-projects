export interface LoginFormIntarface {
  nameInput: HTMLInputElement;
  surenameInput: HTMLInputElement;
  button: HTMLButtonElement;
  createErrorMessage: (input: HTMLInputElement, type: string) => void;
}
