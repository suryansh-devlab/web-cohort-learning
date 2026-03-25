// server call, rainy, cloudy, sunny

let weather = "sunny";

if (weather === "rainy") {
  console.log("it's raining, umbrella le jana bhai");
} else if (weather === "sunny") {
  console.log("Mossam saaf hain Bhai");
} else {
  console.log("Jacket phen ke jana bhai");
}

// Pizza Size -> based on number of guest
// small <= 2, medium <=5, large

let numberofGuest = 4;
let pizzaSize;

if (numberofGuest <= 2) {
  pizzaSize = "small";
} else if (numberofGuest <= 5) {
  pizzaSize = "medium";
} else {
  pizzaSize = "large";
}
console.log(`Order  ${pizzaSize} pizza😋`);

// GRADE CALC
// 90 - A , 80 >= B, 70 >= C, 60 >= D, 60 < F

function calculateGrade(num) {
  if (num >= 90) {
    return "A";
  } else if (num >= 80) {
    return "B";
  } else if (num >= 70) {
    return "C";
  } else if (num >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log(`Your grade is ${calculateGrade(90)}`);
