const svetofor = document.querySelectorAll('.circle');

setInterval(changeColor, 1500);

let currentLight = 0;

function changeColor() {
    if (currentLight == 0) {
        svetofor[currentLight].classList.add('red');
        currentLight++;
    } else if (currentLight == 1) {
        svetofor[currentLight - 1].classList.remove('red');
        svetofor[currentLight].classList.add('yellow');
        currentLight++;
    } else if (currentLight == 2) {
        svetofor[currentLight - 1].classList.remove('yellow');
        svetofor[currentLight].classList.add('green');
        currentLight++;
    } else if (currentLight > 2) {
        svetofor[currentLight - 1].classList.remove('green');
        currentLight = 0;
    }
}

// function changeColor() {
//     svetofor[currentLight].className = 'circle';
//     currentLight++

//     if (currentLight > 2) {
//         currentLight = 0;
//     }

//     const activeLight = svetofor[currentLight];
//     activeLight.classList.add(activeLight.getAttribute('color'))
// }