//Создать класс Person
class Person {
  // а. ﻿Конструктор класса как аргумент содержит name.
  // b. ﻿Сам конструктор класса содержит this.name равное аргументу и this.happiness равное 0.

	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
  //3. ﻿Методы класса:
   //a. ﻿hasCat() — возвращает this.happiness увеличенное на 1.
	hasCat() {
		++this.happiness;
	}
  //b. ﻿hasRest() — возвращает this.happiness увеличенное на 1.
	hasRest() {
		++this.happiness;
	}
  //c. ﻿hasMoney() — возвращает this.happiness увеличенное на 1.
	hasMoney() {
		++this.happiness;
	}
   //d. ﻿isSunny() — получает данные о погоде
	isSunny() {

//копируем код из 28 проекта про XMLHTTPRequest со своим APIkey и ставим константу = Москва
    const APIKey = 'dac1a2350a8ff9e3b24b83c7e158f1b0';
    const city = 'Майами';

    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

		const meth = 'GET'

		let req = new XMLHttpRequest()

		req.open(meth, url);
		req.send();
		req.addEventListener('readystatechange', function() {

			if (req.status === 200 && req.readyState === 4) {

				let responseText = req.responseText;
        let responseObject = JSON.parse(responseText);
        let Temp = responseObject.main.temp - 273.15;
        console.log(Temp)

//Это лучше прописать ниже: в Москве из API и в случае если температура в цельсиях больше 15 градусов. увеличивает this.happiness на 1 и возвращает this.happiness (всегда возвращается this.happiness, независимо, увеличили на 1 или нет).
                if(Temp > 15) {
                	++this.happiness
									return this.happiness
                } else {
                	return this.happiness
                }

			}
		})
	}
}

/*
4. ﻿Когда мы заполняем форму в левой колонке и нажимаем submit, происходит такой алгоритм:
 a. ﻿Отменяется дефолтное событие.
 b. ﻿Собираются в переменные все данные из формы.
*/
let form = document.querySelector('form');

form.onsubmit = function(e) {
	e.preventDefault();

const catElem = document.getElementsByName('cat');
const restElem = document.getElementsByName('rest');
const moneyElem = document.getElementsByName('money');
const nameElem = document.getElementsByName('name');

// c. ﻿Создается экземпляр класса Person, с аргументом name взятом из поля ввода с именем.
const NewUser = new Person(nameElem[0].value)
//d. ﻿Делаются проверки, если радиобаттоны установлены на yes в полях «Есть кот?», «Отдыхал недавно?», «Денег ок?», то вызываются методы hasCat(), hasRest() и hasMoney() созданного экземпляра соответственно
if(catElem[0].type == 'radio' && catElem[0].checked) {
	NewUser.hasCat()
}
console.log(NewUser);
if(restElem[0].type == 'radio' && restElem[0].checked) {
	NewUser.hasRest()
}
console.log(NewUser);
if(moneyElem[0].type == 'radio' && moneyElem[0].checked) {
	NewUser.hasMoney()
}
console.log(NewUser);
/*e. ﻿Вызывается метод isSunny() созданного экземпляра.
 f. ﻿Выбираются элементы .personName и .icon.
 g. ﻿В .personName вставьте namе экземпляра и знак : какой знак вставить, так и не понятно.
*/
NewUser.isSunny()

console.log(catElem)
console.log(restElem)
console.log(moneyElem)
console.log(NewUser)

let userName = document.querySelector('.personName')
let userEmoji = document.querySelector('.icon')

userName.innerHTML = NewUser.name + ':';

// h. ﻿Осуществляется проверка итогового значения happiness экземпляра. Если значение 4 вставьте иконку 😁в блок .icon, если 2 или 3 — 😐, в противном случае — ﻿☹️
if(NewUser.happiness == 4)	{
	userEmoji.innerHTML = "😁"
} else if(NewUser.happiness == 3) {
	userEmoji.innerHTML = "😐"
} else if(NewUser.happiness == 2) {
	userEmoji.innerHTML = "😐"
} else {
	userEmoji.innerHTML = "☹️"
}

}
