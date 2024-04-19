export default class Counter {
  count: number;

  elem: HTMLElement;

  constructor() {
    this.count = 0;
    this.elem = this.createEl();
  }

  createEl(): HTMLElement {
    const elem: HTMLElement = document.createElement('div');
    elem.className = 'users-list__urer-counter';
    if (this.count) {
      elem.innerHTML = String(this.count);
    }
    return elem;
  }

  public increase() {
    this.count += 1;
    this.elem.innerHTML = String(this.count);
  }

  public clear() {
    this.count = 0;
    this.elem.innerHTML = String(this.count);
  }
}
