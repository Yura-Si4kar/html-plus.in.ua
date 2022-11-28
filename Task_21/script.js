const poem = ["Мороз", "и", "солнце", "день", "чудесный"];
alert(`${poem.join(' ')}`);
const deleteNumber = +prompt(`Введіть номер слова від 1 до ${poem.length}, яке потрібно видалити.`);
const enterWord = prompt('Введіть слово, яке потрібно вставити в речення.');

init();

function init() {
    getNumber();
    getText();
    
    replace();
}

function getNumber() {
    while (valiadtionText(enterWord)) {
        enterWord = prompt('Вірно заповніть значення');        
    };
}

function getText() {
    while (validationNumber(deleteNumber)) {
        deleteNumber = prompt('Не вірний номер! Введіть вірний номер!');
    };
}

function validationNumber(value) {
    return  isNaN(value) || value === '' || value === null;
}

function valiadtionText(val) {
    return isNaN(val) || val === '' || val === null;
}

function replace() {
    poem.splice(deleteNumber - 1, 1, enterWord);
    let str = poem.join(' ');
    let result = document.querySelector('.result');
    result.innerHTML = `<b style="font-size:25px;">${str}</b>`;
}
