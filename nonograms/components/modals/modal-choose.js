import { createModal } from "./modal.js";
import { createButton } from "../../components/button/button.js";
import { chooseTask } from "../../js/choose-task.js";
import { startGame } from "../../js/start-game.js";
import { taskArray } from "../../js/data.js";

export function createModalChooseTask() {
  const modal = createModal();
  modal.classList.add("modal_choose");

  const title = document.createElement("h2");
  title.innerHTML = "Choose what you want to solve:";

  modal.append(title);

  const wrapper = document.createElement("div");
  wrapper.classList.add("modal__tasks-wrapper");

  modal.append(wrapper);

  for (let i = 0; i < taskArray.length; i++) {
    const newTask = taskArray[i];

    const buttonTask = createButton(["button", "button_task"], newTask.name);

    buttonTask.addEventListener("click", () => {
      modal.remove(), 2000;
      startGame(newTask);
    });

    wrapper.append(buttonTask);
  }
  return modal;
}
