import { taskLettersArray } from "../../utils/global-variables.js";

export function createLettersArray(word) {
  for (let i = 0; i < word.length; i++) {
    let li = document.createElement("li");
    li.classList.add("task__letter");
    taskLettersArray.push(li);
  }
  return taskLettersArray;
}
