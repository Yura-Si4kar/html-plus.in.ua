let userPrice = prompt('Введіть суму, яку ви хочете поставити!');

setTimeout(randomizer(-5, 5), 1000);

function randomizer(min, max) {
    let random = Math.floor(min + Math.random() * (max + 1 - min));

    if (random <= 0) {
        alert(`Число: ${random}\nНажаль ви програли((`)
    } else if (random > 0) {
        let sum = userPrice * random;
        alert(`Число: ${random}\nВи виграли: ${sum} грн`);
    }
} 
