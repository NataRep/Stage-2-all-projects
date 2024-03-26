import { State } from './state';
import GaragePageView from '../pages/garage';
import WinnersPageView from '../pages/winners';

class App {
  state: State;
  race: boolean;
  carsElements: HTMLElement[];
  pageGarage: GaragePageView;
  pageWinners: WinnersPageView;

  constructor() {
    this.state = new State('', '#ffffff', '', '#ffffff', 1, 1);
    this.race = false;
  }

  public async start() {
    //получаем данные объект: { cars: data, totalCount };:
    //const carsData = await Api.getCars(1, 7);
    //console.log(carsData);
    this.pageGarage = new GaragePageView(this.state, this);
    this.pageWinners = new WinnersPageView(this.state, this);
    this.pageGarage.render();
    //рисуем страницу гаража:
    //инпуты значение берем из state
    //общее количество машин из полученного объекта
    //номер страницы из sate
    //все машины в статусе started
  }
}

export default App;
