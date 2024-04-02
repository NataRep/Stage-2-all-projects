import './garage.scss';
import Api from '../app/api';
import App from '../app/app';
import Form from '../components/form/form';
import RaceTable from '../components/race-table.ts/race-table';
import Page from './page';
import { Car, CarsData } from '../utils/interfaces';
import Button from '../components/button/button';
import CarEl from '../components/car/car';
import { COLORS } from '../assets/colors';
import { MAKERS } from '../assets/carsMakers';

class GaragePageView extends Page {
  constructor(app: App) {
    super(app);

    const formWrapper = this.createForm(app);
    const toolButtonsRow = this.createToolButtonsRow(app);
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
          if (isErrorMessage) errorMessageEl.remove();
        } else {
          app.formCreateCar.append(errorMessageEl);
          setTimeout(() => errorMessageEl.remove(), 5000);
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
      async () => this.updateCar(app, app.selectedCarId)
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

  private createToolButtonsRow(app: App): HTMLElement {
    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.className = 'tool-buttons';

    const buttonRace = Button.create('Race', ['button_race', 'button_green'], () => app.startRace());
    app.buttonRace = buttonRace;
    const buttonReset = Button.create('Reset', ['button_reset', 'button_green'], () => {
      app.resetRace();
    });
    app.buttonReset = buttonReset;
    const buttonGenerate = Button.create('Generate', ['button_generate', 'button_blue'], () => this.generateCars(app));
    app.buttonGenerate = buttonGenerate;
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

  public createPageCounter(app: App, num: number) {
    const counter: HTMLElement = document.createElement('div');
    counter.className = 'page-counter';
    counter.innerHTML = `Page #${num}`;
    app.pageNumberGarageElem = counter;
    this.mainContent.append(counter);
  }

  public setPageCounter(app: App) {
    app.pageNumberGarageElem.innerHTML = `Page #${app.pageNumberGarage}`;
  }

  public addPaginationButtons(app: App) {
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    const buttonPrev = Button.create('Previous', ['pagination__button', 'button_blue'], () => {
      this.creatPrevPage.bind(this, app)();
    });
    const buttonNext = Button.create('Next', ['pagination__button', 'button_blue'], () => {
      this.creatNextPage.bind(this, app)();
    });
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
    if (Math.ceil(Number(cars.totalCount) / 7) === app.pageNumberGarage || Number(cars.totalCount) === 0) {
      app.paginationButtonGarage.next.disabled = true;
    } else {
      app.paginationButtonGarage.next.disabled = false;
    }
  }

  private async creatNextPage(app: App) {
    app.pageNumberGarage += 1;
    this.setPageCounter(app);
    this.updateCarsTable(app);
  }

  public async creatPrevPage(app: App) {
    app.pageNumberGarage -= 1;
    this.setPageCounter(app);
    this.updateCarsTable(app);
  }

  private async updateCarsTable(app: App) {
    const carsData = await Api.getCars(app.pageNumberGarage, 7);
    app.raceTable.table.remove();
    app.raceTable.table = app.pageGarage.createRaceTable(app, carsData.cars);
    app.pageNumberGarageElem.after(app.raceTable.table);
    this.setPaginationButtons(app, carsData);
    this.setCarsCounter(app, parseInt(carsData.totalCount));
  }

  private async updateCar(app: App, id: number) {
    const inputText = app.formUpdateCar.querySelector('.input_text') as HTMLInputElement;
    const inputColor = app.formUpdateCar.querySelector('.input_color') as HTMLInputElement;
    const name = inputText.value;
    const color = inputColor.value;
    app.selectedCarName.innerHTML = name;
    CarEl.changeColor(color, app.selectedCarSVG);
    CarEl.changeName(name, app.selectedCarName);
    await Api.updateCar(id, name, color);
  }

  private async generateCars(app: App) {
    function getRandom<T>(array: T[]): number {
      return Math.floor(Math.random() * array.length);
    }
    app.buttonGenerate.disabled = true;
    app.buttonRace.disabled = true;
    app.buttonReset.disabled = true;
    const downloadMassege = document.createElement('div');
    downloadMassege.className = 'download-massege';
    downloadMassege.innerHTML = 'Cars are created...';
    app.buttonGenerate.after(downloadMassege);
    let name: string;
    let color: string;
    for (let i = 0; i < 100; i += 1) {
      color = COLORS[getRandom(COLORS)];
      const maker = MAKERS[getRandom(MAKERS)];
      name = `${maker.maker} ${maker.models[getRandom(maker.models)]}`;
      await Api.createCar(name, color);
    }
    this.updateCarsTable(app);

    app.buttonGenerate.disabled = false;
    app.buttonRace.disabled = false;
    app.buttonReset.disabled = false;
    downloadMassege.remove();
  }

  public createMessageAboutWinner(name: string, time: string) {
    const messageWrapper: HTMLDivElement = document.createElement('div');
    messageWrapper.className = 'winner';
    const winner: HTMLDivElement = document.createElement('div');
    winner.className = 'winner__text';
    winner.innerHTML = `Winner: ${name} [${time}s]`;
    messageWrapper.append(winner);
    return messageWrapper;
  }
}

export default GaragePageView;
