import './login-form.scss';
import app from '../../index';
import Form from './form';
import Button from '../button/button';
import { LocalStorageKeys } from './../../utils/enums';
import { InputErrors, ValidationLengthInputs } from '../../utils/enums';

class LoginForm extends Form {
  nameInput: HTMLInputElement;

  surnameInput: HTMLInputElement;

  button: HTMLButtonElement;

  fieldValidation: boolean;

  nameErrorsArray: HTMLElement[];

  surnameErrorsArray: HTMLElement[];

  constructor() {
    super('login');
    this.nameInput = this.addInputTextWithLabel('loginName', 'First Name', 'John', 3, 15, true);
    this.nameInput.addEventListener('blur', this.checkValalidationInput.bind(this));
    this.surnameInput = this.addInputTextWithLabel('loginSurname', 'Surname', 'Smith', 4, 15, true);
    this.surnameInput.addEventListener('blur', this.checkValalidationInput.bind(this));
    this.button = Button.create('Login', ['button_login', 'button_big'], this.onClickButton.bind(this));
    this.fieldValidation = false;
    this.nameErrorsArray = [];
    this.surnameErrorsArray = [];
  }

  private onClickButton(event: Event) {
    if (this.fieldValidation && this.nameInput.value.length > 0 && this.surnameInput.value.length > 0) {
      app.login(this.nameInput.value, this.surnameInput.value);
      console.log('Сохраняем Юзера');
      console.log('загружаем страницу Правила');
    }
    if (this.nameInput.value.length === 0 || this.surnameInput.value.length === 0) {
      if (this.nameInput.value.length === 0) {
        let inputField = this.nameInput.parentElement;
        inputField.classList.add('invalided');
        const error = this.createErrorMessage(this.nameInput, 'emty');
        this.nameErrorsArray.push(error);
      }
      if (this.surnameInput.value.length === 0) {
        let inputField = this.surnameInput.parentElement;
        inputField.classList.add('invalided');
        const error = this.createErrorMessage(this.surnameInput, 'emty');
        this.surnameErrorsArray.push(error);
      }
    }
    event.preventDefault();
    return false;
  }

  private checkValalidationInput(event: Event) {
    let result: boolean = true;
    const pattern = /^[A-Za-z]*(-[A-Za-z]*)*$/;
    let inputField: HTMLElement;

    if (event.target === this.nameInput) {
      inputField = this.nameInput.parentElement;

      if (this.nameErrorsArray.length > 0) {
        this.nameErrorsArray.forEach((error) => error.remove());
        if (inputField.classList.contains('invalided')) inputField.classList.remove('invalided');
      }
      if (this.nameInput.value.length < +ValidationLengthInputs.NAME) {
        const error = this.createErrorMessage(this.nameInput, 'three');
        result = false;
        this.nameErrorsArray.push(error);
        if (!inputField.classList.contains('invalided')) inputField.classList.add('invalided');
      }
      if (this.nameInput.value.length > 0 && this.nameInput.value[0] != this.nameInput.value[0].toUpperCase()) {
        const error = this.createErrorMessage(this.nameInput, 'capital');
        result = false;
        this.nameErrorsArray.push(error);
        if (!inputField.classList.contains('invalided')) inputField.classList.add('invalided');
      }
      if (this.nameInput.value.length > 0 && !pattern.test(this.nameInput.value)) {
        const error = this.createErrorMessage(this.nameInput, 'bannedCharacters');
        result = false;
        this.nameErrorsArray.push(error);
        if (!inputField.classList.contains('invalided')) inputField.classList.add('invalided');
      }
    }

    if (event.target === this.surnameInput) {
      inputField = this.surnameInput.parentElement;

      if (this.surnameErrorsArray.length > 0) {
        this.surnameErrorsArray.forEach((error) => error.remove());
        if (inputField.classList.contains('invalided')) inputField.classList.remove('invalided');
      }
      if (this.surnameInput.value.length < +ValidationLengthInputs.SURNAME) {
        const error = this.createErrorMessage(this.surnameInput, 'four');
        result = false;
        this.surnameErrorsArray.push(error);
        if (!inputField.classList.contains('invalided')) inputField.classList.add('invalided');
      }
      if (
        this.surnameInput.value.length > 0 &&
        this.surnameInput.value[0] != this.surnameInput.value[0].toUpperCase()
      ) {
        const error = this.createErrorMessage(this.surnameInput, 'capital');
        result = false;
        this.surnameErrorsArray.push(error);
        if (!inputField.classList.contains('invalided')) inputField.classList.add('invalided');
      }
      if (this.surnameInput.value.length > 0 && !pattern.test(this.surnameInput.value)) {
        const error = this.createErrorMessage(this.surnameInput, 'bannedCharacters');
        result = false;
        this.surnameErrorsArray.push(error);
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
      case 'four':
        errorMessage = InputErrors.LENGTHFOUR;
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
