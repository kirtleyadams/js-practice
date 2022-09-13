// Write a function that takes in a number and reverses the order of the digits.

// Ex:
// Input: 1234
// Output:4321

// Input: 1201
// Output:1021

// Input: 4
// Output: 4

const input = [1234, 1201, 4];

const reverseIt = (num) =>
  parseInt(num.toString().split("").reverse().join(""));

input.forEach((element) => {
  console.log(`${element} reversed is ${reverseIt(element)}`);
});






