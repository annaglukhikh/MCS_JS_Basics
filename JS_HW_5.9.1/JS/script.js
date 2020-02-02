console.log('You are at ' +window.location);

let myArray = [];

for(let i = 1; i<100000; i++) {
  let remainder = i%6;
  if (remainder == 0) {
    myArray.push(i);
  }
}
    document.body.innerHTML = myArray;
