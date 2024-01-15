import { counterElement } from "../../utils/global-variables.js";

export function createCounterSection() {
  const section = document.createElement("section");
  section.classList.add("counter");

  const wrapper = document.createElement("div");
  wrapper.classList.add("counter__text");
  section.append(wrapper);

  const countWrapper = document.createElement("div");
  countWrapper.classList.add("counter__count");

  const prev = "Incorrect guesses:";
  const postfix = "/6";
  wrapper.append(prev);
  wrapper.append(countWrapper);

  countWrapper.append(counterElement);

  countWrapper.append(postfix);
  //section.innerHTML = `<div class="counter__text">Incorrect guesses:</div><div class="counter__count">${counterElement}/6</div>`;
  return section;
}
