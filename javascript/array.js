let fruits = ["apple", "cherry", "banana"];
let intfruits = new Array("kiwi", "avacado", "dragon fruit");

fruits[0] = "papaya";
console.log(fruits[0]);
// push is used to add element into the array at the last
fruits.push("grapes");
console.log(fruits);

// pop is used to remove the last element from the array
fruits.pop();
console.log(fruits);

// unshift is used to add element into the array at the begin
fruits.unshift("mango");
console.log(fruits);

// console.log(intfruits);
