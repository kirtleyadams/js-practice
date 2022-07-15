//Write a function that takes in a string and outputs the number of vowels (not counting y).

// Ex:
// Input: "hello"
// Output: 2

// Input: "you are great!"
// Output: 6

// Input: "why?"
// Output: 0

//variables
var input = "hello"
//function(s)
    //parameter is a string
    //first input is hello...
    //for loop
    //set vowelCount = 0
    //comparison operator (if)... if (each character in the  input ) is a vowel to add count
    
//logic//call function

function countVowels (inStr) {
    let vowelCount = 0;
    for (let index = 0; index < inStr.length; index++) {
        const element = inStr.toLowerCase()[index];
        if (
            element === "a" ||
            element === "e" ||
            element === "i" ||
            element === "o" ||
            element === "u"
        ) {
            vowelCount ++;
        }
        console.log(element);
    } 
    return vowelCount;
}
countVowels(input);