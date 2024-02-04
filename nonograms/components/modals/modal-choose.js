import { createModal } from "./modal.js";
import { createButton } from "../../components/button/button.js";
import { startGame } from "../../js/start-game.js";
import { taskArray } from "../../js/data.js";
import { newGame } from "../../js/start-game.js";
import { setTimer } from "../../js/start-game.js";

export function createModalChooseTask() {
  const modal = createModal();
  modal.classList.add("modal_choose");

  const title = document.createElement("h2");
  title.innerHTML = "Choose what you want to solve:";

  modal.append(title);

  //уровни игры
  const wrapperLevels = document.createElement("div");
  wrapperLevels.classList.add("modal__levels");

  //обертка исписка игр
  let wrapperTasks;

  let selectedLevel;

  //создаем массив без повторений уровней игры
  const levels = Array.from(
    new Set(
      taskArray.map((task) => {
        return task.level;
      })
    )
  );
  //для каждого уровня игры создаем радио-кнопку
  levels.forEach((level) => {
    //выберем по умолчанию текущий уровень игры и добавим к нему класс button_active
    let buttonLevel = document.createElement("div");
    buttonLevel.classList.add("modal__level");

    let input = document.createElement("input");
    input.type = "radio";
    input.id = level;
    input.name = "levels";

    let label = document.createElement("label");
    label.setAttribute("for", level);
    label.innerHTML = level;

    buttonLevel.append(input);
    buttonLevel.append(label);

    if (level === newGame.taskLevel) {
      selectedLevel = level;
      input.checked = true;
    }

    buttonLevel.addEventListener("click", () => {
      if (buttonLevel.cheked != true) {
        wrapperTasks.remove();
        wrapperTasks = createTasksButtons(level, modal);

        modal.append(wrapperTasks);
      }
    });

    wrapperLevels.append(buttonLevel);
  });

  modal.append(wrapperLevels);

  //первоначально выводим список выбранного уровня игр
  wrapperTasks = createTasksButtons(selectedLevel, modal);

  modal.append(wrapperTasks);

  return modal;
}

//функция создания кнопок заданий по уровню

function createTasksButtons(level, modal) {
  //задачи уровня игры генерируются по клику на выбранный уровень
  const wrapperTasks = document.createElement("div");
  wrapperTasks.classList.add("modal__tasks");

  let levelTasks = taskArray.filter((task) => {
    if (task.level === level) return task;
  });
  levelTasks.forEach((task) => {
    const buttonTask = createButton(["button", "button_task"], task.name);

    buttonTask.addEventListener("click", () => {
      modal.remove();
      clearInterval(setTimer);
      startGame(task);
    });

    wrapperTasks.append(buttonTask);
  });

  return wrapperTasks;
}
