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

    const carName = document.createElement('div');
    carName.className = 'race-row__car-name';
    carName.innerHTML = name;

    const track = document.createElement('div');
    track.className = 'race-row__track';

    const car = CarEl.create(color);

    const controlButtons = document.createElement('div');
    controlButtons.className = 'race-row__control-buttons';
    let buttonB: HTMLButtonElement;

    const buttonA = Button.create('A', ['race-row__button', 'button_start', 'button_cars-control'], () =>
      app.moveCar(id, buttonA, buttonB, car, track)
    );
    buttonB = Button.create('B', ['race-row__button', 'button_reset', 'button_cars-control'], () =>
      app.stopCar(id, buttonA, buttonB, car)
    );
    buttonB.disabled = true;

    const buttonSelect = Button.create(
      'Select',
      ['race-row__button', 'button_select', 'button_small', 'button_blue'],
      this.buttonSelectOnClick.bind(this, event, this, app, id, carName, car)
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
        if (app.raceTable.rows.length === 0) {
          app.pageGarage.creatPrevPage(app);
        }
      }
    );

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

  static async buttonSelectOnClick(
    event: Event,
    buttonSelect: HTMLButtonElement,
    app: App,
    id: number,
    nameEl: HTMLElement,
    svg: SVGElement
  ) {
    app.formUpdateCar.querySelector('button').disabled = false;
    const inputText = app.formUpdateCar.querySelector('.input_text') as HTMLInputElement;
    const inputColor = app.formUpdateCar.querySelector('.input_color') as HTMLInputElement;
    const button = app.formUpdateCar.querySelector('button') as HTMLButtonElement;
    inputText.focus();
    const carData = await Api.getCar(id);
    inputText.value = carData.name;
    inputColor.value = carData.color;
    app.selectedCarId = id;
    app.selectedCarName = nameEl;
    app.selectedCarSVG = svg;
    buttonSelect.disabled = true;
    const buttons = app.raceTable.table.querySelectorAll('.button');
    buttons.forEach((button: HTMLButtonElement) => (button.disabled = true));

    //отменяем выделение машины
    document.body.addEventListener('click', function onClick(event: Event) {
      const target = event.target as HTMLElement;
      if (!target.closest('.form_update-car') || event.target === button) {
        buttons.forEach((button: HTMLButtonElement) => {
          if (!button.classList.contains('button_reset')) {
            button.disabled = false;
          }
        });
        button.disabled = true;
        buttonSelect.disabled = false;
        inputText.value = '';
        inputColor.value = '#ffffff';
        document.body.removeEventListener('click', onClick);
        app.selectedCarId = null;
      }
    });
  }
}

export default RaceRow;
