let answer = prompt('Введите число');
/* if(answer<0) {
  answer = Math.abs(answer);
}else if (answer>0) {
  answer = Math.abs(answer);
}else {
  answer = NaN;
}
*/
(answer >= 0) ? console.log(answer) : console.log(Math.abs(answer));

// console.log(answer);
