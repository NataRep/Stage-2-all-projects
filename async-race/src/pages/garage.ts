import './garage.scss';
import Api from '../app/api';
import App from '../app/app';
import Form from '../components/form/form';
import RaceTable from '../components/race-table.ts/race-table';
import Page from './page';
import { Car, CarsData } from '../utils/interfaces';
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
    //creat error massege for createCar
    let isErrorMessage: boolean = false;
    const errorMessageEl = this.createErrorMassege();
    const formCreateCar = Form.create(
      app.state.inputCreateValue,
      app.state.inputCreateColor,
      'create-car',
      'Create',
      ['button_create', 'button_blue'],
      async () => {
        const inputText = app.formCreateCar.querySelector('.input_text') as HTMLInputElement;
        const inputColor = app.formCreateCar.querySelector('.input_color') as HTMLInputElement;
        const name = inputText.value;
        const color = inputColor.value;
        if (name != '') {
          await Api.createCar(name, color);
          this.updateCarsTable(app);
          inputText.value = '';
          inputColor.value = '#ffffff';
          console.log(isErrorMessage);
          if (isErrorMessage) errorMessageEl.remove();
        } else {
          app.formCreateCar.append(errorMessageEl);
          isErrorMessage = true;
        }
      }
    );
    app.formCreateCar = formCreateCar;
    const formUpdateCar = Form.create(
      app.state.inputUpdateValue,
      app.state.inputUpdateColor,
      'update-car',
      'Update',
      ['button_update', 'button_blue'],
      async (event: Event) => app.updateCar(event, app.selectedCarId)
    );
    app.formUpdateCar = formUpdateCar;
    const buttonUpdate = formUpdateCar.querySelector('button') as HTMLButtonElement;
    buttonUpdate.disabled = true;

    formWrapper.append(formCreateCar);
    formWrapper.append(formUpdateCar);
    return formWrapper;
  }

  private createErrorMassege(): HTMLElement {
    const errorMessageEl: HTMLElement = document.createElement('p');
    errorMessageEl.className = 'input__error';
    errorMessageEl.innerHTML = 'Please enter a name';
    return errorMessageEl;
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

  public createRaceTable(app: App, cars: Car[]): HTMLElement {
    app.raceTable = new RaceTable();
    const table = app.raceTable.createTable(cars, app);
    return table;
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
      this.creatPrevPage.bind(this, app)()
    );
    const buttonNext = Button.create('Next', ['pagination__button', 'button_blue'], () =>
      this.creatNextPage.bind(this, app)()
    );
    app.paginationButtonGarage = { prev: buttonPrev, next: buttonNext };
    pagination.append(buttonPrev);
    pagination.append(buttonNext);
    this.mainContent.append(pagination);
  }

  public setPaginationButtons(app: App, cars: CarsData) {
    if (app.pageNumberGarage === 1) {
      app.paginationButtonGarage.prev.disabled = true;
    } else {
      app.paginationButtonGarage.prev.disabled = false;
    }
    if (Math.ceil(Number(cars.totalCount) / 7) === app.pageNumberGarage) {
      app.paginationButtonGarage.next.disabled = true;
    } else {
      app.paginationButtonGarage.next.disabled = false;
    }
  }

  private async creatNextPage(app: App) {
    app.pageNumberGarage += 1;
    this.updateCarsTable(app);
  }
  private async creatPrevPage(app: App) {
    app.pageNumberGarage -= 1;
    this.updateCarsTable(app);
  }

  private async updateCarsTable(app: App) {
    const carsData = await Api.getCars(app.pageNumberGarage, 7);
    app.raceTable.table.remove();
    app.raceTable.table = app.pageGarage.createRaceTable(app, carsData.cars);
    app.counterGarage.after(app.raceTable.table);
    this.setPaginationButtons(app, carsData);
  }
}

export default GaragePageView;
