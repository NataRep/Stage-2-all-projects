import App from '../../app/app';
import { Car } from '../../utils/interfaces';
import RaceRow from '../race-row/race-row';
import Elem from '../element/element';

class RaceTable {
  rows: HTMLElement[];

  table: HTMLElement;

  constructor() {
    this.rows = [];
  }

  public createTable(cars: Car[], app: App): HTMLElement {
    this.table = Elem.create('div', ['race-table']);
    cars.forEach((car) => {
      const row = RaceRow.create(car.id, car.name, car.color, app);
      this.table.append(row);
      this.rows.push(row);
    });

    return this.table;
  }
}

export default RaceTable;
