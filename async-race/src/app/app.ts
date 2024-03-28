import { State } from './state';
import Api from './api';
import GaragePageView from '../pages/garage';
import WinnersPageView from '../pages/winners';
import RaceTable from '../components/race-table.ts/race-table';

class App {
  state: State;
  race: boolean;
  carsElements: HTMLElement[];
  pageGarage: GaragePageView;
  pageWinners: WinnersPageView;
  raceTable: RaceTable;

  constructor() {
    this.state = new State('', '#ffffff', '', '#ffffff', 1, 1);
    this.race = false;
  }

  public async start() {
    //получаем данные объект: { cars: data, totalCount };:
    //const carsData = await Api.getCars(1, 7);
    //console.log(carsData);
    this.pageGarage = new GaragePageView(this);
    this.pageWinners = new WinnersPageView(this);
    this.pageGarage.render();

    this.raceTable = new RaceTable();
    const carsData = await Api.getCars(1, 7);
    this.pageGarage.addRaceTable(this, carsData.cars);
    //рисуем страницу гаража:
    //инпуты значение берем из state
    //общее количество машин из полученного объекта
    //номер страницы из sate
    //все машины в статусе started
  }
}

export default App;
