export function createCounterSection() {
  const section = document.createElement("section");
  section.classList.add("counter");
  section.innerHTML = `<div class="counter__text">Incorrect guesses:</div><div class="counter__count"><span class="counter__incorrect">0</span>/6</div>`;
  return section;
}
