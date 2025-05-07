/**
 * _____________THE GIVEN PROBLEM 🤔_____________
 * !__1) 2 Numbers Sum Equals 25
 * @desc | Given an array of integers, write a function that finds and returns the pair of numbers whose sum equals 25. If such a pair exists, return the pair of numbers as an array. If no such pair is found, return an empty array.
 * TODO | Notes
  Consider edge cases, such as when the array has fewer than two elements or when multiple pairs sum to 25. In the case of multiple pairs, return only the first pair encountered.
 */

//_____________LET'S SOLVE IT 🔧🔑_____________//
/* What i need to reach ? 
for example if these 4 arrays 
arr1=[1] ___________________________>> have 1 elements
arr2=[3, 8, 12, 13] ________________>> have 1 pairs sum to 25
arr3=[18, 45, -20, 20, 30, -5, 5]____>> have 3 pairs sum to 25
arr4=[100, 250, 35, 68]____>> don't have any pairs sum to 25

We need logic as following
- for arr1)
return ErrMsg "Invalid array input should have length >= 2 elements" 

- for arr2)
return pairs sum to 25 >> pairs is 12, 13

- for arr3)
return the first pair sum to 25 >> pairs is 45, -20

- for arr4)
return msg "The input array don't have any pairs sum to 25"
*/

const arr1 = [1];
const arr2 = [3, 8, 12, 13];
const arr3 = [18, 45, -20, 20, 30, -5, 5];
const arr4 = [100, 250, 35, 68];

function findPairsSum(arr) {
  // 1) Check arr.length > 1 element
  if (arr.length < 2)
    return "Invalid array .. should have length >= 2 elements";

  // 2) Loop through arr to Find pairs sum to 25
  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];
    for (let x = 0; x < arr.length; x++) {
      const nestedLoopElement = arr[x];
      // 3) if find return it
      if (currentEl + nestedLoopElement === 25) {
        const pairsObj = new Object();
        pairsObj.pairs = {num1: currentEl, num2: nestedLoopElement};
        return pairsObj;
      }
    }
  }
  // 4) if not find return notfound message
  return "The input array don't have any pairs sum to 25";
}

console.log(findPairsSum(arr1)); // Invalid array .. should have length >= 2 elements
console.log(findPairsSum(arr2)); // { pairs: { num1: 12, num2: 13 } }
console.log(findPairsSum(arr3)); // { pairs: { num1: 45, num2: -20 } }
console.log(findPairsSum(arr4)); // The input array don't have any pairs sum to 25
