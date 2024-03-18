import User from './user';
import Word from '../components/word/word';
import DragAndDrop from '../components/drag-and-drop/mouse';
import WordsList from '../components/words-list/wordsList';
import { TaskIntarface, LevelDataInterfase } from '../utils/interfaces';
import dataLevel1 from './../assets/data/wordCollectionLevel1.json';
import dataLevel2 from './../assets/data/wordCollectionLevel2.json';
import dataLevel3 from './../assets/data/wordCollectionLevel3.json';
import dataLevel4 from './../assets/data/wordCollectionLevel4.json';
import dataLevel5 from './../assets/data/wordCollectionLevel5.json';
import dataLevel6 from './../assets/data/wordCollectionLevel6.json';

class Game {
  user: User;

  level: number;

  round: number;

  puzzleField: HTMLElement;

  sourceField: HTMLElement;

  rowIndex: number;

  currentLevelData: LevelDataInterfase;

  curentTaskData: TaskIntarface;

  result: WordsList;

  source: WordsList;

  taskWords: string[];

  buttonContinue: HTMLButtonElement;

  buttonCheck: HTMLButtonElement;

  buttonAutoCollect: HTMLButtonElement;

  dropSource: WordsList | null;

  dropTarget: WordsList | null;

  dropPlace: HTMLElement | null;

  dropIndex: number | null;

  constructor(user: User, level: number, round: number) {
    this.user = user;
    this.level = level;
    this.round = round;
    this.rowIndex = 0;
    this.result = new WordsList();
    this.source = new WordsList();
  }

  public start() {
    this.setDataLevel(this.level);
    this.setBgImage();
    this.drawSource();
    const resultRow = this.puzzleField.children[0].children[this.rowIndex] as HTMLElement;
    resultRow.addEventListener('dragover', DragAndDrop.onDragOver);
    resultRow.addEventListener('drop', this.WordOnDrop.bind(this));
    resultRow.addEventListener('dragenter', this.wordOnDragenterEvent.bind(this));
  }

  private setDataLevel(level: number) {
    switch (level) {
      case 1:
        this.currentLevelData = dataLevel1;
        break;
      case 2:
        this.currentLevelData = dataLevel2;
        break;
      case 3:
        this.currentLevelData = dataLevel3;
        break;
      case 4:
        this.currentLevelData = dataLevel4;
        break;
      case 5:
        this.currentLevelData = dataLevel5;
        break;
      case 6:
        this.currentLevelData = dataLevel6;
        break;
      default:
        throw new Error(`Invalid level: ${level}`);
    }
  }

  private setBgImage() {
    const dataImagesSrc = this.currentLevelData.rounds[this.round - 1].levelData.imageSrc;
    const imageSrc = `assets/images/${dataImagesSrc}`;
    const puzzle = this.puzzleField.children[0] as HTMLElement;
    puzzle.style.backgroundImage = `url(${imageSrc})`;
  }

  private createTaskSource() {
    this.curentTaskData = this.currentLevelData.rounds[this.round - 1].words[this.rowIndex];
    this.taskWords = this.curentTaskData.textExample.split(' ');
    this.taskWords.forEach((str, index, array) => {
      const word = new Word(str);
      word.setElementWidth(this.taskWords);
      word.element.addEventListener('click', () => this.wordOnClick(word));
      word.element.draggable = true;
      word.element.addEventListener('dragstart', (event: DragEvent) => DragAndDrop.onDragStart(event, this));
      word.element.addEventListener('dragend', DragAndDrop.onDragEnd);
      word.element.addEventListener('dragenter', (event: DragEvent) => DragAndDrop.onDragEnter(event, this));
      word.element.addEventListener('dragleave', (event: DragEvent) => DragAndDrop.onDragLeave(event, this));
      this.source.push(word);

      if (index === 0) {
        word.element.classList.add('first');
      } else if (index === array.length - 1) {
        word.element.classList.add('last');
      }
    });
  }

  public drawSource() {
    this.createTaskSource();
    this.source.shuffle();
    let zIndex = this.source.length;
    this.source.forEachElem((elem) => {
      elem.element.style.zIndex = `${zIndex}`;
      zIndex -= 1;
    });
    let currentNode = this.source.head;
    while (currentNode) {
      this.sourceField.append(currentNode.value.element);
      currentNode = currentNode.next;
    }
  }

  private movingWord(
    elem: HTMLElement,
    word: Word,
    sourseList: WordsList,
    targetList: WordsList,
    soursePlace: HTMLElement,
    targetPlace: HTMLElement
  ) {
    sourseList.remove(elem);
    targetList.push(word);
    soursePlace.removeChild(elem);
    targetPlace.append(elem);
  }

  private checkElemetnType(word: Word): 'result' | 'source' {
    const elem = word.element;
    return Array.from(this.sourceField.childNodes).includes(elem) ? 'source' : 'result';
  }

  private wordOnClick(word: Word) {
    const typeWord: string = this.checkElemetnType(word);
    const resultRow = this.puzzleField.children[0].children[this.rowIndex] as HTMLElement;
    if (typeWord === 'source') {
      this.movingWord(word.element, word, this.source, this.result, this.sourceField, resultRow);
    } else {
      this.movingWord(word.element, word, this.result, this.source, resultRow, this.sourceField);
    }
    this.doAfterPlayersStep(word, resultRow);
  }

  public chekWin(): boolean {
    const resultStr: string = this.result.getWordsStrArray().join(' ');
    const dataStr = this.taskWords.join(' ');
    return resultStr === dataStr;
  }

