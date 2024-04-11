import App from '../../app/app';
import LoginForm from '../../components/form/login-form';
import { createLogotype } from '../../components/logotype/logotype';
import Page from '../page';
import './login-page.scss';

export default class LoginPage extends Page {
  constructor(app: App) {
    super();
    const logotype = createLogotype();
    const loginForm = new LoginForm(app).create();
    this.mainContent.append(logotype);
    this.mainContent.append(loginForm);
  }
}
