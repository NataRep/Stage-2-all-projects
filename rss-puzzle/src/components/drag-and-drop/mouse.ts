import Game from '../../app/game';
import Word from '../word/word';

class DragAndDrop {
  static onDragStart(event: DragEvent, game: Game): boolean {
    const word = event.target as HTMLElement;
    word.classList.add('draggling');
    word.id = 'draggling';
    event.dataTransfer.clearData();
    event.dataTransfer.setData('text/plain', word.id);
    word.style.animationDelay = '0.1s';
    game.dropSource = game.source.includes(word.innerHTML) ? game.source : game.result;
    return false;
  }

  static onDragEnd(event: DragEvent) {
    const word = event.target as HTMLElement;
    word.classList.remove('draggling');
    word.id = '';
  }

  static onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  static onDrop(event: DragEvent, game: Game) {
    const target = event.target as HTMLElement;
    const data = event.dataTransfer.getData('text');
    const elem = document.getElementById(data) as HTMLElement;
    const word = game.dropSource.find(elem);

    if (target.closest('.puzzle__source-field')) {
      const wrapper = target.closest('.puzzle__source-field');
      game.dropTarget = game.source;
      if (game.dropPlace === wrapper) {
        game.sourceField.append(word.element);
        game.dropSource.remove(word.element);
        game.dropTarget.push(word);
        word.element.style.zIndex = `0`;
      } else {
        game.dropPlace.before(word.element);
        game.dropSource.remove(word.element);
        game.dropTarget.insertWordByIndex(word, game.dropIndex);
      }
      game.doAfterPlayersStep(word, game.sourceField);
    } else if (target.closest('.puzzle__result-row')) {
      game.dropTarget = game.result;
      const resultRow = game.puzzleField.children[0].children[game.rowIndex] as HTMLElement;
      if (game.dropPlace === resultRow) {
        resultRow.append(word.element);
        game.dropSource.remove(word.element);
        game.dropTarget.push(word);
        word.element.style.zIndex = `0`;
      } else {
        const direction = this.determineDirectionTransfer(game, word);

        game.dropPlace.before(word.element);
        game.dropSource.remove(word.element);

        if (direction === 'forward') {
          game.dropTarget.insertWordByIndex(word, game.dropIndex - 1);
        } else {
          game.dropTarget.insertWordByIndex(word, game.dropIndex);
        }
      }
      game.doAfterPlayersStep(word, resultRow);
    }
    event.dataTransfer.clearData();
    game.dropPlace.classList.remove('move');
    event.preventDefault();
  }

  static onDragEnter(event: DragEvent, game: Game) {
    game.dropPlace = event.target as HTMLElement;
    game.dropPlace.classList.add('move');
    Array.from(game.dropPlace.parentNode.children).indexOf(game.dropPlace);
    game.dropIndex = Array.from(game.dropPlace.parentNode.children).indexOf(game.dropPlace);
  }

  static onDragLeave(event: DragEvent) {
    const word = event.target as HTMLElement;
    word.classList.remove('move');
  }

  static determineDirectionTransfer(game: Game, word: Word): string {
    const derection: string = game.result.indexOf(word) < game.dropIndex ? 'forward' : 'back';
    return derection;
  }
}

export default DragAndDrop;
