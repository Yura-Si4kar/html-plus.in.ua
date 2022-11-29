let str = 'Привіт! Мене звати Юра! Я навчаюсь програмуванню! Оцініть мою роботу!';
let counter = 0;

let interval = setInterval(showText, 200);

function showText() {
    let result = '';

    if (counter <= str.length - 1) {
        document.body.append(result += str[counter]);
    } else if (counter > str.length) {
        clearInterval(interval);
    }
    
    counter++;
}