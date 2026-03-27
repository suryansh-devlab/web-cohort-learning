// Problem: Create an object reperesenting a type of tea with properties for name, type, and caffeine content.

const teas = {
  name: "Lemon tea",
  type: "Green Tea",
  caffeine: "low",
};

// Problem: Access and print the name and type of the tea object.

console.log(teas.name);
console.log(teas["type"]);
console.log(teas.type);

// Problem: Add a new property origin to the tea object.

teas.origin = "China";

// Problem: Change the caffeine level of the tea object to "Medium"

teas.caffeine = "Medium";
console.log(teas.caffeine);

// Problem: Remove the type property from the tea object.

delete teas.type;

// Problem: Check if the tea object has a property origin
let pro = teas.hasOwnProperty("origin"); // it return true or fasle-- if exist true otherwise false!
console.log(pro);
// OR
console.log("origin" in teas);

// Problem: Use a for...in loop to print all properties of the tea object.

for (let key in teas) {
  console.log(key + ": " + teas[key]);
}

// Problem: Create a nested object representing different types of teas and their properties.
const myTeas = {
  greenTea: { name: "Green Tea", caffeine: "low" },
  blackTea: { name: "black Tea", caffeine: "high" },
};

// Problem: Create a copy of the tea object
const teaCopy = { ...teas }; //Shallow Copy... -- copies first level does not copy nested stuff just reference....

// Problem: Add a custom method describe to the tea object that return a description string.

teas.describe = function () {
  return `This tea is ${this.name}with ${this.caffeine} caffeine content.`;
};

console.log(teas.describe());

// Problem: Merge two objects representing different teas into one.

let merged = { ...teas, ...myTeas };
console.log(merged);
