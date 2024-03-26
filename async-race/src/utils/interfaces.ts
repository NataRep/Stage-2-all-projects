import { HexColor } from './types';

export interface Car {
  name: string;
  color: HexColor;
  id: number;
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
