const firstQuestion = confirm("Про волшебство дожно быть?");
const secondQuestion = confirm("Надо, чтобы было смешно?");
const thirdQuestion = confirm("Детективная история нужна?");
const fourthQuestion = confirm("Бояться будете?");
const booksList = [
    {
        name: 'Л.Н. Толстой : "Война и мир"',
        magic: false,
        fanny: false,
        detective: false,
        beAfraid: false,
    },
    {
        name: 'Джоан Роулинг : "Гарри Поттер"',
        magic: true,
        fanny: false,
        detective: false,
        beAfraid: false,
    },
    {
        name: 'Братья Стругацкие : "Понедельник начинается в суботу"',
        magic: true,
        fanny: true,
        detective: false,
        beAfraid: false,
    },
    {
        name: 'Агата Кристи : "Вечеринка в Хеллоуин"',
        magic: true,
        fanny: true,
        detective: true,
        beAfraid: false,
    },
    {
        name: 'Джонатан Струад : "Кричащая лестница"',
        magic: true,
        fanny: true,
        detective: true,
        beAfraid: true,
    },
    {
        name: 'Диана Маш : "Заноза для драконьего военачальника"',
        magic: true,
        fanny: false,
        detective: true,
        beAfraid: false,
    },
    {
        name: 'Киррил Круганский : "Смешно или страшно"',
        magic: false,
        fanny: true,
        detective: false,
        beAfraid: true,
    },
    {
        name: 'Стивен Кинг : "Мизери"',
        magic: false,
        fanny: false,
        detective: false,
        beAfraid: true,
    },
    {
        name: 'Эдгар По : "Очень страшные истории"',
        magic: false,
        fanny: false,
        detective: true,
        beAfraid: true,
    },
    {
        name: 'А. Маринина : "Безупречная репутация"',
        magic: false,
        fanny: false,
        detective: true,
        beAfraid: false,
    },
]

findBook();

function findBook() { 
    let book = booksList.find((book) => book.magic === firstQuestion
        && book.fanny === secondQuestion
        && book.detective === thirdQuestion
        && book.beAfraid === fourthQuestion
    );
    
    if (book.length == 0) {
        document.write('<p>Извините, мы ничего не можем вам предложить</p>');
    } else {
        document.write(`<p style="font-size: 25px;">Вам стоит прочитать: <strong style="color: #1e8cbe">${book.name}!</strong></p>`);
    }
}