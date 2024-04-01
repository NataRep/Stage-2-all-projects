import App from '../app/app';
import { State } from '../app/state';
import WinnerTable from '../components/winners-table/winner-table';
import Page from './page';

class WinnersPageView extends Page {
  constructor(app: App) {
    super(app);

    const winnerTable = new WinnerTable();
    app.winnersTable = winnerTable;

    this.addTable(app);
  }

  private async addTable(app: App) {
    const table = await app.winnersTable.create(app);
    this.mainContent.appendChild(table);
  }
}

export default WinnersPageView;
