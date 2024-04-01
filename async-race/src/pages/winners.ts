import App from '../app/app';
import { State } from '../app/state';
import WinnerTable from '../components/winners-table/winner-table';
import Page from './page';

class WinnersPageView extends Page {
  constructor(app: App) {
    super(app);
    const winnerTable = new WinnerTable();
    app.winnersTable = winnerTable;
  }

  public async updatePage(app: App) {
    app.winnersTable.rows.forEach((row) => row.remove());
    const table = await app.winnersTable.create(app, app.winnersTableSort, app.winnersTableOrder);
    this.mainContent.appendChild(table);
  }
}

export default WinnersPageView;
