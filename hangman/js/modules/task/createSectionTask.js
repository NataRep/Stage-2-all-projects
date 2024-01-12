export function createSectionTask(task) {
  const word = task.word;
  const question = task.question;

  const section = document.createElement("section");
  section.classList.add("task");

  //создаем блок для слова
  const wordField = document.createElement("ul");
  wordField.classList.add("task__word");

  //заполняем блок контейнерами для букв
  for (let i = 0; i < word.length; i++) {
    let li = document.createElement("li");
    wordField.append(li);
  }

  //создаем блок с вопросом
  const hint = document.createElement("div");
  hint.classList.add("task__hint", "hint");

  const hintTitle = document.createElement("div");
  hintTitle.classList.add("hint__title");
  hintTitle.innerHTML = "Hint:";

  const hindQuestion = document.createElement("div");
  hindQuestion.classList.add("hint__question");
  hindQuestion.innerHTML = question;

  section.append(wordField);
  section.append(hint);
  hint.append(hintTitle);
  hint.append(hindQuestion);

  return section;
}
