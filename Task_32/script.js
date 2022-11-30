complexDigit(1, 9, 4, 8, 3);

function complexDigit(...args) {
    let number = '';
    for (let i = 0; i < args.length; i++) {
        number += args[i];
    }

    return console.log(Number(number));
}