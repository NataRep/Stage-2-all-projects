import { taskArray } from "./data.js";

export function chooseTask(taskName, level) {
  //рандомный выбор таска
  if (taskName === "random" && level === "random") {
    let rundom = Math.floor(Math.random() * taskArray.length);
    return taskArray[rundom];
  } else if (taskName === "random" && level != "random") {
    //рандомный выбор таска в указанном уровне для старта игры 5x5
    let filterTaskArray = taskArray.filter((task) => {
      if (task.level === level) return task;
    });
    let rundom = Math.floor(Math.random() * filterTaskArray.length);
    return filterTaskArray[rundom];
  } else {
    //выбор таска с указанным уровнем и названием
    let filterTaskArray = taskArray.filter((task) => {
      if (task.level === level) return task;
    });
    return filterTaskArray.find((task) => task.name === taskName);
  }
}
