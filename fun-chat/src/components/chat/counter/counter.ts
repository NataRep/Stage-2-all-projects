export default class Counter {
  count: number;

  elem: HTMLElement;

  constructor() {
    this.count = 0;
    this.elem = this.createEl();
  }

  createEl(): HTMLElement {
    const elem: HTMLElement = document.createElement('div');
    elem.className = 'users-list__user-counter counter_zero';
    if (this.count) {
      elem.innerHTML = String(this.count);
    }
    return elem;
  }

  public increase() {
    this.count += 1;
    this.elem.innerHTML = String(this.count);
    if (this.elem.classList.contains('counter_zero')) this.elem.classList.remove('counter_zero');
  }

  public reduce() {
    this.count -= 1;
    this.elem.innerHTML = this.count <= 0 ? '' : String(this.count);
    if (this.elem.innerHTML === '') this.elem.classList.add('counter_zero');
  }

  public clear() {
    this.count = 0;
    this.elem.innerHTML = '';
    this.elem.classList.add('counter_zero');
  }
}
