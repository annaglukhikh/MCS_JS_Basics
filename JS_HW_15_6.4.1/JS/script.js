const APIKey = 'dac1a2350a8ff9e3b24b83c7e158f1b0';
//const city = 'Екатеринбург';

let city = document.querySelector('input');

const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();

form.onsubmit = function(s) {
  if(xhr.status != 200) {
    console.log(xhr.status + ' '+ xhr.statusText);
  } else {
    let DATA = JSON.parse(xhr.responseText);
    console.log(DATA);
    //document.write(DATA.main.temp - 273)
    let div = document.querySelector('div');
    div.innerHTML = (DATA.main.temp - 273);
  }
}
/*
if(xhr.status != 200) {
  console.log(xhr.status + ' '+ xhr.statusText);
} else {
  let DATA = JSON.parse(xhr.responseText);
  console.log(DATA);
  //document.write(DATA.main.temp - 273)
  let div = document.querySelector('div');
  div.innerHTML = (DATA.main.temp - 273);
}
*/
