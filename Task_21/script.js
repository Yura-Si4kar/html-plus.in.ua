const poem = ["Мороз", "и", "солнце", "день", "чудесный"];
alert(`${poem.join(' ')}`);
const deleteNumber = +prompt(`Введіть номер слова від 1 до ${poem.length}, яке потрібно видалити.`);
const enterWord = prompt('Введіть слово, яке потрібно вставити в речення.');

init();

function init() {
    replace();
}

// function validationNumber(value) {
//     return value > poem.length || value < poem.length;
// }

// function valiadtionText(val) {
//     return isNaN(val) || val === '' || val === null;
// }

function replace() {
    poem.splice(deleteNumber - 1, 1, enterWord);
    let str = poem.join(' ');
    let result = document.querySelector('.result');
    result.innerHTML = `<b style="font-size:25px;">${str}</b>`;
}
