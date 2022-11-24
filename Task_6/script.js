let name = prompt('Enter Your name!');
let birthYear = prompt('Enter the year of birth!');

showMessage(name, birthYear);
// Виправити!!! Не вірно рахує, якщо день народження ще не наступив
function showMessage(name, date) {
  let currentDate = new Date().getFullYear() - date;
  return document.write(`Результат: ${name}: ${currentDate}`)
};