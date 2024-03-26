import { carState } from '../utils/interfaces';

export class State {
  inputCreateValue: string;
  inputCreateColor: string;
  inputUpdateValue: string;
  inputUpdateColor: string;
  carsState: carState[];
  pageGarage: number;
  pageWinners: number;
  sortWinners?: 'id' | 'wins' | 'time';
  orderWinners?: 'ASC' | 'DESC';

  constructor(
    value1: string,
    color1: string,
    value2: string,
    color2: string,
    carsStateArray: carState[],
    pageGarage: number,
    pageWinners: number
  ) {
    this.inputCreateValue = value1;
    this.inputCreateColor = color1;
    this.inputUpdateValue = value2;
    this.inputUpdateColor = color2;
    this.carsState = carsStateArray;
    this.pageGarage = pageGarage;
    this.pageWinners = pageWinners;
  }
}
