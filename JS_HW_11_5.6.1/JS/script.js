//Создайте форму, которая будет по сабмиту рассчитывать синус введенного в input угла. Вам понадобится найти этот метод объекта Math

const form = document.forms[0];
const insert = document.querySelector('.total');

form.onsubmit = function(s) {
  s.preventDefault();
  Math.sin(insert.innerHTML = form.elements.sinus.value);
}
