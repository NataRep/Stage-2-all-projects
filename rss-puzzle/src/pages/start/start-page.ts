import './start-page.scss';
import FirstPage from '../first-page';
import GamePage from '../game/game-page';
import Button from '../../components/button/button';

class StartPage extends FirstPage {
  private createGreetings() {
    let user: string = '';
    if (this.app.user) {
      user = `${this.app.user.name} ${this.app.user.surname}`;
    } else {
      user = `${JSON.parse(localStorage.getItem('user_puzzle-nuttik')).name} ${JSON.parse(localStorage.getItem('user_puzzle-nuttik')).surname}`;
    }
    return `Hello, ${user}!`;
  }

  private addRules() {
    const main = this.content.querySelector('main') as HTMLElement;
    const rulesDiv: HTMLDivElement = document.createElement('div');
    rulesDiv.className = 'start-rules';

    const rulesHeding: HTMLHeadingElement = document.createElement('h3');
    rulesHeding.className = 'start-rules__h3';
    rulesHeding.innerHTML = 'Game rules:';

    const rulesText: HTMLElement = document.createElement('p');
    rulesText.className = 'start-rules__text';

    const rulesStr: string =
      'Put the words in the correct order and collect phrases.\nYou can drag and drop the words.\nYou can use hints: translation, picture and hear the sentence.\nGuess the phrases and complete the puzzle!';

    rulesDiv.append(rulesHeding);
    rulesDiv.append(rulesText);
    main.append(rulesDiv);

    let index = 0;
    const typeText = setInterval(() => {
      if (index === rulesStr.length) {
        clearInterval(typeText);
      } else {
        rulesText.innerHTML += rulesStr[index].replace(/\n/g, '<br/>');
        index += 1;
      }
    }, 50);
  }

  private addStartButton() {
    const main = this.content.querySelector('main') as HTMLElement;
    const button: HTMLButtonElement = Button.create('Start', ['button_start', 'button_big'], () => {
      const gamePage = new GamePage(this.app);
      gamePage.drawGamePage();
    });
    main.append(button);
  }

  private addLogoutButton() {
    const button: HTMLButtonElement = Button.create(
      'Logout',
      ['button_logout', 'button_small'],
      this.app.logout.bind(this.app)
    );
    this.content.prepend(button);
  }

  public drawStartPage() {
    this.changeBodyClass();
    this.createBasicContent(this.createGreetings());
    this.addRules();
    this.addStartButton();
    this.addLogoutButton();
    this.drawPages(this.content);
  }
}

export default StartPage;
