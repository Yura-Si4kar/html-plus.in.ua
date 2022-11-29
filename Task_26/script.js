const cirleBox = document.querySelector('.circle_box');
const redCircle = '<span class="circle red"></span>';
const yellowCircle = '<span class="circle yellow"></span>';
const greenCircle = '<span class="circle green"></span>';

let arr = [];
arr.push(redCircle, yellowCircle, greenCircle);

let count = 0;
let result = 0;
let interval = setInterval(circle, 1000);

function circle() {
    result += count
    cirleBox.insertAdjacentHTML('beforeend', arr[count]);
    count++;

    if (count > arr.length - 1) {
        count = 0;
    }

    if (result === 15) {
        clearInterval(interval);
    }
}