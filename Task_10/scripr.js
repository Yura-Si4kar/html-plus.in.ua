let num = prompt('Введіть чотирьохзначне число.');

init();

function init(msg) {
  while (validation(num)) {    
    alert('Введіть чотирьохзначне число!');
    num = prompt(msg);
  } 
    
  if (num % 2 === 0) {
    console.log('Число є парним!');
    productOfNumber();
  } else {
    console.log('Число є не парним!');
    sumOfNumber();
  }
}

function validation(val) {
  return val === null || val === '' || 4 > val.length;
}
 
function productOfNumber() {
  let mult = 1;
  
  for (let i = 0; i < num.length; i++) {
    mult = num[i] * mult;
  }
  
  console.log(`Добуток чисел числа ${mult}`);
}

function sumOfNumber() {
  let sum = 0;
  
  for (let i = 0; i < num.length; i++) {
    sum = +num[i] + sum;
  }
  
  console.log(`Сума чисел числа ${sum}`);
}
