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

/* for(key in crypto) {
  for(price in crypto[key]) {
    console.log(crypto[key][price]);
  }
}
*/
//let maxLength = 0;
//for (i = 0; i < 100000; i++) {
//  let currentPrice = crypto.find(item => item.price <= 3000);
//  console.log(currentPrice);
//}

// Создайте страницу, демонстрирующую сравнение курсов криптовалюты — Заголовок берем из name — Цену пишем в параграф — Устанавливаем на странице цветной блок, ширина которого привязана к цене валюты

let maxPrice = crypto.find(item => item.price <= 100000);
console.log(maxPrice);

let strokeLength = Object.keys(maxPrice)

console.log(strokeLength);
//консоль: 
//{name: "Bitcoin", price: 1388.37}
//script.js:37 (2) ["name", "price"]
