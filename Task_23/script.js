let group1 = ["Агеев", "Дмитренко", "Иванов", "Семенов", "Шаповалов"];
let group2 = ["Филонов", "Изюмов", "Кабанов", "Дюдарев"];

workWithArray();

function workWithArray() {
    document.write('<h2>Результат:</h2>')
    document.write('<ol>');
    group1.unshift('Березина');
    document.write(`<li>${group1}</li>`);
    group1.push('Ященко');
    document.write(`<li>${group1}</li>`);
    group1.splice(4, 1, 'Ковалеву', 'Горобченко');
    document.write(`<li>${group1}</li>`);
    let newArr = [...group1, ...group2];
    document.write(`<li>${newArr}</li>`);
    newArr.sort();
    document.write(`<li>${newArr}</li>`);
    document.write('</ol>');
}