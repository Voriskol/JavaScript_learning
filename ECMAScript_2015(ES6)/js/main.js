// function sum(a, b) {
//   return a + b;
// }

// let date = [4, 8];
// sum(...date); // Оператор расширения. Позволяет передавать в аргументы функции элементы массива простым способом

// Деструктивное присваивание
// let [a, b, c, d] = [10, 5, 8, 9];

// Стрелочная функция

// let sum = (a, b, c) => {
//   return a + b + c;
// };
// или
// let sum = (a,b,c) => a+b+c; // удобно так делать когда одно действие в функции
// sum(5, 2, 3);

// Создание двоичных чисел

// let a = 0b0111;

// Новые методы для работы со строками

// console.log("Str".repeat(3));
// console.log("Hello my dick is very big".includes("my"));
// console.log("Hello my baby".startsWith("Hello"));

// Новые методы работы с массивами

// Array.fill(0) - заполнит массив эдементами 0

// Множества
// let set = new Set();
// set.add(1); // добавление
// set.add(2);
// set.add(3);
// set.add(1);
// console.log(set);
// console.log(set.has(4)); // Проверка, есть ли этот элемент в множестве
// console.log(set.size); // hfpvth vyj;tcndf
// set.delete(2);
// set.clear();

// let arr = [1, 5, 4, 3, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [...new Set(arr)]; // Удаление дубликатов
// console.log(arr2);

let a = 55;
console.log(a.toString());

let K = Number(require('fs').readFileSync(0, 'utf8'))
let obj = {1: 'Плохо', 2: 'Неудовлетворительно', 3: 'Удовлетворительно', 4: 'Хорошо', 5: 'Отлично'};
