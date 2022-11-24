let input = prompt('Введіть число');

init();

function init() {
    while (inputValidate(input)) {
        alert('Це не число!');
        input = prompt('Введіть число');
    }

    getDivideNumber()
}

function getDivideNumber() {
    let num = Number(input);
    let list = [];
    let res = 0;

    for (let i = 1; i <= 10; i++){
        res = (numberValidate(num, i)) ? list.push('Число ділиться на: ' + i) : '';
    }

    return alert (list.join('\n'));
}

function numberValidate(val, i) {
    return val % i === 0;
}

function inputValidate(value) {
    return isNaN(value) || value === '' || value === null;
}