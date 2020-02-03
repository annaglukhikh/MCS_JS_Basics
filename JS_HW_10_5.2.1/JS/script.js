//Напишите функцию, которая на вход получает число, потом возводит его в случайную целую степень от 1 до 10 (не включая 10), а потом возвращает модуль результата при помощи метода abs() объекта Math
//  return Math.abs(Math.pow(resultNumber, Math.floor(Math.random()*(11-1)+1)));

let resultNumber = prompt('insert number here');
let number = (resultNumber) => {
  return Math.abs(Math.pow(resultNumber, Math.floor(Math.random()*10+1)));
}
console.log(number(resultNumber));
