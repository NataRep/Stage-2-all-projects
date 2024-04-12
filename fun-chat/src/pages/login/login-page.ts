import App from '../../app/app';
import LoginForm from '../../components/form/login-form';
import { createLogotype } from '../../components/logotype/logotype';
import Page from '../page';
import './login-page.scss';

export default class LoginPage extends Page {
  loginForm: LoginForm;

  constructor(app: App) {
    super();
    const logotype = createLogotype();
    this.loginForm = new LoginForm(app);
    const loginFormEl = this.loginForm.create();
    this.mainContent.append(logotype);
    this.mainContent.append(loginFormEl);
    app.appHtmlEllements.loginForm = loginFormEl;
  }

  public open(app: App) {
    this.loginForm.clear();
    this.render();
  }
}
