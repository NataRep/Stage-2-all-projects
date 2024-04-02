import { State } from './state';
import Api from './api';
import GaragePageView from '../pages/garage';
import WinnersPageView from '../pages/winners';
import RaceTable from '../components/race-table.ts/race-table';
import { Car, CarsData, Finisher, PaginationButtons, SpeedCar } from '../utils/interfaces';
import WinnerTable from '../components/winners-table/winner-table';
import { Order, Sorting } from '../utils/type';

class App {
  state: State;
  race: boolean;
  carsElements: HTMLElement[];
  pageGarage: GaragePageView;
  pageWinners: WinnersPageView;
  raceTable: RaceTable;
  winnersTable: WinnerTable;
  winnersTableSort: Sorting;
  winnersTableOrder: Order;
  counterGarage: HTMLElement;
  counterWinner: HTMLElement;
  pageNumberGarage: number;
  pageNumberWinner: number;
  pageNumberGarageElem: HTMLElement;
  pageNumberWinnerElem: HTMLElement;
  paginationButtonGarage: PaginationButtons;
  paginationButtonWinner: PaginationButtons;
  formUpdateCar: HTMLElement;
  formCreateCar: HTMLElement;
  selectedCarId: number;
  selectedCarName: HTMLElement;
  selectedCarSVG: SVGElement;
  buttonGenerate: HTMLButtonElement;
  buttonRace: HTMLButtonElement;
  buttonReset: HTMLButtonElement;
  isRace: boolean;
  abortController: AbortController;
  winnerMessage: HTMLElement;

  constructor() {
    this.state = new State('', '#ffffff', '', '#ffffff');
    this.race = false;
  }

  public async start() {
    this.pageGarage = new GaragePageView(this);
    this.pageWinners = new WinnersPageView(this);
    this.winnersTableOrder = 'ASC';
    this.winnersTableSort = 'id';
    this.pageGarage.render();
    this.raceTable = new RaceTable();
    this.pageNumberGarage = 1;
    this.pageNumberWinner = 1;
    this.isRace = false;
    this.abortController = new AbortController();
    const carsData = await Api.getCars(1, 7);
    if (carsData.totalCount) {
      this.pageGarage.createCarsCounter(this, parseInt(carsData.totalCount));
    } else {
      this.pageGarage.createCarsCounter(this, carsData.cars.length);
    }
    this.pageGarage.createPageCounter(this, this.pageNumberGarage);
    const raceTable = this.pageGarage.createRaceTable(this, carsData.cars);
    this.pageGarage.mainContent.append(raceTable);
    this.pageGarage.addPaginationButtons(this);
    this.pageGarage.setPaginationButtons(this, carsData);
    this.buttonReset.click();
  }

  public startCarAnimation(car: SVGElement, time: number, isMoving: boolean) {
    const track = this.raceTable.rows[0].querySelector('.race-row__track') as HTMLElement;
    return setInterval(() => {
      if (isMoving === true) {
        const currentTransform = getComputedStyle(car).transform;
        const currentTranslateX = parseFloat(currentTransform.split(',')[4]);
        const speed = track.clientWidth / time;
        const newTranslateX = currentTranslateX + speed;
        const rigthPadding = 16;
        if (newTranslateX > track.clientWidth - car.clientWidth * 2 - rigthPadding) {
          car.style.transform = `translateX(${track.clientWidth - car.clientWidth * 2 - 16}px)`;
          isMoving = false;
        } else {
          car.style.transform = `translateX(${newTranslateX}px)`;
        }
      }
    }, 10);
  }

  public async stopCar(id: number, buttonA: HTMLButtonElement, buttonB: HTMLButtonElement, car: SVGElement) {
    buttonA.disabled = false;
    buttonB.disabled = true;
    await Api.startOrStopCar(id, 'stopped');
    car.style.transform = `translateX(0px)`;
  }

  public startAndSwitchCar(car: Car, index: number, app: App): Promise<any> {
    let interval: ReturnType<typeof setInterval>;
    return new Promise(async (resolve, reject) => {
      try {
        const startResponse = (await Api.startOrStopCar(car.id, 'started')) as SpeedCar;
        //тут начинаем анимацию
        let isMoving: boolean = true;
        let carSVG = app.raceTable.rows[index].querySelector('svg');
        interval = app.startCarAnimation(carSVG, startResponse.distance / startResponse.velocity / 10, isMoving);
        const winner: Finisher = {
          id: car.id,
          speed: startResponse.velocity,
          time: (startResponse.distance / startResponse.velocity / 1000).toFixed(2),
          name: car.name,
        };
        await Api.switchCarToDriveMode(car.id, app.abortController);
        resolve(winner);
      } catch (error) {
        //останавливаем анимацию
        clearInterval(interval);
        reject(error);
      }
    });
  }

  public async startRace() {
    this.isRace = true;
    const carsData: CarsData = await Api.getCars(this.pageNumberGarage, 7);

    const promises = carsData.cars.map(async (car, index) => {
      return this.startAndSwitchCar(car, index, this);
    });

    //отключаю кнопки на время гонки
    this.disableButtonsDuringRace();
    //гонка
    const result = await Promise.any(promises);
    this.turnButtonsAfterRace();
    this.showWinner(result.name, result.time);

    try {
      const winnerData = await Api.getWinner(result.id);
      if (winnerData.time > parseFloat(result.time)) {
        Api.updateWinner(result.id, winnerData.wins + 1, parseFloat(result.time));
      } else {
        Api.updateWinner(result.id, winnerData.wins + 1, winnerData.time);
      }
    } catch (error) {
      if ((error.status = 404)) {
        await Api.createWinner(result.id, 1, parseFloat(result.time));
      } else {
        throw error;
      }
    }
  }

  private disableButtonsDuringRace() {
    this.buttonRace.disabled = true;
    this.buttonReset.disabled = true;
    this.buttonGenerate.disabled = true;
    this.raceTable.rows.forEach((row) => {
      const buttons = row.querySelectorAll('button');
      buttons.forEach((button) => {
        button.disabled = true;
      });
    });
  }

  private turnButtonsAfterRace() {
    this.buttonGenerate.disabled = false;
    this.buttonReset.disabled = false;
  }
  private turnButtonsAfterReset() {
    this.raceTable.rows.forEach((row) => {
      const buttons = row.querySelectorAll('button');
      buttons.forEach((button) => {
        button.disabled = false;
      });

      const buttonB = row.querySelector('.button_reset') as HTMLButtonElement;
      buttonB.disabled = true;
    });
  }

  public async resetRace() {
    this.isRace = false;
    const carData: CarsData = await Api.getCars(this.pageNumberGarage, 7);
    carData.cars.forEach((car, index) => {
      const buttonA = this.raceTable.rows[index].querySelector('.button_start') as HTMLButtonElement;
      const buttonB = this.raceTable.rows[index].querySelector('.button_reset') as HTMLButtonElement;
      const svg = this.raceTable.rows[index].querySelector('svg') as SVGElement;
      this.stopCar(car.id, buttonA, buttonB, svg);
    });
    this.formCreateCar.querySelector('button').disabled = false;
    this.buttonRace.disabled = false;
    this.buttonGenerate.disabled = false;

    this.abortController.abort();
    this.abortController = new AbortController();

    if (this.winnerMessage) {
      this.winnerMessage.remove();
    }
    this.turnButtonsAfterReset();
  }

  private showWinner(name: string, time: string): void {
    this.winnerMessage = this.pageGarage.createMessageAboutWinner(name, time);
    this.pageGarage.mainContent.append(this.winnerMessage);
  }
}

export default App;
