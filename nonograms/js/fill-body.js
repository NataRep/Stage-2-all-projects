import { createMainSection } from "../sections/main/create-main-section.js";
import { createHeader } from "../sections/header/header.js";
import { createFooter } from "../sections/footer/footer.js";
import { audio } from "../components/audio/audio.js";

export function fillBody() {
  const body = document.body;
  body.classList.add("page");

  body.append(audio.clean);
  body.append(audio.mark);
  body.append(audio.paint);
  body.append(audio.win);
  body.append(audio.save);
  body.append(audio.button);

  body.append(createMainSection());
  body.append(createFooter());
  body.prepend(createHeader());
}
