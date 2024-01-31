import { createButton } from "../../components/button/button.js";

export function createMainSection() {
  const mainSection = document.createElement("main");
  mainSection.classList.add("main");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main__container");

  const rowButtons = document.createElement("div");
  rowButtons.classList.add("main__row-buttons");

  //Создаем кнопки
  //TODO: повесить обработчики!!!!!!!!!!!
  const buttonReset = createButton(["button", "button_reset"], "Reset");
  const buttonSave = createButton(["button", "button_save"], "Save");
  const buttonSolution = createButton(
    ["button", "button_solution"],
    "Solution"
  );

  rowButtons.append(buttonReset);
  rowButtons.append(buttonSave);
  rowButtons.append(buttonSolution);

  mainContainer.append(rowButtons);

  mainSection.append(mainContainer);

  return mainSection;
}
