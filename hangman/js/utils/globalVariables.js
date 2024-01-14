import { data } from "./data.js";
import { chooseTask } from "../../js/modules/task/chooseTask.js";
import { createQuestionElement } from "../../js/modules/task/createQuestionElement.js";
import { createCuonterElement } from "../../js/modules/counter/createCuonterElement.js";

//объект для хранения глобальных переменных по игровому процессу
export const game = {
  countIncorrectGuesses: 0,
  countCorrectGuesses: 0,
  usedLetter: [],
  task: chooseTask(data),
};

//список букв в секретном слове
export const taskLettersArray = []; //из-за того, что это константы не получается сменить слово

//DOM
export const body = document.body;

//элемент в котором нужно менять вопрос при смене задания
export const questionElement = createQuestionElement(game.task.question); // из-за того, что это константы не получается сменить вопрос

// коллекция полей для букв ответа
export const arrayLetterFields = [];

// контейнер подсчета неправильных ответов
export const counterElement = createCuonterElement(0);

// коллекция букв на клавиатуре или сразу при создании повесить на каждую букву обработчик
export const arrayKeyboardButtons = [];
