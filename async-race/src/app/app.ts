import { State } from './state';
import Api from './api';

class App {
  state: State;
  race: boolean;
  carsElements: HTMLElement[];

  constructor() {
    this.state = new State('', '#ffffff', '', '#ffffff', 1, 1);
    this.race = false;
  }

  public async start() {
    //получаем данные объект: { cars: data, totalCount };:
    const carsData = await Api.getCars(1, 7);
    console.log(carsData);
    //рисуем страницу гаража:
    //инпуты значение берем из state
    //общее количество машин из полученного объекта
    //номер страницы из sate
    //все машины в статусе started
  }
}

export default App;
