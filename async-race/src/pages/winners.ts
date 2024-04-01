import App from '../app/app';
import Api from '../app/api';
import WinnerTable from '../components/winners-table/winner-table';
import Page from './page';

class WinnersPageView extends Page {
  constructor(app: App) {
    super(app);
    const winnerTable = new WinnerTable();
    app.winnersTable = winnerTable;
    const winnersCountew = this.createWinnersCounter(app);
    const numberPage = this.createPageNumber(app, app.pageNumberWinner);
    this.mainContent.append(winnersCountew);
    this.mainContent.append(numberPage);
  }

  public async updatePage(app: App) {
    app.winnersTable.rows.forEach((row) => row.remove());
    const table = await app.winnersTable.create(app, app.winnersTableSort, app.winnersTableOrder);
    this.setWinnersCounter(app);
    this.setPageNumber(app);
    this.mainContent.append(table);
  }

  private createPageNumber(app: App, num: number): HTMLElement {
    const counter: HTMLElement = document.createElement('div');
    counter.className = 'page-counter';
    counter.innerHTML = `Page #${num}`;
    app.pageNumberWinnerElem = counter;
    return counter;
  }

  public setPageNumber(app: App) {
    app.pageNumberWinnerElem.innerHTML = `Page #${app.pageNumberGarage}`;
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
  }
}

export default WinnersPageView;
