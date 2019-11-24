let answer = prompt('Введите число');
if(answer<0) {
  answer = Math.abs(answer);
}else if (answer>0) {
  answer = Math.abs(answer);
}else {
  answer = NaN;
}

console.log(answer);
