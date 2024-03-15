import App from '../app/app';
class Page {
  className: string;

  app: App;

  content: HTMLElement;

  constructor(className: string, app: App) {
    this.className = className;
    this.app = app;
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
