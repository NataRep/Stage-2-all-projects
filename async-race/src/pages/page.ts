import './page.scss';
import App from '../app/app';
import Navigation from '../components/nav/nav';

class Page {
  protected mainContent: HTMLElement;

  constructor(app: App) {
    this.mainContent = document.createElement('div');
    this.mainContent.classList.add('main-content');
    const nav = new Navigation(app).render();
    this.mainContent.append(nav);
  }

  public render() {
    document.body.append(this.mainContent);
  }

  public clearContent() {
    document.body.innerHTML = '';
  }
}

export default Page;
