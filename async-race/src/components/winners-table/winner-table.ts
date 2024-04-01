import Api from '../../app/api';
import App from '../../app/app';
import { CarsData, Winner, Winners } from '../../utils/interfaces';
import WinnerRow from '../winners-row/winner-row';

class WinnerTable {
  rows: HTMLElement[];
  table: HTMLElement;

  constructor() {
    this.rows = [];
  }

  public async create(app: App, sort?: 'id' | 'wins' | 'time', order?: 'ASC' | 'DESC'): Promise<HTMLElement> {
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

    const rowHeader = this.createHeader();
    this.table.append(rowHeader);
    this.rows.push(rowHeader);

    winners.forEach((winner, index) => {
      const car = cars.find((car) => car.id === winner.id);
      const name = car.name;
      const color = car.color;
      const wins = winner.wins;
      const time = winner.time;

      const row = WinnerRow.create(index + 1, name, color, wins, time);
      this.table.append(row);
      this.rows.push(row);
    });
    return this.table;
  }

  private createHeader(): HTMLElement {
    const rowHeader: HTMLElement = document.createElement('div');
    rowHeader.classList.add('winner-row', 'winner-row_header');

    const numberCell: HTMLElement = document.createElement('div');
    numberCell.className = 'winner-row__cell winner-row__cell_number';
    numberCell.innerHTML = 'Number';

    const carCell: HTMLElement = document.createElement('div');
    carCell.className = 'winner-row__cell winner-row__cell_car';
    carCell.innerHTML = 'Car';

    const nameCell: HTMLElement = document.createElement('div');
    nameCell.className = 'winner-row__cell winner-row__cell_name';
    nameCell.innerHTML = 'Name';

    const winsCell: HTMLElement = document.createElement('div');
    winsCell.className = 'winner-row__cell winner-row__cell_wins';
    winsCell.innerHTML = 'Wins';

    const timeCell: HTMLElement = document.createElement('div');
    timeCell.className = 'winner-row__cell winner-row__cell_wins';
    timeCell.innerHTML = 'time';

    rowHeader.append(numberCell);
    rowHeader.append(carCell);
    rowHeader.append(nameCell);
    rowHeader.append(winsCell);
    rowHeader.append(timeCell);

    return rowHeader;
  }
}

export default WinnerTable;
