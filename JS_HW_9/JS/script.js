/*1. ﻿Написать такой JS, который по нажатию на кнопку с классом .request изменит стиль блока .popup на строку flex*/

window.addEventListener('load', function(){
  const button = document.querySelector('.request');
  const popup = document.querySelector('.popup');
  button.addEventListener('click', ()=>{
    popup.style.display = 'flex';
  })
})

/*2. ﻿По нажатию на элемент с классом closePopup — изменит стиль .popup обратно на ‘none’*/

window.addEventListener('load', function(){
  const closePopup = document.querySelector('.closePopup');
  const popup = document.querySelector('.popup');
  closePopup.addEventListener('click', ()=>{
    popup.style.display = 'none';
  })
})

/*3. ﻿По нажатию на элемент .openMenu изменит свойство left у элемента .menu на значение 0*/

window.addEventListener('load', function(){
  const openMenu = document.querySelector('.openMenu');
  const menu = document.querySelector('.menu');
  openMenu.addEventListener('click', ()=>{
    menu.style.left = '0';
  })
})

/*4. ﻿По нажатию на элемент .closeMenu — изменит свойство left у .menu обратно на строку ‘-50vw’*/

window.addEventListener('load', function(){
  const closeMenu = document.querySelector('.closeMenu');
  const menu = document.querySelector('.menu');
  closeMenu.addEventListener('click', ()=>{
    menu.style.left = '-50vw';
  })
})
