let number = +prompt('Введіть число від 1 до 10');

function randomInteger(min, max) {
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  return (number === rand) ? alert(`Вам пощастило! Ваше число ${rand}`) : alert(`Не вгадали! Ваше число ${rand}. Попробуйте ще раз! :)`);
}

randomInteger(1, 10);
