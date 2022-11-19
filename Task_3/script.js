let firstPerson = prompt('Ender your name and surname!');
let secondPerson = prompt('Ender your name and surname!');
let thirdPerson = prompt('Ender your name and surname!');

document.write(`<div class="first_box">
  <p>${firstPerson}</p>
  <p>${secondPerson}</p>
  <p>${thirdPerson}</p>
</div>`);

document.write(`<ol class="list">
  <li>${firstPerson}</li>
  <li>${secondPerson}</li>
  <li>${thirdPerson}</li>
</ol>`);