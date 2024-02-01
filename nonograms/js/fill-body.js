import { createMainSection } from "../sections/main/create-main-section.js";
import { createHeader } from "../sections/header/header.js";
import { createFooter } from "../sections/footer/footer.js";

export function fillBody() {
  const body = document.getElementsByTagName("body")[0];

  body.append(createMainSection());
  body.append(createFooter());
  body.prepend(createHeader());
}
