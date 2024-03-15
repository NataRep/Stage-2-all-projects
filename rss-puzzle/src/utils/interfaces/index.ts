export interface LoginFormIntarface {
  nameInput: HTMLInputElement;
  surenameInput: HTMLInputElement;
  button: HTMLButtonElement;
  createErrorMessage: (input: HTMLInputElement, type: string) => void;
}
export interface LevelDataInterfase {
  rounds: Round[];
  roundsCount: number;
}
export interface Round {
  levelData: RoundData;
  words: TaskIntarface[];
}
export interface RoundData {
  id: string;
  name: string;
  imageSrc: string;
  cutSrc: string;
  author: string;
  year: string;
}
export interface TaskIntarface {
  audioExample: string;
  textExample: string;
  textExampleTranslate: string;
  id: number;
  word: string;
  wordTranslate: string;
}
