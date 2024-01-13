export function createLettersArray(word) {
  const lettersArray = [];
  for (let i = 0; i < word.length; i++) {
    let li = document.createElement("li");
    li.classList.add("task__letter");
    lettersArray.push(li);
  }
  return lettersArray;
}
