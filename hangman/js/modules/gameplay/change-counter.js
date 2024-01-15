import { counterElement } from "../../utils/global-variables.js";

export function changeCounter(count) {
  counterElement.innerHTML = count;
}
