import Button from '../button/button';
import CarEl from '../car/car';
import App from '../../app/app';
import Api from '../../app/api';
import './race-row.scss';

class RaceRow {
  static create(id: number, name: string, color: string, app: App) {
    const row = document.createElement('div');
    row.className = 'race-row';
    row.id = String(id);

    const top = document.createElement('div');
    top.className = 'race-row__top-row';

    const topButtons = document.createElement('div');
    topButtons.className = 'race-row__top-buttons';

    const buttonSelect = Button.create(
      'Select',
      ['race-row__button', 'button_select', 'button_small', 'button_blue'],
      () => console.log(`выбрана машина: ${id}`)
    );
    const buttonRemove = Button.create(
      'Remove',
      ['race-row__button', 'button_remove', 'button_small', 'button_blue'],
      async () => {
        await Api.deleteCar(id);
        const carsData = await Api.getCars(app.pageNumberGarage, 7);
        app.raceTable.table.remove();
        app.raceTable.table = app.pageGarage.createRaceTable(app, carsData.cars);
        app.counterGarage.after(app.raceTable.table);
        app.pageGarage.setCarsCounter(app, Number(carsData.totalCount));
        app.pageGarage.setPaginationButtons(app, carsData);
      }
    );

    const carName = document.createElement('div');
    carName.className = 'race-row__car-name';
    carName.innerHTML = name;

    const track = document.createElement('div');
    track.className = 'race-row__track';

    const controlButtons = document.createElement('div');
    controlButtons.className = 'race-row__control-buttons';
    const buttonA = Button.create('A', ['race-row__button', 'button_start', 'button_cars-control'], () =>
      console.log(` машина поехала: ${id}`)
    );
    const buttonB = Button.create('B', ['race-row__button', 'button_reset', 'button_cars-control'], () =>
      console.log(` машина вернулась на старт: ${id}`)
    );
    buttonB.disabled = true;

    const car = CarEl.create(color);

    topButtons.append(buttonSelect);
    topButtons.append(buttonRemove);
    top.append(topButtons);

    top.append(carName);
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
