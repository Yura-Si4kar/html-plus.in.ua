let price = prompt('Введіть суму вашої зарплатні');

let sum = 0;
let interest = 1;

if (price <= 6000) {
    interest = (price * 10) / 100;
    sum = price - interest;
} else if (price > 6000 && price <= 10000) {
    interest = (price * 15) / 100;
    sum = price - interest;
} else if (price > 10000 && price <= 15000) {
    interest = (price * 17.5) / 100;
    sum = price - interest;
} else if (price > 15000) {
    interest = (price * 20) / 100;
    sum = price - interest;
}

alert(`Сума податку: ${interest} грн.\nСума на руки: ${sum} грн.`);