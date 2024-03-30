import { State } from './state';
import Api from './api';
import GaragePageView from '../pages/garage';
import WinnersPageView from '../pages/winners';
import RaceTable from '../components/race-table.ts/race-table';
import { Finisher, PaginationButtons } from '../utils/interfaces';

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
  }

  public async moveCar(
    id: number,
    buttonA: HTMLButtonElement,
    buttonB: HTMLButtonElement,
    car: SVGElement,
    track: HTMLElement,
    carName: HTMLElement
  ) {
    buttonA.disabled = true;
    const data = await Api.startOrStopCar(id, 'started');

    let isMoving: boolean = true;
    let interval: ReturnType<typeof setInterval>;
    interval = this.startCarAnimation(car, data.velocity, track, isMoving);

    const response = await Api.switchCarToDriveMode(id);
    if (response === undefined) {
      isMoving = false;
      clearInterval(interval);
      buttonB.disabled = false;
    } else {
      const finisher: Finisher = {
        id: id,
        speed: data.velocity,
        name: carName.innerHTML,
      };
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
      //this.showWinner();
    }
  }

  private startCarAnimation(car: SVGElement, speed: number, track: HTMLElement, isMoving: boolean) {
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
    return setInterval(() => {
      if (isMoving === true) {
        const currentTransform = getComputedStyle(car).transform;
        const currentTranslateX = parseFloat(currentTransform.split(',')[4]);
        const speedReduction = (speed / 50) * calculateSpeedReduction();
        const newTranslateX = currentTranslateX + speedReduction;
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
    this.raceTable.rows.forEach((row) => {
      const buttonA = row.querySelector('.button_start') as HTMLButtonElement;
      buttonA.click();
      this.buttonReset.disabled = true;
      this.buttonRace.disabled = true;
      this.buttonGenerate.disabled = true;
      this.formCreateCar.querySelector('button').disabled = true;
    });
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

  private chooseWinner(): Finisher {
    this.curentRaceResults.sort((a, b) => b.speed - a.speed);
    return this.curentRaceResults[0];
  }
}

export default App;
