// ========================= 1 video ========================

// console.log("Hello world!");

// ========================= 2 video ========================

// "use strict";

// console.log("Я учу JS");

// ========================= 3 video ========================

// let colorDataBaseEye = [];

// let user = "Вася";

// let userName = "Вася";

// console.log(user);

// ========================= 4 video ========================

// ------

// ========================= 5 video ========================

// let a = "35" + -"22";

// console.log(a); //35-22
// console.log(typeof a);

// console.log('35' * "22") //770

// console.log('558' > 22++) //error

// let usersCounter = 0
// let newUsers = usersCounter++
// console.log(newUsers) //true

// console.log(!false && 11 || 18 && !'') // 11 || 0 // 11

// let name = 0
// console.log(name ?? "Без имени") // 0

// ========================= 7 video ========================

// let num = 1;
// while (num < 6) {
//   console.log(num);
//   num++;
// } // 1, 2, 3, 4, 5

// let num = 8;
// while (num) {
//   console.log(num);
//   num--;
// } // 8, 7, 6, 5, 4, 3, 2, 1

// let num = 0;

// while (num < 3) {
//   console.log(`Число ${num}`);
//   num++;
// }

// firstFor: for (let num = 0; num < 2; num++) {
//   for (let size = 0; size < 3; size++) {
//     if (size == 1) {
//       break firstFor;
//     }
//     console.log(size);
//   }
// }

// ========================= 8 video ========================

// function showName() {
//   console.log("Вася!");
// }

// setTimeout(showName, 0);
// console.log("Коля!");

// showMessage();
// function showMessage() {
//   console.log("Сообщение");
// }

// showMessage();
// let showMessage = function () {
//   console.log("Сообщение");
// };

// "use strict";
// let showMessage;

// if (2 > 1) {
//   showMessage = function showMessage() {
//     console.log("Сообщение");
//   };
// }
// showMessage();

// ========================= 9 video ========================

// const userInfo = {
//   name: "Вася",
//   age: 30,
// };

// let userInfo = {
//     name: "Вася",
//     age: 30,
//     "58": 'Значение свойства'
// }

// console.log(userInfo[58]) // Значение свойства

// let userInfo = {
//     name: 'Вася',
//     age: 30
// }

// let user = userInfo;
// user.age = 45;

// console.log(userInfo.age) // 45

// let userInfo = {
//   name: "Vasya",
//   age: 30,
//   showInfo() {
//     console.log(`${this.name}`);
//   },
// };

// let user = userInfo;
// userInfo = null;
// user.showInfo(); // Vasya

// let userInfo = {
//   name: "Вася",
//   age: 30,
// };

// for (const key in userInfo) {
//   const value = userInfo[key];
//   console.log(value); // Вася, 30
// }

// let userInfo = {
//   name: "Vasya",
//   age: 30,
//   address: {
//     city: "Uzhhorod",
//   },
// };

// for (const key in userInfo.address) {
//   console.log(userInfo.address[key]); //Uzhhorod
// }

// const userInfo = {
//   name: "Vasya",
//   age: 30,
//   "likes js": true,
// };

// console.log(userInfo["likes js"])

// const userInfo = {};

// userInfo.name = "Vasya";
// userInfo.age = 30;

// console.log(userInfo);

// userInfo.name = "Lena"

// console.log(userInfo)

// delete userInfo.name

// console.log(userInfo)

// ========================= 10 video ========================

// let sourceNum = 1.005 + Number.EPSILON;
// let numFour = Math.round(sourceNum * 100) / 100;
// console.log(numFour);

// let value = parseFloat("135.58px");

// // parseInt(value);

// console.log(value);

// let value = 58 + "Freelancer";
// if (value !==NaN) {
//     console.log("Result of virajeniya NaN")
// }

// console.log(Math.max(10, 58, 39, -150, 0));

// console.log(Math.floor(58.858));
