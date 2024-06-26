class People {
  /**
   * Класс человек
   * @param {String} fio Фамилия Имя Отчество
   * @param {String} birthday Дата рождения
   * @param {String} numbers Номера телефонов
   * @param {Number} room Комната проживания
   */
  constructor(fio, birthday, numbers = "", room = "") {
    let name = fio.toLowerCase().split(" ");
    this.name = {};
    this.name.f = name[0][0].toUpperCase() + name[0].slice(1);
    this.name.i = name[1][0].toUpperCase() + name[1].slice(1);
    this.name.o = name[2][0].toUpperCase() + name[2].slice(1);

    let date = birthday.split(".");
    this.date = {};
    this.date.d = +date[0];
    this.date.m = +date[1];
    this.date.y = +date[2];

    this.numbers = numbers.split(", ");

    this.room = +room;
  }
  static month = [
    "января",
    "феварля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  /**
   * Вывести ФИО
   * @return {String} Строка формата "Фамилия Имя Отчество"
   */
  getFio() {
    return `${this.name.f} ${this.name.i} ${this.name.o}`;
  }
  /**
   * вывести ДР пользователя
   * @return {String} Строка формата "24 июля 1997"
   */
  getBirthday() {
    return `${this.date.d} ${People.month[this.date.m - 1]} ${this.date.y}`;
  }
  /**
   * вывести Фамилия_Имя_Отчество.расширение
   * @param {String} extention расширение, например "jpg" или "png"
   * @return {String} Строка формата "24 июля 1997"
   */
  getImgSrc(extension) {
    return `${this.name.f}_${this.name.i}_${this.name.o}.${extension}`;
  }
  /**
   * Вывести все номера телефона или только первый номер
   * @param {Boolean} allNumbers если true то все номера иначе только первый
   * @return {String} Строка формата: "89005553535, 89210543328"
   */
  getPhone(allNumbers) {
    if (this.numbers.length == 0 || this.numbers[0].length == 0) {
      return undefined;
    }
    if (allNumbers) {
      return this.numbers.join(", ");
    } else {
      return this.numbers[0];
    }
  }
}

let people1 = new People(
  "Пестерев Кирилл Владимирович",
  "26.03.2003",
  "88005553535, 88005553536",
  228
);
let people2 = new People("Пестерев Вадим Хуяревич", "25.03.2000");

console.log(people1.getFio());
console.log(people2.getFio());
console.log(people2.getImgSrc("jpg"));
