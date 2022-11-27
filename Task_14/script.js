let imageBox = document.querySelector('.image_box');

for (let i = 1; i < 9; i++) {
    let cars = document.createElement('img');
    cars.src = './img/cars/car' + [i] + '.jpg';
    imageBox.append(cars);
}

for (let i = 1; i < 9; i++) {
    let flowers = document.createElement('img');
    flowers.src = './img/flowers/flower' + [i] + '.png';
    imageBox.append(flowers);
}
