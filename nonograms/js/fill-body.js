import { createMainSection } from "../sections/main/create-main-section.js";
import { createHeader } from "../sections/header/header.js";

export function fillBody() {
  const body = document.getElementsByTagName("body")[0];

  body.append(createHeader());
  body.append(createMainSection());
}
