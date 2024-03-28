import { State } from './state';
import Api from './api';
import GaragePageView from '../pages/garage';
import WinnersPageView from '../pages/winners';
import RaceTable from '../components/race-table.ts/race-table';
import { PaginationButtons } from '../utils/interfaces';

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
}

export default App;
