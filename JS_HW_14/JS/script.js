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

for(key in crypto) {
  for(price in crypto[key]) {
    console.log(crypto[key][price]);
  }
}



// Создайте страницу, демонстрирующую сравнение курсов криптовалюты — Заголовок берем из name — Цену пишем в параграф — Устанавливаем на странице цветной блок, ширина которого привязана к цене валюты
