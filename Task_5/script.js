let sum = prompt('Enter the price!');
let result = [];
calculate();

function calculate() {
  sum/=31;
  result.push(sum);
  
  for(let i=0;i<2;i++) {
    sum *=5;
    result.push(sum);   
}
    
// Інші варіанти вирішення  
    
// let obj = Object.assign({}, result);
// let obj = result.reduce((target, index, key) => {
//   target[key] = index;
//   return target;
// }, {});
  let obj = {
    firstMan: result[0], 
    secondMan:result[1], 
    thirdMan: result[2]
  };  
  
  document.write(`<ol class='list'>
    <li>Перший потратив: ${obj.firstMan} грн.</li>
    <li>Другий потратив: ${obj.secondMan} грн.</li>
    <li>Третій потратив: ${obj.thirdMan} грн.</li>
  </ol>`);
  
  console.log(obj);
}