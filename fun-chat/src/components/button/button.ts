import './button.scss';
class Button {
  static create(text: string, className: string[], handler: (event: Event) => void) {
    const button: HTMLButtonElement = document.createElement('button');
    button.className = `button`;
    className.forEach((str) => button.classList.add(str));
    button.innerHTML = text;
    button.addEventListener('click', handler);
    button.addEventListener('click', (event: Event) => event.preventDefault());
    return button;
  }
}
export default Button;
