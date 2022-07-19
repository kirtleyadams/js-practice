// Write a function that takes in a single word as a string and returns true if it's a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).
// Ex:
// Input: "noon"
// Output: true
// Input: "horse"
// Output: false
// Input: "racecar"
// Output: true
const wordToCheck = "noon";
const isPalindrome = (word) => {
  const wordAry = word.split("");
  let backwards = [];
  for (let index = wordAry.length - 1; index > -1; index--) {
    const element = wordAry[index];
    backwards.push(element);
  }
  return word === backwards.join("");
};
const result = isPalindrome(wordToCheck);
console.log(`Is ${wordToCheck} a palindrome? ${result}`);
const result2 = aDifferentWay(wordToCheck);
console.log(`Is ${wordToCheck} a palindrome? ${result2}`);
function aDifferentWay(word2) { // horse
  const word2Ary = word2.split(""); // ["h", "o", "r", "s", "e"] 0 - 4, length 5
  for (let index = 0; index < Math.ceil(word2Ary.length / 2); index++) {
    // index = 0, element = h, 5/2 = 2.5 = 3
    const element = word2Ary[index];
    const fromEnd = word2Ary[word2Ary.length - 1 - index];
    // fromEnd = word2Ary[4] = "e"
    if (element !== fromEnd) {
      return false;
    }
  }
  return true;
}