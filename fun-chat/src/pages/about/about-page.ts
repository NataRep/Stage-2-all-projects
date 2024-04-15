import { Header } from '../../components/header/header';
import Page from '../page';
import App from '../../app/app';
import Footer from '../../components/footer/footer';

export default class AboutPage extends Page {
  constructor(app: App) {
    super();

    const header = Header.create(app) as HTMLElement;
    const main = document.createElement('main');
    const footer = Footer.create();
    const h1 = document.createElement('h1');
    h1.innerHTML = 'About Fun Chat';
    const text = document.createElement('div');
    text.innerHTML = 'Тут будет описание проекта';
    main.append(h1);
    main.insertAdjacentHTML('beforeend', TEXT);
    this.mainContent.append(header);
    this.mainContent.append(main);
    this.mainContent.append(footer);
  }
}

const TEXT = `<p>The app was created as part of the <a href="https://rs.school/courses/javascript-mentoring-program">JS / Front-end course</a> at <a href='https://rs.school'>The Rolling Scopes School</a> in 2024.</p>
  <p>Author of the application: <a href="https://github.com/Nuttik">Natalia Repkina</a>.</p>
  <h2>Gratitude:</h2>
  <p> I express my gratitude to <b>the whole team of the school</b>.</p>
  <p>Thanks to <b>my mentor <a href="https://github.com/rimidalu">Vladimir Stankevich</a></b> for his help, patience and motivation.</p>
  <p>I thank <b>all the students</b> who have helped me out more than once with advice and words of encouragement on discord.</p>
<p> It is a great adventure to learn on this courses!</p>`;
