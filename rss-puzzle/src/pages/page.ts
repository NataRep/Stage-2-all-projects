class Page {
  className: string;

  constructor(className: string) {
    this.className = className;
  }

  protected changeBodyClass() {
    document.body.className = `${this.className} page`;
  }

  protected drawPages(...elements: HTMLElement[]) {
    document.body.innerHTML = '';
    elements.forEach((el) => document.body.append(el));
  }
}

export default Page;
