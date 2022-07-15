//Write a function that takes in an array of numbers and outputs the maximum number.

Ex:
Input: [ 1, 2, 3 ]
Output: 3

Input: [ 3, 6, 4, 5, 2, 1 ]
Output: 6

Input: [ 3, 3, 3 ]
Output: 3

function findMax(inAry) {
    //find the max num in an array
    let currentMax = inAry[0];
    //loop through all the items in the array (for loop)
    for (let index = 0; index < inAry.length; index++) {
        const currentNumber = inAry[index];
        if (currentNumber > currentMax) {
            currentMax = currentNumber;
        }
    }
    //get current numebr from array using for index value
    //compare the current number (in the loop) to the current max (put in a variable..)
    return currentMax;
}
const theMax = findMax ([1, 2, 3]);
console.log (`Max: ${theMax}`);