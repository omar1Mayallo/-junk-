/**
 * _____________THE GIVEN PROBLEM 🤔_____________
 * !__1) Even Or Odd
 * @desc |  Write a function to check if a given number is even or odd.
 */

//_____________LET'S SOLVE IT 🔧🔑_____________//
/*
- Even and Odd numbers => https://byjus.com/maths/even-and-odd-numbers/ 
- i need to know is Zero is even number? => https://en.wikipedia.org/wiki/Parity_of_zero 
*/

//_FUNC(Check if a given number  is even or odd)
function numberIsEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("EVEN_NUMBER");
  } else {
    console.log("ODD_NUMBER");
  }
}
numberIsEvenOrOdd(9); // ODD_NUMBER
numberIsEvenOrOdd(10); // EVEN_NUMBER
