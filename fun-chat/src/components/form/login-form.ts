import './login-form.scss';
import App from '../../app/app';
import Form from './form';
import Button from '../button/button';
import { InputErrors, ValidationLengthInputs } from '../../utils/enums/login-form-enums';

class LoginForm extends Form {
  loginInput: HTMLInputElement;

  passwordInput: HTMLInputElement;

  button: HTMLButtonElement;

  fieldValidation: boolean;

  loginErrorsArray: HTMLElement[];

  passwordErrorsArray: HTMLElement[];

  constructor(app: App) {
    super('login', app);
    this.loginInput = this.addInputTextWithLabel('login', 'Login', 'John', 3, 15, true);
    this.loginInput.addEventListener('blur', this.checkValalidationInput.bind(this));
    this.passwordInput = this.addInputTextWithLabel('loginSurname', 'Password', '', 6, 15, true);
    this.passwordInput.addEventListener('blur', this.checkValalidationInput.bind(this));
    this.button = Button.create('Login', ['button_login', 'button_big'], this.onClickButton.bind(this));
    this.fieldValidation = false;
    this.loginErrorsArray = [];
    this.passwordErrorsArray = [];
  }

  private onClickButton(event: Event) {
    if (this.fieldValidation && this.loginInput.value.length > 0 && this.passwordInput.value.length > 0) {
      this.app.login(this.loginInput.value, this.passwordInput.value);
      //const startPages = new StartPage(this.app);
      //startPages.drawStartPage();
    }
    if (this.loginInput.value.length === 0 || this.passwordInput.value.length === 0) {
      if (this.loginInput.value.length === 0) {
        const inputField = this.loginInput.parentElement;
        inputField.classList.add('invalided');
        const error = this.createErrorMessage(this.loginInput, 'emty');
        this.loginErrorsArray.push(error);
      }
      if (this.passwordInput.value.length === 0) {
        const inputField = this.passwordInput.parentElement;
        inputField.classList.add('invalided');
        const error = this.createErrorMessage(this.passwordInput, 'emty');
        this.passwordErrorsArray.push(error);
      }
    }
    event.preventDefault();
    return false;
  }

  private checkValalidationInput(event: Event) {
    let result: boolean = true;
    const pattern = /^[a-zA-Z]+$/;
    let inputField: HTMLElement;

    if (event.target === this.loginInput) {
      inputField = this.loginInput.parentElement;

      if (this.loginErrorsArray.length > 0) {
        this.loginErrorsArray.forEach((error) => error.remove());
        if (inputField.classList.contains('invalided')) inputField.classList.remove('invalided');
      }
      if (this.loginInput.value.length < +ValidationLengthInputs.NAME) {
        const error = this.createErrorMessage(this.loginInput, 'three');
        result = false;
        this.loginErrorsArray.push(error);
        if (!inputField.classList.contains('invalided')) inputField.classList.add('invalided');
      }
      if (this.loginInput.value.length > 0 && this.loginInput.value[0] != this.loginInput.value[0].toUpperCase()) {
        const error = this.createErrorMessage(this.loginInput, 'capital');
        result = false;
        this.loginErrorsArray.push(error);
        if (!inputField.classList.contains('invalided')) inputField.classList.add('invalided');
      }
      if (this.loginInput.value.length > 0 && !pattern.test(this.loginInput.value)) {
        const error = this.createErrorMessage(this.loginInput, 'bannedCharacters');
        result = false;
        this.loginErrorsArray.push(error);
        if (!inputField.classList.contains('invalided')) inputField.classList.add('invalided');
      }
    }

    if (event.target === this.passwordInput) {
      inputField = this.passwordInput.parentElement;

      if (this.passwordErrorsArray.length > 0) {
        this.passwordErrorsArray.forEach((error) => error.remove());
        if (inputField.classList.contains('invalided')) inputField.classList.remove('invalided');
      }
      if (this.passwordInput.value.length < +ValidationLengthInputs.PASSWORD) {
        const error = this.createErrorMessage(this.passwordInput, 'six');
        result = false;
        this.passwordErrorsArray.push(error);
        if (!inputField.classList.contains('invalided')) inputField.classList.add('invalided');
      }
      if (this.passwordInput.value.length > 0 && !pattern.test(this.passwordInput.value)) {
        const error = this.createErrorMessage(this.passwordInput, 'bannedCharacters');
        result = false;
        this.passwordErrorsArray.push(error);
        if (!inputField.classList.contains('invalided')) inputField.classList.add('invalided');
      }
    }

    this.fieldValidation = result;
  }

  private createErrorMessage(input: HTMLInputElement, type: string) {
    const error = document.createElement('div');
    error.className = 'input-field__error';

    let errorMessage: string;

    switch (type) {
      case 'three':
        errorMessage = InputErrors.LENGTHTHREE;
        break;
      case 'six':
        errorMessage = InputErrors.LENGTHSIX;
        break;
      case 'capital':
        errorMessage = InputErrors.CAPITALFIRSTLETTER;
        break;
      case 'bannedCharacters':
        errorMessage = InputErrors.CHARACTERS;
        break;
      case 'emty':
        errorMessage = InputErrors.EMPTY;
        break;
    }

    error.innerHTML = errorMessage;
    const inputParrent = input.parentNode as HTMLElement;
    inputParrent.after(error);

    return error;
  }
}
export default LoginForm;
