import './winner-row.scss';
import CarEl from '../car/car';
import Elem from '../element/element';

class WinnerRow {
  static create(rowNumber: number, name: string, color: string, wins: number, time: number): HTMLElement {
    const row = document.createElement('div');
    row.className = 'winner-row';

    const numberCell = Elem.create('div', ['winner-row__cell', 'winner-row__cell_number'], String(rowNumber));
    const carCell = Elem.create('div', ['winner-row__cell', 'winner-row__cell_car']);

    const svg = CarEl.create(color);
    carCell.append(svg);

    const nameCell = Elem.create('div', ['winner-row__cell', 'winner-row__cell_name'], name);
    const winsCell = Elem.create('div', ['winner-row__cell', 'winner-row__cell_wins'], String(wins));
    const timeCell = Elem.create('div', ['winner-row__cell', 'winner-row__cell_time'], String(time));

    row.append(numberCell);
    row.append(carCell);
    row.append(nameCell);
    row.append(winsCell);
    row.append(timeCell);

    return row;
  }
}
export default WinnerRow;
