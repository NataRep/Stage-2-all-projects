import './winner-row.scss';
import CarEl from '../car/car';

class WinnerRow {
  static create(rowNumber: number, name: string, color: string, wins: number, time: number): HTMLElement {
    const row = document.createElement('div');
    row.className = 'winner-row';

    const numberCell = document.createElement('div');
    numberCell.className = 'winner-row__cell winner-row__cell_number';
    numberCell.innerHTML = String(rowNumber);

    const carCell = document.createElement('div');
    carCell.className = 'winner-row__cell winner-row__cell_car';
    const svg = CarEl.create(color);
    carCell.append(svg);

    const nameCell = document.createElement('div');
    nameCell.className = 'winner-row__cell winner-row__cell_name';
    nameCell.innerHTML = name;

    const winsCell = document.createElement('div');
    winsCell.className = 'winner-row__cell winner-row__cell_wins';
    winsCell.innerHTML = String(wins);

    const timeCell = document.createElement('div');
    timeCell.className = 'winner-row__cell winner-row__cell_time';
    timeCell.innerHTML = String(time);

    row.append(numberCell);
    row.append(carCell);
    row.append(nameCell);
    row.append(winsCell);
    row.append(timeCell);

    return row;
  }
}
export default WinnerRow;
