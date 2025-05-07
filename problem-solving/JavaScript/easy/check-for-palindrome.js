/**
 * _____________THE GIVEN PROBLEM 🤔_____________
 * !__1) Check for Palindrome
 * @desc |  Write a function that checks if a given string or number is a palindrome.
 * ??? | A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 */

//_____________LET'S SOLVE IT 🔧🔑_____________//
/* 
- Here to know more about Palindrome  => https://en.wikipedia.org/wiki/Palindrome and https://en.wikipedia.org/wiki/Palindromic_number

- 1) we check in strings or numbers
  a) Ex of Palindrome strings : civic, radar, level, rotor, kayak, madam, refer, rotator, deified, racecar, redivider and reviver.
  b) Ex of Palindrome numbers : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 202.
*/

//_FUNC(Reverse String)
function reverseString(str = "") {
  //_Method (1)
  return str.split("").reverse().join("");
  //_Method (2)
  // const arrStr = str.split("");
  // let reversedCharsArr = [];
  // for (let i = 0; i < arrStr.length; i++) {
  //   reversedCharsArr.push(arrStr[arrStr.length - 1 - i]);
  // }
  // return reversedCharsArr.join("");
  //_Method (3)
  // return str.split("").reduce((acc, char) => char + acc, "");
}

//_FUNC(Convert Numbers to Strings)
function convertNumToString(num) {
  // return "" + num;
  // return `${num}`;
  // return String(num);
  return num.toString();
}

//_FUNC(Check For Palindrome)
function checkForPalindrome(val) {
  let thePalindrome;

  if (typeof val === "number") {
    // 1) convert number to string
    const numToString = convertNumToString(val);

    // 2) need to reverse string .. string don't have a method to reverse it but array has , so we use split, reverse then join (array methods) to reverse it.
    thePalindrome = Number(reverseString(numToString));

    return val === thePalindrome;
  }

  thePalindrome = reverseString(val);

  return val === thePalindrome;
}

console.log("_________TEST_REVERSE_STRING_________");
console.log(reverseString("Hello World")); // dlroW olleH
console.log("_________TEST_CONVERT_NUMBER_TO_STRING_________");
console.log(convertNumToString(0)); // "1500"
console.log("_________TEST_CHECK_FOR_PALINDROME_________");
console.log(checkForPalindrome(111)); // true
console.log(checkForPalindrome(123)); // false
console.log(checkForPalindrome("level")); // true
console.log(checkForPalindrome("hard")); // false
