import './game-page.scss';
import Page from '../page';
import App from '../../app/app';
import Button from '../../components/button/button';

class GamePage extends Page {
  constructor(app: App) {
    super('page_game', app);
  }

  private createBasicTemplate() {
    const pageContainer: HTMLDivElement = document.createElement('div');
    pageContainer.className = 'page__container';
    this.content = pageContainer;

    const header: HTMLElement = document.createElement('header');
    const logotype: HTMLElement = document.createElement('div');
    const button: HTMLButtonElement = Button.create(
      'Logout',
      ['button_logout', 'button_small'],
      this.app.logout.bind(this.app)
    );
    logotype.className = 'logotype';
    header.append(logotype);
    header.append(button);

    const main: HTMLElement = document.createElement('main');
    const puzzleField = this.createPuzzleField();
    const sourceField = this.createSourseField();

    this.app.game.sourceField = sourceField;
    this.app.game.puzzleField = puzzleField;

    const buttonsRow: HTMLDivElement = document.createElement('div');
    buttonsRow.className = 'puzzle__buttons-row';
    const buttonCheck = this.addCheckContinue();
    const buttonContinue = this.addButtonContinue();
    this.app.game.buttonContinue = buttonContinue;
    this.app.game.buttonCheck = buttonCheck;
    buttonsRow.append(buttonCheck);
    buttonsRow.append(buttonContinue);

    main.append(puzzleField);
    main.append(sourceField);
    main.append(buttonsRow);

    this.content.append(header);
    this.content.append(main);
  }

  private createPuzzleField(): HTMLElement {
    const puzzle = document.createElement('div');
    puzzle.className = 'puzzle';
    const resultField: HTMLOListElement = document.createElement('ol');
    resultField.className = 'puzzle__result-field';
    for (let i = 1; i < 11; i++) {
      //10 is number of rows in puzzle
      const liRow: HTMLElement = document.createElement('li');
      liRow.className = 'puzzle__result-row';
      resultField.append(liRow);
    }
    puzzle.append(resultField);
    return puzzle;
  }

  private createSourseField(): HTMLElement {
    const sourceField: HTMLDivElement = document.createElement('div');
    sourceField.className = 'puzzle__source-field';
    return sourceField;
  }

  public drawGamePage() {
    this.changeBodyClass();
    this.createBasicTemplate();
    this.drawPages(this.content);
    const footer: HTMLElement = document.createElement('footer');
    document.body.append(footer);
  }

  private addButtonContinue() {
    const button = Button.create('Continue', ['button_continue', 'button_small', 'hidden'], () =>
      this.app.game.buttonContinueOnClick.bind(this.app.game)()
    );
    button.disabled = true;
    return button;
  }

  private addCheckContinue() {
    const button = Button.create('Check', ['button_check', 'button_small'], () =>
      this.app.game.buttonChekcOnClick.bind(this.app.game)()
    );
    button.disabled = true;
    return button;
  }
}

export default GamePage;
