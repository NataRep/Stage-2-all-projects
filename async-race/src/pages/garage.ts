import './garage.scss';
import App from '../app/app';
import Form from '../components/form/form';
import RaceTable from '../components/race-table.ts/race-table';
import Page from './page';
import { Car } from '../utils/interfaces';
import Button from '../components/button/button';

class GaragePageView extends Page {
  constructor(app: App) {
    super(app);

    const formWrapper = this.createForm(app);
    const toolButtonsRow = this.createToolButtonsRow();
    this.mainContent.append(formWrapper);
    this.mainContent.append(toolButtonsRow);
  }

  private createForm(app: App): HTMLElement {
    const formWrapper = document.createElement('div');
    formWrapper.className = 'form-wrapper';
    const formCreateCar = Form.create(
      app.state.inputCreateValue,
      app.state.inputCreateColor,
      'form_create-car',
      'Create',
      ['button_create', 'button_blue'],
      () => console.log('создаю машинку')
    );
    const formUpdateCar = Form.create(
      app.state.inputUpdateValue,
      app.state.inputUpdateColor,
      'form_update-car',
      'Update',
      ['button_update', 'button_blue'],
      () => console.log('изменяю машинку')
    );

    formWrapper.append(formCreateCar);
    formWrapper.append(formUpdateCar);
    return formWrapper;
  }

  private createToolButtonsRow(): HTMLElement {
    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.className = 'tool-buttons';

    const buttonRace = Button.create('Race', ['button_race', 'button_green'], () => console.log('начинаем гонку'));
    const buttonReset = Button.create('Reset', ['button_reset', 'button_green'], () =>
      console.log('возвращаем на исходные позиции')
    );
    const buttonGenerate = Button.create('Generate', ['button_generate', 'button_blue'], () =>
      console.log('создаем 100 машинок')
    );
    buttonsWrapper.append(buttonRace);
    buttonsWrapper.append(buttonReset);
    buttonsWrapper.append(buttonGenerate);

    return buttonsWrapper;
  }

  public addRaceTable(app: App, cars: Car[]) {
    app.raceTable = new RaceTable();
    const table = app.raceTable.createTable(cars);
    this.mainContent.append(table);
  }

  public createCarsCounter(app: App, num: number) {
    const counter: HTMLElement = document.createElement('div');
    counter.className = 'cars-counter';
    counter.innerHTML = `Garage (${num})`;
    app.counterGarage = counter;
    this.mainContent.append(counter);
  }

  public setCarsCounter(app: App, num: number) {
    app.counterGarage.innerHTML = `Garage (${num})`;
  }

  public addPaginationButtons(app: App) {
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    const buttonPrev = Button.create('Previous', ['pagination__button', 'button_blue'], () =>
      console.log('листаем назад')
    );
    const buttonNext = Button.create('Next', ['pagination__button', 'button_blue'], () =>
      console.log('листаем вперед')
    );
    app.paginationButtonGarage = { prev: buttonPrev, next: buttonNext };
    pagination.append(buttonPrev);
    pagination.append(buttonNext);
    this.mainContent.append(pagination);
  }

  public setPaginationButtons(app: App, cars: Car[]) {
    if (app.pageNumberGarage === 1) {
      app.paginationButtonGarage.prev.disabled = true;
    } else {
      app.paginationButtonGarage.prev.disabled = false;
    }
    if (Math.ceil(cars.length / 7) === app.pageNumberGarage) {
      app.paginationButtonGarage.next.disabled = true;
    } else {
      app.paginationButtonGarage.next.disabled = false;
    }
  }
}

export default GaragePageView;
