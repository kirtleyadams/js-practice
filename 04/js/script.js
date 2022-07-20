// Write a function that takes in a string and outputs the first occurrence of a character that does not repeat itself in that string.


// Ex:
// Input: "the quick brown fox jumps over the calm kitten quietly"
// Output: "b"


// Input: "this hat is the greatest!"
// Output: "g"


// Input: "what a wonderful day it has been!"
// Output: "o"


// searchString = parameter name
function findFirst(searchString) {
    // turn it into an array using split
    const searchArray = searchString.split("");
    // another variable with 'found' duplicates in it
    const duplicates = [];
  
  
    // loop through the array
    for (let index = 0; index < searchArray.length; index++) {
      const element = searchArray[index];
      if (!duplicates.includes(element)) {
        // not in duplicates
        for (let idx = index + 1; idx < searchArray.length; idx++) {
          const secondEl = searchArray[idx];
          console.log(`1st: ${element}, 2nd: ${secondEl}`);
          if (element === secondEl) {
            duplicates.push(element);
          } else if (idx == searchArray.length - 1) {
              return element;
            }
          
      }
    }
  
  
    return false;
  }
  
  
  const input1 = "the quick brown fox jumps over the calm kitten quietly";
  
  
  console.log(findFirst(input1));