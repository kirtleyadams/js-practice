const input = "4";


// functions
function isInteger(num1) {
  // conditional - checking typeof == "number"


  // return typeof num1 == "number" && num1 % 1 == 0;
  // return Number.isInteger(num1);
  return typeof num1 == "number" && Math.floor(num1) == num1;
}


// start logic if required.
console.log(isInteger(input));