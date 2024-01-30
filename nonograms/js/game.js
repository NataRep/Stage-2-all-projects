export class Game {
  constructor(task) {
    (this.matrix = task.matrix),
      (this.taskName = task.name),
      (this.taskLevel = task.level),
      (this.time = 0);
    this.isWin = false;
  }

  createGameFeild() {
    this.gameFeild = {
      hintRow: [],
      hintCeil: [],
      matrix: [],
    };
  }
}
