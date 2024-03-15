import './word.scss';

class Word {
  value: string;

  element: HTMLElement;

  constructor(str: string, index: number) {
    this.value = str;
    this.element = this.createElement(this.value);
  }

  private createElement(str: string): HTMLElement {
    const div: HTMLDivElement = document.createElement('div');
    div.innerHTML = str;
    div.className = 'word';
    return div;
  }
}

export default Word;
