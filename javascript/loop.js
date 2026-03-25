let teas = ["masala", "ginger", "rose", "oolong", "orange", "lemon"];

// loop - iteration, variable leke aao, limit, increment/ decrement.

// for (let h = 0; h < teas.length; h++) {
//   console.log(`Tea at index ${h}: ${teas[h]}`);
// }

let myArray = [1, 4, 5, 7, 8];

function sumfac(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
console.log(sumfac(myArray));
