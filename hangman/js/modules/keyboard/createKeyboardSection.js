import { abc } from "./abc.js";
import { createKeyButton } from "./createKeyButton.js";

export function createKeyboardSection() {
  const section = document.createElement("section");
  section.classList.add("keyboard");
  abc.map((letter) => {
    section.append(createKeyButton(letter));
  });
  return section;
}
