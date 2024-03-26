import { carState } from '../utils/interfaces';

export class State {
  inputCreateValue: string;
  inputCreateColor: string;
  inputUpdateValue: string;
  inputUpdateColor: string;
  pageGarage: number;
  pageWinners: number;
  //заполняется в момент переключения страницы если идет гонка
  carsState?: carState[];
  //поля сортировки будут заполняться в мемент переключения страниц, если применены
  sortWinners?: 'id' | 'wins' | 'time';
  orderWinners?: 'ASC' | 'DESC';

  constructor(value1: string, color1: string, value2: string, color2: string, pageGarage: number, pageWinners: number) {
    this.inputCreateValue = value1;
    this.inputCreateColor = color1;
    this.inputUpdateValue = value2;
    this.inputUpdateColor = color2;
    this.pageGarage = pageGarage;
    this.pageWinners = pageWinners;
  }
}
