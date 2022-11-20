let floor = +prompt('На який поверх потрібно доставити?');

const lowFloorPrice = 20;
const middleFloorPrice = 30;
const highFloorPrice = 40;

getPrice(floor);

function getPrice(x) {
  if(x <= 1) {
    alert('Доставка безкоштовна!')
  } else if (x > 1 && x <= 4) {
    getLowFloorPrice(x);
  } else if (x >= 5 && x <= 7) {
    getMiddleFloorPrice(x);
  } else if (x >= 8) {
    getHighFloorPrice(x);
  }
}

function getLowFloorPrice(l) {
  let result = (l - 1) * lowFloorPrice;
    
  return alert(`Сума доставки на ваш поверх: ${result} грн.`);
}

function getMiddleFloorPrice(m) {
  let result = ((m - 4) * middleFloorPrice) + 3 * lowFloorPrice;
    
  return alert(`Сума доставки на ваш поверх: ${result} грн.`);
}

function getHighFloorPrice(h) {
      let result = ((h-7) * highFloorPrice) + 3 * middleFloorPrice + 3 * lowFloorPrice;
    
  return alert(`Сума доставки на ваш поверх: ${result} грн.`);
}
