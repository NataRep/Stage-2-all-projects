import Api from '../../app/api';
import App from '../../app/app';
import { CarsData, Winner, Winners } from '../../utils/interfaces';
import WinnerRow from '../winners-row/winner-row';
import { Order, Sorting } from '../../utils/type';
import { OrderType, SortTypes } from '../../utils/enums';
import Elem from '../element/element';
import './winner-table.scss';

class WinnerTable {
  rows: HTMLElement[];

  table: HTMLElement;

  constructor() {
    this.rows = [];
  }

  public async create(app: App, sort?: Sorting, order?: Order): Promise<HTMLElement> {
    let winnersObj: Winners;
    if (sort && order) {
      winnersObj = await Api.getWinners(app.pageNumberWinner, 10, sort, order);
    } else {
      winnersObj = await Api.getWinners(app.pageNumberWinner, 10);
    }
    const winners: Winner[] = winnersObj.winners;
    const carsData: CarsData = await Api.getCars();
    const cars = carsData.cars;

    this.table = document.createElement('div');
    this.table.className = 'winners-table';

    const rowHeader = this.createHeader(app);
    this.table.append(rowHeader);
    this.rows.push(rowHeader);

    winners.forEach((winner, index) => {
      const car = cars.find((item) => item.id === winner.id);
      const name = car.name;
      const color = car.color;
      const wins = winner.wins;
      const time = winner.time;
      const row: HTMLElement =
        app.pageNumberWinner === 1
          ? WinnerRow.create(index + 1, name, color, wins, time)
          : WinnerRow.create(index + (app.pageNumberWinner - 1) * 10, name, color, wins, time);
      this.table.append(row);
      this.rows.push(row);
    });
    return this.table;
  }

  private createHeader(app: App): HTMLElement {
    const rowHeader: HTMLElement = Elem.create('div', ['winner-row', 'winner-row_header']);
    const numberCell: HTMLElement = Elem.create('div', ['winner-row__cell', 'winner-row__cell_number'], '#');
    const carCell: HTMLElement = Elem.create('div', ['winner-row__cell', 'winner-row__cell_car'], 'Car');
    const nameCell: HTMLElement = Elem.create('div', ['winner-row__cell', 'winner-row__cell_name'], 'Name');
    const winsCell: HTMLElement = Elem.create('div', ['winner-row__cell', 'winner-row__cell_wins'], 'Wins');
    const timeCell: HTMLElement = Elem.create('div', ['winner-row__cell', 'winner-row__cell_time'], 'Best time');
    timeCell.addEventListener('click', (event: Event) => this.sort(event, app));
    winsCell.addEventListener('click', (event: Event) => this.sort(event, app));

    rowHeader.append(numberCell);
    rowHeader.append(carCell);
    rowHeader.append(nameCell);
    rowHeader.append(winsCell);
    rowHeader.append(timeCell);

    return rowHeader;
  }

  private async sort(event: Event, app: App) {
    const button = event.target as HTMLElement;
    if (button.innerHTML === 'Wins') {
      app.winnersTableSort = SortTypes.WINS;
    } else if (button.innerHTML === 'Best time') {
      app.winnersTableSort = SortTypes.TIME;
    }
    if (app.winnersTableOrder === OrderType.ASC) {
      app.winnersTableOrder = OrderType.DESC;
    } else app.winnersTableOrder = OrderType.ASC;
    app.pageWinners.updatePage(app);
  }
}

export default WinnerTable;
