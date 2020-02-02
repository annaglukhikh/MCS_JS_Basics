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

for(childArr in names) {
  for(animalsArr in names[childArr]) {
    for(elemArr in names[childArr][animalsArr]){
      console.log(names[childArr][animalsArr][elemArr]);
    }
  }
}
