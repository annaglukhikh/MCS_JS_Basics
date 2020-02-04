const form = document.forms[0];
const insert = document.querySelector('.tempValue');

form.onsubmit = function(s) {
  s.preventDefault();

  let cityName = document.getElementById("cityName").value;

  let city = cityName;

  const APIKey = 'dac1a2350a8ff9e3b24b83c7e158f1b0';

  const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

  let xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);

  xhr.send();

  if(xhr.status != 200) {
    console.log(xhr.status + ' '+ xhr.statusText);
  } else {
    let DATA = JSON.parse(xhr.responseText);
    console.log(DATA);

    let div = document.querySelector('div');
    div.innerHTML = (DATA.main.temp - 273);
  }
}
