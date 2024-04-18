import App from '../../app/app';
import LoginForm from '../../components/form/login-form/login-form';
import { createLogotype } from '../../components/logotype/logotype';
import Page from '../page';
import Button from '../../components/button/button';
import './login-page.scss';

export default class LoginPage extends Page {
  loginForm: LoginForm;

  constructor(app: App) {
    super();
    const loginContentWrapper = document.createElement('div');
    loginContentWrapper.className = 'login-page-wrapper';
    const logotype = createLogotype();
    this.loginForm = new LoginForm(app);
    const loginFormEl = this.loginForm.create();
    const buttonAbout = Button.create('About Chat', ['button_about'], () => {
      app.router.urlRoute(app, app.router.urlPath.ABOUT);
    });
    loginContentWrapper.append(logotype);
    loginContentWrapper.append(buttonAbout);
    loginContentWrapper.append(loginFormEl);
    this.mainContent.append(loginContentWrapper);
  }

  public open() {
    this.loginForm.clear();
    this.render();
  }
}
