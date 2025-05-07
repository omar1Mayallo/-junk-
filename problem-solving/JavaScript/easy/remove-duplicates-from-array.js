/**
 * _____________THE GIVEN PROBLEM 🤔_____________
 * !__1) Remove Duplicates From Array
 * @desc |  Write a function to remove duplicates from an array.
 */

//_____________LET'S SOLVE IT 🔧🔑_____________//
/* 
Ex-1) [1, 22, 5, 32, 35, 35, 5, 32, 22, 1] to [1, 22, 5, 32, 35]
Ex-2) ["USD", "EGP", "EUR", "EGP", "EUR"] to ["USD", "EGP", "EUR"]
Ex-3) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] to [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

const arr1 = [1, 22, 5, 32, 35, 35, 5, 32, 22, 1];
const arr2 = ["USD", "EGP", "EUR", "EGP", "EUR"];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//FUNC(1)
function removeDuplicates1(arr) {
  const newArr = new Set(arr);
  return [...newArr];
}
// console.log(removeDuplicates1(arr1));
// console.log(removeDuplicates1(arr2));
// console.log(removeDuplicates1(arr3));

//----------------------------------------------------//

//FUNC(2)
function removeDuplicates2(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const itemExists1 = newArray.includes(element);
    const itemExists2 = newArray.findIndex((el) => el === element) !== -1;
    if (
      !itemExists1
      // or !itemExists2
    ) {
      newArray.push(element);
    }
  }
  return newArray;
}
console.log(removeDuplicates2(arr1));
console.log(removeDuplicates2(arr2));
console.log(removeDuplicates2(arr3));
