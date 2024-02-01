import { createButton } from "../../components/button/button.js";

//Создаем кнопки
//TODO: повесить обработчики!!!!!!!!!!!

export const buttonReset = createButton(["button", "button_reset"], "Reset");
export const buttonSave = createButton(["button", "button_save"], "Save");
export const buttonSolution = createButton(
  ["button", "button_solution"],
  "Solution"
);
export const buttonsTools = [buttonReset, buttonSave, buttonSolution];

export function createMainSection() {
  const mainSection = document.createElement("main");
  mainSection.classList.add("main");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main__container");

  const rowButtons = document.createElement("div");
  rowButtons.classList.add("main__row-buttons");

  rowButtons.append(buttonReset);
  rowButtons.append(buttonSave);
  rowButtons.append(buttonSolution);

  mainContainer.append(rowButtons);

  mainSection.append(mainContainer);

  return mainSection;
}
