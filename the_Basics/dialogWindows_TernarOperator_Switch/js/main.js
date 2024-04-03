alert("Text");

// let age = prompt("ВВедите что нибудь");
// if (age != null) {
//   alert("Мой возраст" + age);
// } else {
//   alert("Вы нажали отмену");
// }

// if (confirm("Удалить ваш аккаунт?")) {
//   alert("Удалено");
// } else {
//   alert("Попочка в сохранности");
// }

// confirm("Удалить ваш аккаунт?") ? alert("Удалено") : alert("Отменено");

let age = prompt("Введите ваш возраст");
// if (age < 18) {
//   alert("Мой возраст меньше 18");
// } else if (age > 18) {
//   alert("Мне больше 18");
// } else  {
//   alert("Мне 18 лет");
// }

switch (true) {
  case age > 18:
    alert("Мне больше 18");
    break;
  case age < 18 && age > 0:
    alert("Мой возраст меньше 18");
    break;
  case age == 18:
    alert("Мне 18 лет");
    break;
  default:
    alert("Неверный возраст");
}
