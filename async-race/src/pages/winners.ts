import App from '../app/app';
import WinnerTable from '../components/winners-table/winner-table';
import Page from './page';

class WinnersPageView extends Page {
  constructor(app: App) {
    super(app);
    const winnerTable = new WinnerTable();
    app.winnersTable = winnerTable;
    const counter = this.createPageCounter(app, app.pageNumberWinner);
    this.mainContent.append(counter);
  }

  public async updatePage(app: App) {
    app.winnersTable.rows.forEach((row) => row.remove());
    const table = await app.winnersTable.create(app, app.winnersTableSort, app.winnersTableOrder);
    this.setPageCounter(app);
    this.mainContent.append(table);
  }

  private createPageCounter(app: App, num: number): HTMLElement {
    const counter: HTMLElement = document.createElement('div');
    counter.className = 'page-counter';
    counter.innerHTML = `Page #${num}`;
    app.pageNumberWinnerElem = counter;
    return counter;
  }

  public setPageCounter(app: App) {
    app.pageNumberWinnerElem.innerHTML = `Page #${app.pageNumberGarage}`;
  }
}

export default WinnersPageView;
