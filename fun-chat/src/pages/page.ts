import './page.scss';

class Page {
  public mainContent: HTMLElement;

  constructor() {
    this.mainContent = document.createElement('div');
    this.mainContent.classList.add('main-content');
  }

  public render() {
    document.body.append(this.mainContent);
  }

  static clearContent() {
    document.body.innerHTML = '';
  }
}

export default Page;
