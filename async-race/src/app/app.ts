import { State } from './state';
import Api from './api';
import GaragePageView from '../pages/garage';
import WinnersPageView from '../pages/winners';
import RaceTable from '../components/race-table.ts/race-table';
import { Car, CarsData, Finisher, PaginationButtons, SpeedCar } from '../utils/interfaces';

class App {
  state: State;
  race: boolean;
  carsElements: HTMLElement[];
  pageGarage: GaragePageView;
  pageWinners: WinnersPageView;
  raceTable: RaceTable;
  counterGarage: HTMLElement;
  pageNumberGarage: number;
  paginationButtonGarage: PaginationButtons;
  pageNumberWinner: number;
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
  curentRaceResults: Finisher[];
  countcurrentRaceRequest: number;

  constructor() {
    this.state = new State('', '#ffffff', '', '#ffffff', 1, 1);
    this.race = false;
  }

  public async start() {
    this.pageGarage = new GaragePageView(this);
    this.pageWinners = new WinnersPageView(this);
    this.pageGarage.render();
    this.raceTable = new RaceTable();
    this.pageNumberGarage = 1;
    this.pageNumberWinner = 1;
    this.isRace = false;
    this.countcurrentRaceRequest = 0;
    this.curentRaceResults = [];
    const carsData = await Api.getCars(1, 7);
    if (carsData.totalCount) {
      this.pageGarage.createCarsCounter(this, parseInt(carsData.totalCount));
    } else {
      this.pageGarage.createCarsCounter(this, carsData.cars.length);
    }
    const raceTable = this.pageGarage.createRaceTable(this, carsData.cars);
    this.pageGarage.mainContent.append(raceTable);
    this.pageGarage.addPaginationButtons(this);
    this.pageGarage.setPaginationButtons(this, carsData);
    this.buttonReset.click();
  }

  public async moveCar(
    id: number,
    buttonA: HTMLButtonElement,
    buttonB: HTMLButtonElement,
    car: SVGElement,
    carName: HTMLElement
  ) {
    buttonA.disabled = true;
    const data = await Api.startOrStopCar(id, 'started');
    const startTime = new Date().getTime();

    let isMoving: boolean = true;
    let interval: ReturnType<typeof setInterval>;

    interval = this.startCarAnimation(car, data.velocity, isMoving);

    const response = await Api.switchCarToDriveMode(id);
    const stopTime = new Date().getTime();
    const finisher: Finisher = {
      id: id,
      speed: data.velocity,
      time: ((stopTime - startTime) / 1000).toFixed(2),
      name: carName.innerHTML,
    };
    if (response === undefined) {
      isMoving = false;
      clearInterval(interval);
      buttonB.disabled = false;
    } else {
      buttonB.disabled = false;
      if (this.isRace) {
        this.curentRaceResults.push(finisher);
      }
    }
    if (this.isRace) {
      this.countcurrentRaceRequest += 1;
    }
    if (this.countcurrentRaceRequest === 7) {
      console.log(this.chooseWinner());
      this.buttonReset.disabled = false;
      this.showWinner(finisher.name, finisher.time);
    }
  }

  private startCarAnimation(car: SVGElement, time: number, isMoving: boolean) {
    console.log('!!!!!!!!');
    function calculateSpeedReduction() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        return 0.25;
      } else if (screenWidth < 1200) {
        return 0.5;
      } else if (screenWidth < 1200) {
        return 0.75;
      } else {
        return 1;
      }
    }
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

  public async startRace() {
    this.isRace = true;
    const carsData: CarsData = await Api.getCars(this.pageNumberGarage, 7);

    function startAndSwitchCar(car: Car, index: number, app: App): Promise<any> {
      return new Promise(async (resolve, reject) => {
        try {
          const startResponse = (await Api.startOrStopCar(car.id, 'started')) as SpeedCar;
          //тут начинаем анимацию
          let isMoving: boolean = true;
          let carSVG = app.raceTable.rows[index].querySelector('svg');
          let interval: ReturnType<typeof setInterval>;
          interval = app.startCarAnimation(carSVG, startResponse.distance / startResponse.velocity / 10, isMoving);

          const winner: Finisher = {
            id: car.id,
            speed: startResponse.velocity,
            time: (startResponse.distance / startResponse.velocity / 1000).toFixed(2),
            name: car.name,
          };
          await Api.switchCarToDriveMode(car.id);
          //тут если ошибка, останавливаем анимацию
          clearInterval(interval);

          resolve(winner);
        } catch (error) {
          reject(error);
        }
      });
    }
    const promises = carsData.cars.map(async (car, index) => {
      return startAndSwitchCar(car, index, this);
    });

    try {
      //отключаю кнопки на время гонки
      this.buttonRace.disabled = true;
      this.buttonReset.disabled = true;
      this.buttonGenerate.disabled = true;
      //гонка
      const results = await Promise.allSettled(promises);
      const successfulResults = results.filter((result) => result.status === 'fulfilled');

      if (successfulResults.length > 0 && successfulResults[0].status === 'fulfilled' && successfulResults[0].value) {
        //победитель
        const firstSuccessfulResult = successfulResults[0].value;
        console.log(firstSuccessfulResult);
        this.showWinner(firstSuccessfulResult.name, firstSuccessfulResult.time);
        console.log('Данные первого успешно завершенного промиса:', firstSuccessfulResult);
      }
      this.buttonGenerate.disabled = false;
      this.buttonReset.disabled = false;
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }

  public async resetRace() {
    this.isRace = false;
    this.curentRaceResults = [];
    this.countcurrentRaceRequest = 0;
    this.raceTable.rows.forEach((row) => {
      const buttonB = row.querySelector('.button_reset') as HTMLButtonElement;
      buttonB.click();
      this.buttonRace.disabled = false;
      this.buttonGenerate.disabled = false;
      this.formCreateCar.querySelector('button').disabled = false;
    });
  }

  //УБРАТЬ
  private chooseWinner(): Finisher {
    this.curentRaceResults.sort((a, b) => b.speed - a.speed);
    return this.curentRaceResults[0];
  }

  private showWinner(name: string, time: string): void {
    const winner = this.pageGarage.createMessageAboutWinner(name, time);
    this.pageGarage.mainContent.append(winner);
  }
}

export default App;
