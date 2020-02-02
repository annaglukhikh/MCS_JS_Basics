/*console.log('You are at ' +window.location);

function moduleSquare(num) {
  return Math.abs(num)/2;
}

console.log(moduleSquare(-3));
console.log(moduleSquare(3));

console.log(Math.floor(2.678));
console.log(Math.round(2.678));

console.log(Math.random());

console.log(Math.random()*(10-5)+5);

console.log(Math.floor(Math.random()*(10-5)+5));

console.log(Math.floor(Math.random()*(11-1)+1));
*/
//Напишите функцию, которая на вход получает число, потом возводит его в случайную целую степень от 1 до 10 (не включая 10), а потом возвращает модуль результата при помощи метода abs() объекта Math
//  return Math.abs(Math.pow(resultNumber, Math.floor(Math.random()*(11-1)+1)));

let resultNumber = prompt('insert number here');
let number = (resultNumber) => {
  return Math.abs(Math.pow(resultNumber, Math.floor(Math.random()*(11-1)+1)));
}
console.log(number(resultNumber));
