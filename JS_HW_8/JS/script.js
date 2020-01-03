let Money = prompt('сколько у вас с собой есть денег?');
console.log(Money);

let Apples = prompt('сколько вы купили яблок?');
console.log(Apples);

let Bread = prompt('сколько вы купили батонов хлеба?');
console.log(Bread);

let ApplePrice = prompt('сколько стоит одно яблоко?');
let AppleTotalSum = ApplePrice*Apples;
console.log(AppleTotalSum);

let BreadPrice = prompt('сколько стоит один батон хлеба?');
let BreadTotalSum = BreadPrice*Bread;
console.log(BreadTotalSum);

let TotalSum = AppleTotalSum + BreadTotalSum;

let haveEnough = (element, AppleTotalSum, BreadTotalSum, Money) => {
  let TotalSum = AppleTotalSum + BreadTotalSum;
  if (TotalSum < Money) {
    document.body.innerHTML = "Вам хватает денег на покупки!";
  }else{
    document.body.innerHTML = "Вам не хватает денег";
  }
}

haveEnough(document.body, AppleTotalSum, BreadTotalSum, Money);
