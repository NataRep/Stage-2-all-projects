import User from './user';
import Word from '../components/word/word';
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
  }

  private setDataLevel(level: number) {
    switch (level) {
      case 1:
        this.currentLevelData = dataLevel1;
        break;
      case 2:
        this.currentLevelData = dataLevel2;
        break;
      case 2:
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
    console.log(puzzle);
    puzzle.style.backgroundImage = `url(${imageSrc})`;
  }

  private createTaskSource() {
    this.curentTaskData = this.currentLevelData.rounds[this.round - 1].words[this.rowIndex];
    this.taskWords = this.curentTaskData.textExample.split(' ');
    this.taskWords.forEach((str) => {
      const word = new Word(str);
      word.seteElementWidth(this.taskWords);
      word.element.addEventListener('click', () => this.wordOnClick(word));
      this.source.push(word);
    });
  }

  public drawSource() {
    this.createTaskSource();
    this.source.shuffle();
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

    this.setActiveButtonCheck();
    if (this.chekWin()) this.setActiveButtonContinue();

    const row = this.puzzleField.children[0].children[this.rowIndex] as HTMLElement;
    this.removeClassName(word.element, 'incorrect');
    this.removeClassName(row, 'checked');
    word.element.style.animationDelay = '0.1s';
  }

  private chekWin(): boolean {
    const resultStr: string = this.result.getWordsStrArray().join(' ');
    const dataStr = this.taskWords.join(' ');
    console.log(dataStr);
    console.log(resultStr);

    return resultStr === dataStr;
  }

  private setActiveButtonContinue() {
    const resultRow = this.puzzleField.children[0].children[this.rowIndex] as HTMLElement;
    this.buttonContinue.disabled = false;
    this.buttonContinue.classList.remove('hidden');
    this.buttonCheck.classList.add('hidden');
    resultRow.classList.add('collected');
  }

  private setActiveButtonCheck() {
    if (this.result.length === this.taskWords.length && !this.chekWin()) {
      this.buttonCheck.disabled = false;
    } else {
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
    this.buttonCheck.classList.remove('hidden');
    this.result = new WordsList();
    this.rowIndex += 1;
    this.start();
  }

  private startNewRound(round: number) {
    this.buttonContinue.classList.add('hidden');
    this.buttonCheck.classList.remove('hidden');
    this.buttonContinue.disabled = true;
    this.clearWordsRow();
    this.result = new WordsList();
    this.round = round;
    this.rowIndex = 0;
    this.start();
  }

  private startNewLevel(level: number) {
    this.buttonContinue.classList.add('hidden');
    this.buttonCheck.classList.remove('hidden');
    this.buttonContinue.disabled = true;
    this.round = 0;
    this.level = level;
    this.rowIndex = 0;
    this.result = new WordsList();
    this.clearWordsRow();
    this.start();
  }

  private clearWordsRow() {
    const arrayResultRows = Array.from(this.puzzleField.children[0].children);
    arrayResultRows.forEach((row) => {
      row.innerHTML = '';
      row.classList.remove('collected');
    });
  }

  public buttonChekcOnClick() {
    const resultRow = this.puzzleField.children[0].children[this.rowIndex] as HTMLElement;
    resultRow.classList.add('checked');

    this.result.forEachElem((word: Word, index: number) => {
      console.log(this.taskWords[index]);
      console.log(word.value);
      if (this.taskWords[index] != word.value) {
        word.element.classList.add('incorrect');
      }
    });

    console.log('Проверка');
  }

  private removeClassName(elem: HTMLElement, ...classes: string[]): void {
    classes.forEach((className) => {
      if (elem.classList.contains(className)) {
        elem.classList.remove(className);
      }
    });
  }
}

export default Game;
