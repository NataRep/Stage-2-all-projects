import Page from './page';
import './first-page.scss';

export class FirstPage extends Page {
  heading: string;

  constructor() {
    super('page_app-cover');
    this.heading = 'English Puzzle';
  }

  protected createH1(): HTMLElement {
    const heading: HTMLHeadingElement = document.createElement('h1');
    heading.innerHTML = this.heading;
    return heading;
  }
}
