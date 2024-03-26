import './form.scss';
import Button from '../button/button';

class Form {
  static create(
    value: string,
    color: string,
    className: string,
    buttonText: string,
    buttonClassList: string[],
    buttonHandler: (event: Event) => void
  ): HTMLDivElement {
    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.className = 'form-wrapper';

    const form: HTMLFormElement = document.createElement('form');
    form.className = `form_${className} form`;

    const inputText: HTMLInputElement = document.createElement('input');
    inputText.className = 'form__input input_text';
    inputText.type = 'text';
    inputText.maxLength = 20;
    inputText.pattern = '^[a-zA-Z0-9]+$';
    inputText.value = value;

    const inputColor: HTMLInputElement = document.createElement('input');
    inputColor.className = 'form__input input_color';
    inputColor.type = 'color';
    inputColor.value = color;

    const button = Button.create(buttonText, buttonClassList, buttonHandler);

    form.append(inputText);
    form.append(inputColor);
    form.append(button);
    wrapper.append(form);
    return wrapper;
  }
}

export default Form;
