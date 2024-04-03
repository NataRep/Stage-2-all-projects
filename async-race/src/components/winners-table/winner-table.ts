import Api from '../../app/api';
import App from '../../app/app';
import './winner-table.scss';
import { CarsData, Winner, Winners } from '../../utils/interfaces';
import WinnerRow from '../winners-row/winner-row';
import { Order, Sorting } from '../../utils/type';
import { OrderType, SortTypes } from '../../utils/enums';

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
    const rowHeader: HTMLElement = document.createElement('div');
    rowHeader.classList.add('winner-row', 'winner-row_header');

    const numberCell: HTMLElement = document.createElement('div');
    numberCell.className = 'winner-row__cell winner-row__cell_number';
    numberCell.innerHTML = '#';

    const carCell: HTMLElement = document.createElement('div');
    carCell.className = 'winner-row__cell winner-row__cell_car';
    carCell.innerHTML = 'Car';

    const nameCell: HTMLElement = document.createElement('div');
    nameCell.className = 'winner-row__cell winner-row__cell_name';
    nameCell.innerHTML = 'Name';

    const winsCell: HTMLElement = document.createElement('div');
    winsCell.className = 'winner-row__cell winner-row__cell_wins';
    winsCell.innerHTML = 'Wins';
    winsCell.addEventListener('click', (event: Event) => this.sort(event, app));

    const timeCell: HTMLElement = document.createElement('div');
    timeCell.className = 'winner-row__cell winner-row__cell_time';
    timeCell.innerHTML = 'Best time';
    timeCell.addEventListener('click', (event: Event) => this.sort(event, app));

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
    if (app.winnersTableOrder === OrderType.ASB) {
      app.winnersTableOrder = OrderType.DESC;
    } else app.winnersTableOrder = OrderType.ASB;
    app.pageWinners.updatePage(app);
  }
}

export default WinnerTable;
