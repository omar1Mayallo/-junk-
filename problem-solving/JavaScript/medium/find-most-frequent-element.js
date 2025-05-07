/**
 * _____________THE GIVEN PROBLEM 🤔_____________
 * !__1) Slugify Function
 * @desc | Write a function to find the most frequent element in an array.
 * ??? | For example, if [1, 2, 3, 2, 4, 2, 5] expected result : 2
 */

//_____________LET'S SOLVE IT 🔧🔑_____________//

const arr1 = [1, 2, 3, 2, 4, 2, 5, 2];
const arr2 = [12, 22, 45, 45, 4494, 89, 345, 45];

function findMostFrequentElement(arr) {
  // 1) let the reference for the most frequent element and the most frequent element
  let refMostFrequentNum = 0;
  let refMostElementAppear;

  for (let x = 0; x < arr.length; x++) {
    // 2) let number of each element appear in the array
    let numOfEachElementAppear = 0;

    const element = arr[x];

    // 3) make another loop to check for every appear element in the array and if this element appears numOfEachElementAppear++
    for (let y = 0; y < arr.length; y++) {
      const nestedLoopElement = arr[y];

      if (element === nestedLoopElement) {
        numOfEachElementAppear++;
      }
    }

    // console.log(element + ": " + numOfEachElementAppear);

    // 4) for the main for loop ... for every element in the array we change the value of refMostFrequentNum and refMostElementAppear
    // @desc for example in [1, 2, 3, 2, 4, 2, 5, 2] by looping over array we first catch the number "2" and compare it (by nested loop) with each element of the array if we find any number "2" ... numOfEachElementAppear++ ... then we check if numOfEachElementAppear for "2" is greater than refMostFrequentNum that we last time update it for "1" number ... if true then update refMostFrequentNum and refMostElementAppear for number "2" else complete the loop through the next element.

    if (numOfEachElementAppear > refMostFrequentNum) {
      refMostFrequentNum = numOfEachElementAppear;
      refMostElementAppear = element;
    }
  }

  return console.log(
    `The most frequent element is | ${refMostElementAppear} | it's appearing in the array ${refMostFrequentNum} times.`
  );
}

findMostFrequentElement(arr1); // The most frequent element is | 2 | it's appearing in the array 4 times.
findMostFrequentElement(arr2); // The most frequent element is | 45 | it's appearing in the array 3 times.
