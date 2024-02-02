export class Game {
  constructor(task) {
    this.matrix = task.matrix;
    this.taskName = task.name;
    this.taskLevel = task.level;
    this.time = 0;
    this.isWin = false;
    this.stopTimer = true;
  }

  createGameFeild() {
    const matrixSize = this.matrix.length;

    //создаем пустую матрицу игрового поля, где в последствии будем отмечать ходы
    this.gameFeild = {
      matrix: new Array(matrixSize).fill("_".repeat(matrixSize)),
    };

    //вычисляем подсказки
    //закрашенное поле в матрице задачи обозначено "x"
    //пустое - "_"

    //подсказки для строк (левая полоса подсказок на игровом поле)
    this.gameFeild.hintRows = this.matrix.map((str) => {
      const array = [];
      let count = 0;

      for (let i = 0; i < str.length; i++) {
        if (str[i] === "x") {
          count++;
          if (str[i + 1] != "x") {
            array.push(count);
            count = 0;
          }
        }
      }
      return array;
    });

    //подсказки для столбцов (верхняя полоса подсказок на игровом поле)
    this.gameFeild.hintCeils = [];

    for (let i = 0; i < matrixSize; i++) {
      let array = [];
      let count = 0;

      for (let j = 0; j < matrixSize; j++) {
        if (this.matrix[j][i] === "x") {
          count++;

          if (j === this.matrix.length - 1 || this.matrix[j + 1][i] != "x") {
            array.push(count);
            count = 0;
          }
        }
      }
      this.gameFeild.hintCeils.push(array);
    }
  }

  //метод сравнения матриц игрового поля и базовой из таска для определения выигрыша
  //вызывается после каждого хода игрока
  compareMatrix() {
    const matrixSize = this.matrix.length;
    let win = true;

    this.gameFeild.matrix;
    this.matrix;

    for (let i = 0; i < matrixSize; i++) {
      if (this.gameFeild.matrix[i] != this.matrix[i]) {
        win = false;
      }
    }
    this.isWin = win;
    return this.isWin;
  }

  //метод фиксации хода игрока по координатам  в матрице
  //вызывается после каждого хода игрока, координаты берем из DOM
  checkBoxInMatrix(x, y, marker) {
    //marker - "x" или "_"
    const str = this.gameFeild.matrix[y];
    let newStr = str;
    //let marker = newStr[x] === "_" ? "x" : "_";
    newStr = newStr.slice(0, x) + marker + newStr.slice(x + 1);
    this.gameFeild.matrix.splice(y, 1, newStr);
  }

  reset() {
    //сбрасываю таймер
    this.time = 0;

    //очищаю матрицу поля
    const matrixSize = this.matrix.length;
    this.gameFeild = {
      matrix: new Array(matrixSize).fill("_".repeat(matrixSize)),
    };
  }
}
