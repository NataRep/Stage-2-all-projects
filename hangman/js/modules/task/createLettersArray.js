export function createLettersArray(word) {
  const array = [];
  for (let i = 0; i < word.length; i++) {
    let li = document.createElement("li");
    li.classList.add("task__letter");
    array.push(li);
  }
  return array;
}
