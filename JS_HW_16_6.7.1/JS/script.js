/*
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  sayHi() {
    return 'Hello '+this.name;
  }
}

class Female extends User {
  sayHi() {
    return 'Привет '+this.name+'! ты зарегистрирована';
  }
}

const Man = new User('someone', '123@ex.com', 'qwerty')
console.log(Man);
console.log(Man.sayHi());

const Anya = new Female('Аня', '123@gmail.com', 'e98jc98r')
console.log(Anya);
console.log(Anya.sayHi());

*/
//Создайте класс Customer, у которого будет имя в конструкторе и метод buy, выводящий в консоль слово “Куплено”.
//Создайте подкласс childCustomer, который наследует конструктор и метод Customer, но имеет собственный метод getPresent, который выводит в консоль фразу “Шарик в подарок”.

class Customer {
  constructor(name, buy) {
    this.name = name;
    this.buy = buy;
  }
  buy() {
    return 'Куплено'+this.name;
  }
}

class childCustomer extends Customer {
  getPresent() {
    return 'Шарик в подарок'+this.name;
  }
}

const Buyer = new Customer('Mark', 'Куплено')
console.log(Buyer);
console.log(Buyer.buy);

const Child = new childCustomer('Junior', 'something')
console.log(Child);
console.log(Child.getPresent());
