export function chooseTask(data) {
  //функция должна вернуть объект с вопросов, который еще не был использован, если это возможно

  const countTasks = data.length - 1;
  let random = (Math.random() * (countTasks + 1)).toFixed(0);
  console.log(random);

  while (!data[random].unique) {
    if (data.some((item) => item.unique === true)) {
      random = (Math.random() * (countTasks + 1)).toFixed(0);
    } else {
      data.forEach((el) => {
        el.unique = true;
      });
      random = (Math.random() * (countTasks + 1)).toFixed(0);
    }
  }
  //отмечаем вопрос как использованный
  data[random].unique = false;

  return data[random];
}
