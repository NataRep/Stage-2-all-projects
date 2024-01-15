import { abc } from "./abc.js";
import { createKeyButton } from "./create-key-button.js";
import { arrayKeyboardButtons } from "../../utils/global-variables.js";

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
