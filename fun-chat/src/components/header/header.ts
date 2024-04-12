import App from '../../app/app';
import { createLogotype } from '../logotype/logotype';
import './header.scss';

export class Header {
  static create(app: App): HTMLElement {
    const header = document.createElement('header');
    header.className = 'header';
    const logotype = createLogotype();
    const buttonsRow = document.createElement('div');
    buttonsRow.className = 'header__button-row';
    const buttonAbout = app.appHtmlEllements.buttonAbout;
    const buttonLogout = app.appHtmlEllements.buttonLogout;
    buttonsRow.append(buttonAbout);
    buttonsRow.append(buttonLogout);
    header.append(logotype);
    header.append(buttonsRow);
    return header;
  }
}
