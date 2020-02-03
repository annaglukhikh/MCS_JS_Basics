//Создайте форму, которая будет по сабмиту рассчитывать синус введенного в input угла. Вам понадобится найти этот метод объекта Math

const form = document.forms[0];
const insert = document.querySelector('.total');

form.onsubmit = function(s) {
  s.preventDefault();

  let sinus = document.getElementById("quantity").value;

//  console.log(Math.sin(sinus));
  insert.innerHTML = Math.sin(sinus)
}
//переписать функцию так, чтобы в качестве параметра было значение из инпута
