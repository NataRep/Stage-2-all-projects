import { createButton } from "../../components/button/button.js";

export function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const container = document.createElement("div");
  container.classList.add("header__container");

  const logo = document.createElement("img");
  logo.src = "/nonograms/assets/images/logo.svg";
  logo.alt = "logotype";
  logo.classList.add("logo");

  const buttonRow = document.createElement("div");
  buttonRow.classList.add("header__buttons");

  const buttonNewGame = createButton(["button", "button_new-game"], "new game");
  buttonNewGame.id = "buttonNewGame";

  const buttonContinue = createButton(
    ["button", "button_continue"],
    "continue a saved game"
  );
  buttonContinue.id = "buttonContinue";

  container.append(logo);
  buttonRow.append(buttonNewGame);
  buttonRow.append(buttonContinue);
  container.append(buttonRow);
  header.append(container);

  return header;
}
