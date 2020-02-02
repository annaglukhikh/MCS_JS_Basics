console.log('You are at ' +window.location);

let names = [
[
  ['куры', 'гуси', 'павлины'],
  ['сокол', 'орел', 'соловей']
],
[
  ['собака', 'кошка'],
  ['обезьяна', 'рысь']
]
]

for(key in names) {
  console.log(names[key][key]);
}
