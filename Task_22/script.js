const minNumber = 1;
const maxNumber = 100;
let arr = [];

getArray(minNumber, maxNumber);

function getArray(min, max) {    
    for (let i = 0; i < 20; i++) {
        let random = Math.floor(min + Math.random() * (max + 1 - min));
        arr.push(random);
    }
    document.write('<h2>Результат:</h2>')
    document.write(`Массив: ${arr}</br>`);
    getTaskNumbers();
}

function getTaskNumbers() {
    let even = arr.filter((ev) => ev % 2 === 0);
    document.write(`Парні числа: ${even}</br>`);
    let divThree = arr.filter(three => three % 3 === 0);
    document.write(`Числа, які діляться на 3: ${divThree}</br>`);
    let divFive = arr.filter(five => five % 5 === 0);
    document.write(`Числа, які діляться на 5: ${divFive}</br>`);
    let divTen = arr.filter(ten => ten % 10 === 0);
    document.write(`Числа, які діляться на 10: ${divTen}`);
}