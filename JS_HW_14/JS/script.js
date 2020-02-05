console.log('You are at ' +window.location);

let crypto = [
{
name : "Bitcoin",
price: 1388.37
},
{
name : "Ethereum",
price: 716
},
{
name : "Litecoin",
price: 140
}
]
//ищем максимальную цену во всех объектах массива
let maxPrice = Math.max.apply(Math, crypto.map(function(n) { return n.price; }));
//выводим в консоль
console.log(maxPrice);

//создаём массив, куда поместим все значения ключа "цена"
let newArr = [];

//создаём цикл, берём найденное максимальное значение цены за 100%. И от него считаем процены по остальным ценам. Добавляем полученное в новый массив
for (i = 0; i < crypto.length; i++) {
  let lengthPercent = (crypto[i].price/maxPrice);
  console.log(lengthPercent);
  newArr.push(lengthPercent);
}

//на всякий случай выводим в консоль, чтобы убедиться, что процены рассчитаны верно
console.log(newArr);

//создаём константы со шкалами, которые в div
const scaleBit = document.querySelector('.scaleOne');
const scaleEth = document.querySelector('.scaleTwo');
const scaleLit = document.querySelector('.scaleThree');

//создаём константы с числами, которые вытаскиваем из нового массива
const bit = Number(newArr[0]);
const eth = Number(newArr[1]);
const lit = Number(newArr[2]);

//делаем pineapple-applepen с шириной div и константами, которые были в массиве. Т.к. в bit, eth, lit находятся проценты, умножаем их на 100, чтобы получить число. Это можно было и раньше сделать, но я не шипко сообразительная.
scaleBit.style.width = bit*100 + 'vw';
scaleEth.style.width = eth*100 + 'vw';
scaleLit.style.width = lit*100 + 'vw';

//забыла, что цену мы вставляем в параграф. Создадим для этого переменные:
let parBit = document.querySelector('.parBit');
let parEth = document.querySelector('.parEth');
let parLit = document.querySelector('.parLit');

//цену из массива тащим в параграф:
parBit.innerHTML = crypto[0]['price'];
parEth.innerHTML = crypto[1]['price'];
parLit.innerHTML = crypto[2]['price'];
