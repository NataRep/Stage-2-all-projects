import './game-page.scss';
import Page from '../page';
import App from '../../app/app';
import Button from '../../components/button/button';
import DragAndDrop from '../../components/drag-and-drop/mouse';

class GamePage extends Page {
  constructor(app: App) {
    super('page_game', app);
  }

  private createBasicTemplate() {
    const pageContainer: HTMLDivElement = document.createElement('div');
    pageContainer.className = 'page__container';
    this.content = pageContainer;
    //Header
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
    //Main
    const main: HTMLElement = document.createElement('main');
    const puzzleField = this.createPuzzleField();
    const sourceField = this.createSourseField();
    //remember field in game
    this.app.game.sourceField = sourceField;
    sourceField.addEventListener('dragover', DragAndDrop.onDragOver);
    sourceField.addEventListener('drop', (event: DragEvent) => {
      DragAndDrop.onDrop(event, this.app.game);
      this.app.game.chekWin();
    });
    sourceField.addEventListener('dragenter', (event: DragEvent) => DragAndDrop.onDragEnter(event, this.app.game));
    this.app.game.puzzleField = puzzleField;
    //buttons
    const buttonsRow: HTMLDivElement = document.createElement('div');
    buttonsRow.className = 'puzzle__buttons-row';
    const buttonCheck = this.addButtonCheck();
    const buttonContinue = this.addButtonContinue();
    const buttonAuto = this.addButtonAutoCollect();
    this.app.game.buttonAutoCollect = buttonAuto;
    this.app.game.buttonContinue = buttonContinue;
    this.app.game.buttonCheck = buttonCheck;
    buttonsRow.append(buttonAuto);
    buttonsRow.append(buttonCheck);
    buttonsRow.append(buttonContinue);
    //fill main
    main.append(puzzleField);
    main.append(sourceField);
    main.append(buttonsRow);
    //fill content
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

  private addButtonCheck() {
    const button = Button.create('Check', ['button_check', 'button_small', 'hidden'], () =>
      this.app.game.buttonChekcOnClick.bind(this.app.game)()
    );
    button.disabled = true;
    return button;
  }

  private addButtonAutoCollect() {
    const button = Button.create('I don`t know', ['button_auto', 'button_small'], () =>
      this.app.game.buttonAutoCollectOnClick.bind(this.app.game)()
    );
    return button;
  }
}

export default GamePage;
