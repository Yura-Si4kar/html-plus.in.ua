alert('Загадайте число!');
alert('Помножте його на 2!');
alert('До результату додайте 7!');

calculate();

function calculate() {
    let number = +prompt('Введіть результат!');
    let result = (number-7)/2 <= 0 ? alert('Число має бути більше 0') : (number-7)/2;
  
    return alert(`Число, яке ви загадали ${result}`);
}