  public doAfterPlayersStep(word: Word, row: HTMLElement) {
    //ПРОВЕРКА СТОР, УБРАТЬ!!!
    const resultStr: string = this.result.getWordsStrArray().join(' ');
    const dataStr = this.taskWords.join(' ');
    console.log(dataStr);
    console.log(resultStr);

    this.setActiveButtonCheck();
    if (this.chekWin()) {
      this.setActiveButtonContinue();
    }
    if (word.element.classList.contains('incorrect')) word.element.classList.remove('incorrect');
    row.classList.remove('checked');
    word.element.style.animationDelay = '0.1s';

    //hidden button I don`t know
    if (this.result.length === this.taskWords.length) {
      this.buttonAutoCollect.classList.add('hidden');
    } else if (this.buttonAutoCollect.classList.contains('hidden')) {
      this.buttonAutoCollect.classList.remove('hidden');
    }
    this.changeZIndex();
  }

  private setActiveButtonContinue() {
    const resultRow = this.puzzleField.children[0].children[this.rowIndex] as HTMLElement;
    this.buttonContinue.disabled = false;
    this.buttonContinue.classList.remove('hidden');
    this.buttonCheck.classList.add('hidden');
    this.buttonAutoCollect.classList.add('hidden');
    resultRow.classList.add('collected');
  }

  private setActiveButtonCheck() {
    if (this.result.length === this.taskWords.length && !this.chekWin()) {
      this.buttonCheck.classList.remove('hidden');
      this.buttonCheck.disabled = false;
    } else {
      if (!this.buttonCheck.classList.contains('hidden')) this.buttonCheck.classList.add('hidden');
      this.buttonCheck.disabled = true;
    }
  }

  public buttonContinueOnClick(): void {
    const maxRowInRound = 10;
    if (this.rowIndex < maxRowInRound - 1) {
      this.startNewRow();
    } else if (this.round < this.currentLevelData.roundsCount - 1 && this.rowIndex === maxRowInRound - 1) {
      this.round += 1;
      this.startNewRound(this.round);
      console.log(this.rowIndex);
    } else if (this.round === this.currentLevelData.roundsCount - 1 && this.rowIndex === maxRowInRound - 1) {
      this.level += 1;
      this.startNewLevel(this.level);
    }
  }

  private startNewRow() {
    this.buttonContinue.disabled = true;
    this.buttonContinue.classList.add('hidden');
    this.buttonAutoCollect.classList.remove('hidden');
    this.result = new WordsList();
    this.rowIndex += 1;
    this.start();
  }

  private startNewRound(round: number) {
    this.buttonContinue.classList.add('hidden');
    this.buttonAutoCollect.classList.remove('hidden');
    this.buttonContinue.disabled = true;
    this.clearWordsRow();
    this.clearDropData();
    this.result = new WordsList();
    this.round = round;
    this.rowIndex = 0;
    this.start();
  }

  private startNewLevel(level: number) {
    this.buttonContinue.classList.add('hidden');
    this.buttonAutoCollect.classList.remove('hidden');
    this.buttonContinue.disabled = true;
    this.round = 0;
    this.level = level;
    this.rowIndex = 0;
    this.result = new WordsList();
    this.clearWordsRow();
    this.clearDropData();
    this.start();
  }

  public buttonChekcOnClick() {
    const resultRow = this.puzzleField.children[0].children[this.rowIndex] as HTMLElement;
    resultRow.classList.add('checked');

    this.result.forEachElem((word: Word, index: number) => {
      if (this.taskWords[index] != word.value) {
        word.element.classList.add('incorrect');
      }
    });
  }

  public buttonAutoCollectOnClick() {
    //remove all words
    const resultRow = this.puzzleField.children[0].children[this.rowIndex] as HTMLElement;
    this.result.forEachElem((elem: Word) => {
      this.result.remove(elem.element);
    });
    Array.from(resultRow.children).forEach((elem) => elem.remove());

    Array.from(this.sourceField.children).forEach((elem) => elem.remove());
    this.source.forEachElem((elem: Word) => {
      this.source.remove(elem.element);
    });

    //add words in the correct order
    this.taskWords.forEach((str) => {
      const word = new Word(str);
      word.setElementWidth(this.taskWords);
      word.element.addEventListener('click', () => this.wordOnClick(word));
      this.result.push(word);
      resultRow.append(word.element);
    });
    resultRow.classList.add('collected');
    this.buttonContinue.classList.remove('hidden');
    this.buttonContinue.disabled = false;
    this.buttonCheck.classList.add('hidden');
    this.buttonAutoCollect.classList.add('hidden');
  }

  private WordOnDrop(event: DragEvent) {
    DragAndDrop.onDrop(event, this);
    this.chekWin();
  }

  private wordOnDragenterEvent(event: DragEvent) {
    DragAndDrop.onDragEnter(event, this);
  }

  private clearWordsRow() {
    const arrayResultRows = Array.from(this.puzzleField.children[0].children);
    arrayResultRows.forEach((row) => {
      row.remove();
      const liRow: HTMLElement = document.createElement('li');
      liRow.className = 'puzzle__result-row';
      this.puzzleField.children[0].append(liRow);
    });
  }

  private clearDropData() {
    this.dropSource = null;
    this.dropTarget = null;
    this.dropPlace = null;
    this.dropIndex = null;
  }

  private changeZIndex() {
    const resultRow = this.puzzleField.children[0].children[this.rowIndex] as HTMLElement;
    const arrayResult = Array.from(resultRow.children);
    let indexResult = arrayResult.length;
    arrayResult.forEach((word: HTMLElement) => {
      word.style.zIndex = `${indexResult}`;
      indexResult -= 1;
    });
    const arraySource = Array.from(this.sourceField.children);
    let indexSource = arraySource.length;
    arraySource.forEach((word: HTMLElement) => {
      word.style.zIndex = `${indexSource}`;
      indexSource -= 1;
    });
  }
}

export default Game;
