/*
//version 1

const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

if(rock || scissors) {
  console.log('computer win');
}else if (scissors || paper) {
  console.log('player win');
}else {
  console.log('player win');
}
*/

/*
//version 2
const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

if (player === computer){
console.log("Tie!");
}else if (player === 'paper' && computer === 'rock'){
console.log("You win!");
}else if (player === 'rock' && computer === 'scissors'){
console.log("You win!");
}else if (player === 'scissors' && computer === 'rock'){
console.log("You lose!");
}else if (player === 'rock' && computer === 'paper'){
console.log("You lose!");
}else if (player === 'paper' && computer === 'scissors'){
console.log("You lose!");
}else if (player === 'scissors' || computer === 'paper'){
console.log("You win!");
}else{
console.log("Invalid input, please try again");
}
*/

// vertion 3
const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

// побеждает игрок
if (player === computer) {
  console.log("tie");
}else if (player === 2) {
  if (computer === 0) {
    console.log('player wins');
  }
}else if (player === 1) {
  if (computer === 2) {
    console.log('player wins');
  }
}else if (player === 0) {
  if (computer === 1) {
    console.log('player wins');
}
}

//побеждает компьютер
if (player === computer) {
  console.log("tie");
}else if (player === 0) {
  if (computer === 2) {
    console.log('computer wins');
  }
}else if (player === 1) {
  if (computer === 0) {
    console.log('computer wins');
  }
}else if (player === 2) {
  if (computer === 1) {
    console.log('computer wins');
}
}
