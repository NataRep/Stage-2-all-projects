import { audio } from "../../components/audio/audio.js";

export function createButton(arrayClass, text) {
  const button = document.createElement("button");
  button.innerHTML = text;
  arrayClass.forEach((className) => {
    button.classList.add(className);
  });

  button.addEventListener("click", () => {
    audio.button.play();
  });

  return button;
}
