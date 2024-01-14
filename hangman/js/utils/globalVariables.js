import { data } from "./data.js";
import { chooseTask } from "../../js/modules/task/chooseTask.js";
import { createLettersArray } from "../../js/modules/task/createLettersArray.js";
import { createQuestionElement } from "../../js/modules/task/createQuestionElement.js";
import { createCuonterElement } from "../../js/modules/counter/createCuonterElement.js";

//объект для хранения глобальных переменных по игровому процессу
export const game = {
  countIncorrectGuesses: 0,
  countCorrectGuesses: 0,
};

//выбираем случайным образом задание из массива дата
export const task = chooseTask(data);

//секретное слово
export const word = task.word;

//подсказка для отгадывания секретного слова
export const question = task.question;

//список букв в секретном слове
export const taskLettersArray = createLettersArray(word);

//DOM
export const body = document.body;
//элемент в котором нужно менять вопрос при смене задания
export const questionElement = createQuestionElement(question);

// коллекция полей для букв ответа
export const arrayLetterFields = [];

// контейнер подсчета неправильных ответов
export const counterElement = createCuonterElement(0);

// коллекция букв на клавиатуре или сразу при создании повесить на каждую букву обработчик
