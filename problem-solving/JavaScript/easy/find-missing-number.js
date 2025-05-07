/**
 * _____________THE GIVEN PROBLEM 🤔_____________
 * !__1) Find The Missing Number
 * @desc |  Write a function to find the missing number in an array of consecutive integers.
 * ??? | example : [1, 2, 3, 4, 5, 7, 8] the expected (result) missing number is 6
 */

//_____________LET'S SOLVE IT 🔧🔑_____________//

const arr1 = [1, 2, 3, 4, 5, 7, 8];
const arr2 = [100, 101, 102, 104];
const arr3 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

//_FUNC(LOOP_Find The Missing Number)
function findMissingNum(arr) {
  const lastElInArr = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    const currItem = arr[i];
    const nextItem = arr[i + 1];

    // 1) If the nextItem  not equal to currentItem + 1 return the missing number (currentItem + 1)
    if (nextItem !== currItem + 1) return currItem + 1;

    // 2) If we arrive to the end of the arr and no number is missing
    if (nextItem === lastElInArr) {
      return `All Numbers between ${arr[0]} and ${lastElInArr} are exist in sequence`;
    }
  }
}

console.log(findMissingNum(arr1)); // 6
console.log(findMissingNum(arr2)); // 103
console.log(findMissingNum(arr3)); // All Numbers between 20 and 30 are exist in sequence
