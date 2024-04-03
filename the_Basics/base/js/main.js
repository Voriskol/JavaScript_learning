
// Переменная - область в памяти, которяа может хранить что-либо
// Инициализация переменной - задание ей значения;


let a = 18;
let str = "56";
let boolean = true;
let boolean2 = false;


let x = 5;
x++;  // Увеличивает переменную на 1, но отображает старое значение
x--;
x+=1 // x=x+1
console.log(x);


let y = 4;
++y;  // Срзу виден новый результат
--y;
console.log(y);


let str1 = "Hello"
// Методы строк: str1.length - длина строки
console.log(str1.length);
console.log("String".length);
console.log(str1[str1.length-1]);

//str1.slice - срез куска строки
console.log(str1.slice(1,3))

//str1.toLowerCase() str1.toUpperCase() - нижний и верхний регистр
// string.trim - убрать пробелы перед и за строкой
let string1 = "   СтРоКа     ";
console.log(string1.toLowerCase().trim());

let result = str1[0].toLowerCase() + str1.slice(1,str1.length).toUpperCase()
console.log(result);


// Логические операции (логический тип)
console.log(true && false);  // И
console.log(false || true);  // ИЛИ
console.log(!true); // ОТРИЦАНИЕ

// Типы данных undefined и null
// undefined - переменная не определена
// null - пуста переменная


// удобные выводы
let p = 5;
console.log(`Привет пидор
я срал тебе в рот 
${p} раз`);

// Библиотека Math

console.log(Math.random());
console.log(Math.max(1,2,3,4,5,6,7,8,0,228));
console.log(Math.pow(4,2)); // возведение в степень
console.log(Math.sqrt(16));

// Math.floor() - округление в нижнюю сторону
// Math.ceil() - округление в большую степень
// Math.round() - округление в ближайшую
// Math.trunc() - отбрасывание чисел после точки
// number.toFixed(2) - отброс до 2 знаков после запятой

console.log(5.32423424234234.toFixed(3))

// Строка в число: +"какая то строка". Пример: +"55"-5 = 50



// Массивы
let arr = [5,2,"str1", true];
console.log(arr);

arr[2] = "Text"
console.log(arr);

arr[4] = 28;
console.log(arr);

let matrix = [
    [1,2,3],
    [2,2,8],
    [3,2,2]
]

console.log(matrix);

console.log(matrix[1][2]);



let arr1 = [5,2,"str1", true];
console.log(arr1[arr1.length-1])


// Очередь и Стек
// Для очереди методы:  arr.shift() - Метод shift () удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива. Синтаксис. Описание. Метод shift удаляет элемент по нулевому индексу, сдвигает значения по последовательным индексам вниз, а затем возвращает удалённое значение. Если свойство length массива равно 0, вернётся значение undefined.
/*
Метод push в JavaScript используется для добавления одного или нескольких элементов в конец массива. Он изменяет исходный массив, добавляя новые элементы, и возвращает новую длину массива. Пример использования push: let fruits = ["apple", "banana"]; let newLength = fruits.push("orange").
*/


//Методы СТЕКА: Метод pop() в JavaScript позволяет удалить последний элемент из массива и возвратить его значение. Этот метод изменяет длину массива.
/*
Метод push в JavaScript используется для добавления одного или нескольких элементов в конец массива. Он изменяет исходный массив, добавляя новые элементы, и возвращает новую длину массива. Пример использования push: let fruits = ["apple", "banana"]; let newLength = fruits.push("orange").
*/

//Метод unshift() в JavaScript добавляет один или более элементов в начало массива и возвращает новую длину массива.



let arr3 = [1,2,3];
console.log(arr3)
console.log(arr3.concat(arr1)) // слияние массивов
console.log(arr3.indexOf(3)) // получение индекса элемента массива
console.log(arr3.join(' ')) // превращение массива в строку
console.log(arr3.splice(1));



