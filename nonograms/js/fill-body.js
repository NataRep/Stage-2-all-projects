import { createMainSection } from "../sections/main/create-main-section.js";

export function fillBody() {
  const body = document.getElementsByTagName("body")[0];

  body.append(createMainSection());
}
