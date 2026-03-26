// Problem: Create an array containing different types of teas.
let teas = new Array(
  "Green Tea",
  "Black Tea",
  "Oolong Tea",
  "White Tea",
  "Herbal Tea",
);
console.log(teas);

// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");
console.log(teas);

// Problem: Remove "oolong Tea" from the existing list of teas
teas.splice(teas.indexOf("Black Tea"), 1);
console.log(teas);

// Problem: Filter the list to only include that are caffeinated.

const caffinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");
console.log(caffinatedTeas);

// Problem. Sort the list of teas in alphabetical order.

teas.sort();
console.log(teas);

// Problem: Use a for loop to print each type of tea in the array

for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}

// Problem: Use a for loop to count how many teas are caffinated (excluding "Rose Tea")

let caffeinatedMyTeas = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal Tea") {
    caffeinatedMyTeas++;
  }
}
console.log(caffeinatedMyTeas);

// Problem: Use a for to create a new array with all teas names in uppercase.

const uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  uppercaseTeas.push(teas[i].toUpperCase);
}
console.log(uppercaseTeas);

// Problem: Use a for loop to find the tea name with the most characters.

let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}
console.log(longestTea);

// Problem: Use a for loop to reverse the order of teas in the array

for (let i = teas.length - 1; i >= 0; i--) {
  console.log(teas[i]);
}
