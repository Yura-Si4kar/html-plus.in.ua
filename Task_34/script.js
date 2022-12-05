let imageBox = document.querySelector('.image_box');
let wrapper = document.createElement('div');
let big = document.createElement('img');
document.addEventListener('click', onPictureClick);

init();

function init() {
    getImage();
}

function getImage() {
    for (let i = 1; i < 9; i++) {
        let cars = document.createElement('img');
        cars.src = './img/car' + [i] + '.jpg';
        cars.width = 250;
        cars.className = `car`;
        imageBox.append(cars);
    }
}

function onPictureClick(e) {
    let click = e.target;

    if (click.classList.contains('car')) {
        showBigPicture(e);
        console.log('клік по фото');
    } else if (click.classList.contains('car big')){
        removeBigPicture();
        console.log('клік по великі картинці');
    } else {
        removeBigPicture();
        console.log('клік по полю');
    }
}

function showBigPicture(e) {
    imageBox.append(wrapper);
    wrapper.className = 'wrapper';
    wrapper.appendChild(big);
    big.src = e.target.src;
    big.className = e.target.className;
    big.classList.add('big');
    imageBox.append(wrapper);
}

function removeBigPicture() {
    wrapper.remove();
}