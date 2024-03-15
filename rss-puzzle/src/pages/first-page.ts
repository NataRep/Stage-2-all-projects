import App from '../app/app';
import Page from './page';
import './first-page.scss';

class FirstPage extends Page {
  heading: string;

  constructor(app: App) {
    super('page_app-cover', app);
    this.heading = 'English Puzzle';
  }

  protected createH1(): HTMLElement {
    const heading: HTMLHeadingElement = document.createElement('h1');
    heading.innerHTML = this.heading;
    return heading;
  }

  protected createBasicContent(h2Text: string) {
    const pageContainer: HTMLDivElement = document.createElement('div');
    pageContainer.className = 'page__container';
    const h1 = this.createH1();
    const main: HTMLElement = document.createElement('main');
    const h2: HTMLHeadingElement = document.createElement('h2');
    h2.innerHTML = h2Text;
    main.append(h2);
    pageContainer.append(h1);
    pageContainer.append(main);
    this.content = pageContainer;
  }
}

export default FirstPage;
