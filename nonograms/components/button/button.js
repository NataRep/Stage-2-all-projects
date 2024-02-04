export function createButton(arrayClass, text) {
  const button = document.createElement("button");
  button.innerHTML = text;
  arrayClass.forEach((className) => {
    button.classList.add(className);
  });
  return button;
}
