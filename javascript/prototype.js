// if (!Array.prototype.myForEach) {
//   Array.prototype.myForEach = function (useFn) {
//     const originalArr = this;

//     for (let i = 0; i < originalArr.length; i++) {
//       useFn(originalArr[i], i);
//     }
//   };
// }

// if (!Array.prototype.myMap) {
//   Array.prototype.myMap = function (userFn) {
//     const result = [];

//     for (let i = 0; i < this.length; i++) {
//       const element = userFn(this[i], i);
//       result.push(element);
//     }
//   };
// }

const arr = [1, 2, 3, 4, 5, 6];

// Error .forEach function does not exist on arr variable

// forEach --- No return, function input, value, index. call my fun for every value

// const ret = arr.myforEach(function (value, index) {
//   console.log(`Value at Index ${index} is ${value}`);
// });

// console.log(`Ret is`, ret);

// FILTER ---->>

// signature:- return - new Array, input: userFn (if user fun return true )
