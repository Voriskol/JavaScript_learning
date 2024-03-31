// function printText(name, age) {
//   return `Hello My name is ${name}, Age ${age}`;
// }
// let name1 = "Pidr";
// let age1 = 228;

// let result = printText(name1, age1);

// alert(result);

// let obj = {
//   name: "Ivan",
//   age: 18,
//   hello() {
//     console.log(this.name);
//   }
// }

// let arr = [1,5,2,25,16,14,49,3,1,7]
// arr.sort((a, b) => a - b)
// console.log(arr);

// Task 1 Fibonachi
// function fibonachi(count) {
//   let fib = [];
//   for (let i = 0; i < count; i++) {
//     if (i == 0) {
//       fib[i] = 1;
//     } else if (i == 1) {
//       fib[i] = 2;
//     } else {
//       fib[i] = fib[i - 2] + fib[i - 1];
//     }
//   }
//   return fib;
// }

// let f = fibonachi(10);
// console.log(f);

// Task 2 factorial
// function factorial(number) {
//   let arr = [];
//   let count = 1;
//   for (let i = 1; i <= number; i++) {
//     arr.push(i);
//   }
//   for (let item of arr) {
//     count *= item;
//   }
//   return count;
// }
// console.log(factorial(5));

// Alternative

// function factorial(number) {
//   let count = 1;
//   if (number == 1) {
//     return count;
//   } else {
//     for (let i = 1; i <= number; i++) {
//       count *= i;
//     }
//     return count;
//   }
// }

// console.log(factorial(5));

// Task 3 summ and proizvedenie
// let addAndMul = function (num) {
//   num += "";
//   let add = 0;
//   let mul = 1;
//   for (let i = 0; i < num.length; i++) {
//     add += +num[i];
//     mul *= +num[i];
//   }
//   return {
//     "Summ": add,
//     "Multiplicate": mul
//   };
// };

// console.log(addAndMul(795));

// Task 4
// let reverseFunc = function (num) {
//   num += "";
//   let reverseNumber = "";
//   for(let i = num.length-1; i >= 0; i--) {
//     reverseNumber += num[i];
//   }
//   return +reverseNumber;
// };

// console.log(reverseFunc(1234));

// Task 5 количество четных и нечетных чисел в числе
// let Func = function (num) {
//   num += "";
//   let even = 0,
//     odd = 0;
//   for (let i = 0; i < num.length; i++) {
//     +num[i] % 2 == 0 ? even++ : odd++;
//   }
//   return {
//     Even: even,
//     Odd: odd,
//   };
// };

// console.log(Func(3486));

// Task 6 minigame
function randomNumber() {
  let number = Math.floor(Math.random() * 100);
  for (let count = 1; count <= 10; count++) {
    let result = +prompt(`Попытка ${count}, Введите число:`);
    if (result == number) {
      return alert(`Вы угадали число! Попыток: ${count}. Число ${number}.`);
    } else if (result < number) {
      alert(`Заданное число больше. Попробуйте еще раз`);
    } else if (result > number) {
      alert(`Заданное число меньше. Попробуйте еще раз`);
    }
    if (count == 10) {
      return alert(
        `Вы так и не смогли отгадать число. Загаданное число: ${number}`
      );
    }
  }
}

console.log(randomNumber());
