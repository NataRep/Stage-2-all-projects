import './word.scss';

class Word {
  value: string;

  element: HTMLElement;

  constructor(str: string) {
    this.value = str;
    this.element = this.createElement(this.value);
  }

  private createElement(str: string): HTMLElement {
    const div: HTMLDivElement = document.createElement('div');
    div.innerHTML = str;
    div.className = 'word';
    return div;
  }

  public setElementWidth(strArray: string[]) {
    const totalNumberOfLetters = strArray.join('').length;
    const wordNumberOfLetters = this.value.length;
    const width = (100 / totalNumberOfLetters) * wordNumberOfLetters;
    this.element.style.width = `${width}%`;
  }
}

export default Word;
