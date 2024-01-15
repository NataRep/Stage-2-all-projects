import { data } from "./data.js";
import { chooseTask } from "../modules/task/choose-task.js";
import { createQuestionElement } from "../modules/task/create-question-element.js";
import { createCuonterElement } from "../modules/counter/create-cuonter-element.js";

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
