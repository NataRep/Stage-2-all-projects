import './login-page.scss';
import FirstPage from '../first-page';
import LoginForm from '../../components/form/login-form';

export class LoginPage extends FirstPage {
  private addLoginForm(elem: HTMLElement) {
    const formHTML = new LoginForm(this.app).create();
    elem.append(formHTML);
  }

  public drawLoginPage() {
    this.changeBodyClass();
    this.createBasicContent('Learn English by playing!');
    this.addLoginForm(this.content.querySelector('main'));
    this.drawPages(this.content);
  }
}
