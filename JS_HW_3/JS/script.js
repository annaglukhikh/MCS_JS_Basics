//я так и не смогла разобраться, как обратиться к тегу body, чтобы поменять его цвет. Поэтому создала для него класс .colored
const Background = document.querySelector('.colored');

let backgroundColor = prompt('Какой будет фон у страницы?');

Background.style['background-color'] = backgroundColor;


const Font = document.querySelector('.colored');

let fontColor = prompt('Какой будет цвет текста на странице?');

Font.style['color'] = fontColor;


const personName = document.querySelector('.name');

const inspire = prompt('Как зовут человека, который вас вдохновляет?');

personName.innerHTML = inspire;


const image = document.querySelector('img');

const pic = prompt('Введите адрес картинки');

image.setAttribute('src', pic);


const info = document.querySelector('.shortBio');

const bio = prompt('Введите текст страницы');

info.innerHTML = bio;


const animation = document.querySelector('.shortBio');

console.log(animation.className);

animation.className += ' animated';
