import { abc } from "./abc.js";
import { createKeyButton } from "./createKeyButton.js";
import { arrayKeyboardButtons } from "../../../js/utils/globalVariables.js";

export function createKeyboardSection() {
  const section = document.createElement("section");
  section.classList.add("keyboard");
  abc.map((letter) => {
    let button = createKeyButton(letter);
    arrayKeyboardButtons.push(button);
    section.append(button);
  });
  return section;
}
