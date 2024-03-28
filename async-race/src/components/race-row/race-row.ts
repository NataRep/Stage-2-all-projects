import Button from '../button/button';
import CarEl from '../car/car';
import './race-row.scss';

class RaceRow {
  static create(id: number, name: string, color: string) {
    const row = document.createElement('div');
    row.className = 'race-row';
    row.id = String(id);

    const top = document.createElement('div');
    top.className = 'race-row__top-row';

    const topButtons = document.createElement('div');
    topButtons.className = 'race-row__top-button';

    const buttonSelect = Button.create('Select', ['race-row__button', 'button_select'], () =>
      console.log(`выбрана машина: ${id}`)
    );
    const buttonRemove = Button.create('Remove', ['race-row__button', 'button_remove'], () =>
      console.log(`удалена машина: ${id}`)
    );

    const carName = document.createElement('div');
    carName.className = 'race-row__car-name';
    carName.innerHTML = name;

    const track = document.createElement('div');
    track.className = 'race-row__track';

    const controlButtons = document.createElement('div');
    controlButtons.className = 'race-row__control-buttons';
    const buttonA = Button.create('A', ['race-row__button', 'button_start'], () =>
      console.log(` машина поехала: ${id}`)
    );
    const buttonB = Button.create('B', ['race-row__button', 'button_reset'], () =>
      console.log(` машина вернулась на старт: ${id}`)
    );

    const car = CarEl.create(color);

    topButtons.append(buttonSelect);
    topButtons.append(buttonRemove);
    top.append(topButtons);
    controlButtons.append(buttonA);
    controlButtons.append(buttonB);
    track.append(controlButtons);
    track.append(car);
    row.append(top);
    row.append(track);

    return row;
  }
}

export default RaceRow;
