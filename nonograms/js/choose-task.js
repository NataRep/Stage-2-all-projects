import { taskArray } from "./data.js";

export function chooseTask(taskName) {
  if (taskName === "random") {
    const number = Math.floor(Math.random() * taskArray.length);
    return taskArray[number];
  } else {
    return taskArray.find((task) => task.name === taskName);
  }
}
