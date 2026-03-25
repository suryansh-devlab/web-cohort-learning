console.log("Hello!");

function Tea() {
  console.log("Ice Tea");
}

function bringtea(noOfTea) {
  console.log(`Hanji, le aaya apki ${noOfTea} Ice Tea`);
}

function addtwo(a, b) {
  return a + b;
}

Tea();
bringtea(4);
console.log(addtwo(4, 6));

function totalCupcakes(trayOne, trayTwo) {
  return trayOne + trayTwo;
}

console.log("Total number of Cupcakes: " + totalCupcakes(70, 30));
