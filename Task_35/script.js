const imageBox = document.querySelector('.image_box');

document.addEventListener('click', clickOnImage);

init();

function init() {
    getImage();
}

function getImage() {
    for (let i = 1; i < 9; i++) {
        let cars = new Image();
        cars.src = `./img/car/car${i}.jpg`;
        cars.width = 250;
        cars.className = `car`;
        cars.dataset.id = `${i}`;
        imageBox.append(cars);
    }
}

function clickOnImage(e) {
    let click = e.target;
    let id = getImageId(e);
    
    if (click.classList.contains('car')) {
        getChangeImage(id);
        console.log(id);
    }
}

function getImageId(e) {
    return e.target.dataset.id;
}

function getChangeImage(id) {
    let flowers = new Image();
    flowers.src = `./img/flowers/flower${id}.png`;
    flowers.width = 250;
    flowers.className = `flowers${id}`;
    imageBox.append(flowers);
}