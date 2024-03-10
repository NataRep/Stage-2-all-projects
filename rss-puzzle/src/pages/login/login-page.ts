import './login-page.scss';
import { FirstPage } from '../first-page';
import LoginForm from '../../components/form/login-form';

export class LoginPage extends FirstPage {
  content: HTMLElement;

  private createContent() {
    const pageContainer: HTMLDivElement = document.createElement('div');
    pageContainer.className = 'page__container';
    const h1 = this.createH1();
    const main: HTMLElement = document.createElement('main');
    const h2: HTMLHeadingElement = document.createElement('h2');
    h2.innerHTML = 'Learn English by playing!';

    const formHTML = new LoginForm().create();

    main.append(h2);
    main.append(formHTML);
    pageContainer.append(h1);
    pageContainer.append(main);
    this.content = pageContainer;
  }

  public drawLoginPage() {
    this.changeBodyClass();
    this.createContent();
    this.drawPages(this.content);
  }
}
