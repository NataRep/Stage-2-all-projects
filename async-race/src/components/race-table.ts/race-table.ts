import { Car } from '../../utils/interfaces';
import RaceRow from '../race-row/race-row';

class RaceTable {
  rows: HTMLElement[];
  table: HTMLElement;

  constructor() {
    this.rows = [];
  }

  public createTable(cars: Car[]): HTMLElement {
    this.table = document.createElement('div');
    this.table.className = 'race-table';

    cars.forEach((car) => {
      const row = RaceRow.create(car.id, car.name, car.color);

      this.table.append(row);
      this.rows.push(row);
    });

    return this.table;
  }

  public removeRow(id: number) {
    this.rows.find((el) => el.id === String(id)).remove;
  }

  public addRow(car: Car) {
    const row = RaceRow.create(car.id, car.name, car.color);
    this.table.append(row);
    this.rows.push(row);
  }
}

export default RaceTable;
