export interface Car {
  name: string;
  color: string;
  id: number;
}
export interface CarsData {
  cars: Car[];
  totalCount?: string;
}
export interface SpeedCar {
  velocity: number;
  distance: number;
}
export interface Winner {
  id: number;
  wins: number;
  time: number;
}
export interface carState {
  id: number;
  status: 'started' | 'stopped' | 'drived';
  speed: number;
  position: number;
}
export interface PaginationButtons {
  prev: HTMLButtonElement;
  next: HTMLButtonElement;
}
export interface CarsMaker {
  maker: string;
  models: string[];
}
export interface Finisher {
  id: number;
  speed: number;
  time: string;
  name: string;
}

export interface Winner {
  id: number;
  wins: number;
  time: number;
}

export interface Winners {
  winners: Winner[];
  totalCount?: string;
}
