import App from '../app/app';
import Api from '../app/api';
import WinnerTable from '../components/winners-table/winner-table';
import Page from './page';
import Button from '../components/button/button';
import { Winner } from '../utils/interfaces';

class WinnersPageView extends Page {
  constructor(app: App) {
    super(app);
    const winnerTable = new WinnerTable();
    app.winnersTable = winnerTable;
    const winnersCountew = this.createWinnersCounter(app);
    const numberPage = this.createPageNumber(app, app.pageNumberWinner);
    this.mainContent.append(winnersCountew);
    this.mainContent.append(numberPage);
    this.addPaginationButtons(app);
  }

  public async updatePage(app: App) {
    app.winnersTable.rows.forEach((row) => row.remove());
    const table = await app.winnersTable.create(app, app.winnersTableSort, app.winnersTableOrder);
    this.setWinnersCounter(app);
    this.setPageNumber(app);
    this.mainContent.append(table);
    if (app.paginationButtonWinner.prev && app.paginationButtonWinner.next) {
      app.paginationButtonWinner.prev.remove();
      app.paginationButtonWinner.next.remove();
    }
    this.mainContent.append(this.addPaginationButtons(app));
  }

  private createPageNumber(app: App, num: number): HTMLElement {
    const counter: HTMLElement = document.createElement('div');
    counter.className = 'page-counter';
    counter.innerHTML = `Page #${num}`;
    app.pageNumberWinnerElem = counter;
    return counter;
  }

  public setPageNumber(app: App) {
    app.pageNumberWinnerElem.innerHTML = `Page #${app.pageNumberWinner}`;
  }

  public createWinnersCounter(app: App): HTMLElement {
    const counter: HTMLElement = document.createElement('div');
    counter.className = 'cars-counter';
    app.counterWinner = counter;
    return counter;
  }

  public async setWinnersCounter(app: App) {
    const winnerData = await Api.getWinners();
    app.counterWinner.innerHTML = `Winners(${winnerData.winners.length})`;
    this.setPaginationButtons(app, winnerData.winners);
  }

  public addPaginationButtons(app: App): HTMLElement {
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    const buttonPrev = Button.create('Previous', ['pagination__button', 'button_blue'], () => {
      this.creatPrevPage.bind(this, app)();
    });
    const buttonNext = Button.create('Next', ['pagination__button', 'button_blue'], () => {
      this.creatNextPage.bind(this, app)();
    });
    app.paginationButtonWinner = { prev: buttonPrev, next: buttonNext };
    pagination.append(buttonPrev);
    pagination.append(buttonNext);
    return pagination;
  }

  public setPaginationButtons(app: App, winners: Winner[]) {
    if (app.pageNumberWinner === 1) {
      app.paginationButtonWinner.prev.disabled = true;
    } else {
      app.paginationButtonWinner.prev.disabled = false;
    }
    if (Math.ceil(Number(winners.length) / 10) === app.pageNumberWinner || Number(winners.length) === 0) {
      app.paginationButtonWinner.next.disabled = true;
    } else {
      app.paginationButtonWinner.next.disabled = false;
    }
  }

  private async creatNextPage(app: App) {
    app.pageNumberWinner += 1;
    const winnerData = await Api.getWinners();
    const winners = winnerData.winners;
    this.setPaginationButtons(app, winners);
    this.updatePage(app);
  }

  public async creatPrevPage(app: App) {
    app.pageNumberWinner -= 1;
    const winnerData = await Api.getWinners();
    const winners = winnerData.winners;
    this.setPaginationButtons(app, winners);
    this.updatePage(app);
  }
}

export default WinnersPageView;
