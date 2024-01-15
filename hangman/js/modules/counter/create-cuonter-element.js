export function createCuonterElement(count) {
  const elem = document.createElement("span");
  elem.classList.add("counter__incorrect");
  elem.innerHTML = count;
  return elem;
}
