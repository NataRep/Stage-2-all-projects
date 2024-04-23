export default class Elem {
  static create(tag: string, classArray: string[], inner?: string): HTMLElement {
    const elem = document.createElement(tag);
    classArray.forEach((className) => elem.classList.add(className));
    if (inner) elem.innerHTML = inner;
    return elem;
  }
}
