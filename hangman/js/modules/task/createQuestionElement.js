export function createQuestionElement(question) {
  const elem = document.createElement("div");
  elem.classList.add("hint__question");
  elem.innerHTML = question;
  return elem;
}
