// const obj1 = {
//   fname: "Suryansh",
//   lname: "Kushwaha",
//   getFullname: function () {
//     return `${this.fname} ${this.lname}`;
//   },
// };
// const obj2 = {
//   fname: "Nikhil",
//   lname: "Kus",
//   getFullname: function () {
//     return `${this.fname} ${this.lname}`;
//   },
// };

// DRY - Do not repeat yourself.
// console.log(obj1.getFullname());
// console.log(obj2.getFullname());

class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getFullname() {
    return `${this.fname} ${this.lname}`;
  }
}

const obj3 = new Person("Suryansh", "Kus");
const obj4 = new Person("Akash", "Gupta");
console.log(obj3.getFullname());
console.log(obj4);
