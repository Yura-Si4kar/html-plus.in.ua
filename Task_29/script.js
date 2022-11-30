let backgoundColor = prompt('Напишіть бажаний колір фону тексту на Англійській мові.');
let color = prompt('Напишіть бажаний колір тексту на Англійській мові.');
let text = prompt('Введіть потрібний текст.');

myParagraph(backgoundColor, color, text);

function myParagraph(bg,c,t) {
    let block = document.createElement('p');
    block.style.backgroundColor = bg;
    block.style.color = c;
    block.innerText = t;
    document.body.append(block);
}
