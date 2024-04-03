// Принцип ООП 1: Наследование - заимствование свойств и методов одного объекта другим ( с помощью прототипов __proto__)
// let admin = {
//   rules: 777,
//   isAdmin() {
//     console.log("Я админ " + this.name + ", мои права " + this.rules);
//   },
// };

// let user = {
//   name: "Ivan",
//   age: 20,
//   __proto__: admin
// }
// Функция-конструктор. Название пишется с большой буквы.
// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.myInfo = function() {
//     console.log(`Меня зовут ${this.name}, мне ${this.age} лет`);
//   }
//   this.__proto__ = admin;
// }
// // new позволяет создать объект с помощью функции-конструктора
// let u1 = new User("Petr", 21);
// let u2 = new User("Kate", 18);
// let u3 = new User("Masha", 10);
/*С помощью прототипов можно наследовать свойства и методы родительских объектов.
С помощью функции-конструктора можно создавать много однотипных объектов быстро и просто.
Чтобы не оформлять объекты вручную.
*/

// Использование классов. Классы позволяют сделать то же самое, что было выше, но проще.
/* Класс - шаблон кода, позволяющий легко создавать объекты.
 */
// Функция-конструктор. Название пишется с большой буквы.
class User {
  constructor(name, age, admin = false) {
    this.name = name;
    this.age = age;
    this.admin = admin;
  }
  myInfo() {
    console.log(`Меня зовут ${this.name}, мне ${this.age} лет`);
    if (this.admin == true) {
      console.log("Я админ");
    }
  }
}
class Moderator extends User {
  // extends позволяет унаследовать свойтсва и методы другого класса
  constructor(name, age, admin = false, moder = true) {
    super(name, age, admin); // super позволяет наследовать коснтруктор другого объекта
    this.moder = moder;
  }
  static addPost() {
    //static позволяет создавать статические методы и свойства - методы и свойства, позволяющие делать что то не с конкретным объектом, а с целым классом. (Пример - Math.method())
    console.log("New Post");
  }
  static master = true;
  myInfo() {
    super.myInfo();
    console.log("Я модератор");
  }
}

// new позволяет создать объект с помощью функции-конструктора
let u1 = new User("Petr", 21, true);
let u2 = new User("Kate", 18);
let u3 = new User("Masha", 10);
let m1 = new Moderator("Maga", 40);
