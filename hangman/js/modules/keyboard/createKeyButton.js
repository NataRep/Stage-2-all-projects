export function createKeyButton(letter) {
  const button = document.createElement("div");
  button.classList.add("keyboard__key");
  button.dataset.letter = letter;
  button.innerHTML = letter;
  return button;
}
