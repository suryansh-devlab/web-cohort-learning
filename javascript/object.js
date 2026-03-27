// const person = {
//   name: "Suryansh",
//   lastName: "kushwaha",
//   age: 24,
//   phoneNumber: 7007290254,
//   hobbies: ["coding", "cricket", "music"],
//   isMarried: false,
//   hasGf: true,
//   getFullName: function () {
//     return "Atul";
//   },
//   address: {
//     homeNo: 44,
//     countryCode: "IN",
//     state: "UP",
//     city: "Jalaun",
//   },
// };

// console.log(person.name);
// console.log(person.hobbies);
// console.log(person.getFullName());
// console.log(person.address.city);

let p1 = {
  fname: "Ram",
  lname: "garg",
  address: {
    homeNo: 44,
    countryCode: "IN",
    state: "UP",
    city: "Jalaun",
  },
};

// let p2 = {
//   fname: p1.fname,
//   lname: p1.lname,
//   address: p1.address, // Not copy data just reference--- not going deep
// };

// let p3 = {
//   ...p1, // Spread Operator - Copy the data but deep down inside the object/function just reference
// };

// p2.fname = "Surya";
// p3.fname = "Shyam";

// p3.address.homeNo = "Hacked"; // it changed to all
// console.log(p1);
// console.log(p2);
// console.log(p3);

// Shallow Copy (...) spread operator just copy the first level data only, make shallow copy!

// DEEP COPY
// 1. object to string to object again !

const p4 = JSON.stringify(p1);
console.log(p4);
let p5 = JSON.parse(p4);
p5.address.homeNo = 45;
console.log(p5);
