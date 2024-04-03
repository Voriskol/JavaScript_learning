//While
// let count = 0;
// while (count < 10) {
//   console.log(count);
//   if (count==4) {
//     break;
//   }
//   count++;
// }
// let count = 10;
// do {
//   console.log(count);
//   count--;
// } while (count > 7);

// let arr = [5, 7, 9, 1, 0];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }

// let arr = [5, 7, 9, 1, 0];
// for (let item of arr) {
//   console.log(item * 2);
// }

// let obj = {
//   name: "Petr",
//   age: 25,
//   number: 88005553535,
// };

// for(let key in obj) {
//   console.log(`Ключ ${key}, Значение ${obj[key]} `)
// }

// let arr = [5, 7, 9, 1, 0];
// arr.forEach(function (item, i, array) {
//   console.log(`Элемент: ${item}
//   Индекс: ${i}
//   Удвоенный элемент: ${item * 2}`);
// });

// let people = [
//   { id: 1, name: "Ivan" },
//   { id: 2, name: "Masha" },
//   { id: 3, name: "Alex" },
//   { id: 4, name: "Kate" },
// ];

// let a = people.find(function (item) {
//   if (item.id == 3) return item;
// });
// console.log(a);

// let a = people.findIndex(function (item) {
//   if (item.id == 3) return item;
// });
// console.log(a);

// let a = people.filter(function (item) {
//   if (item.id < 3) return item;
// });
// console.log(a);

let arr = [5, 7, 9, 1, 0];
let newArr = arr.map(function (item) {
  return item*3
});
console.log(newArr)
