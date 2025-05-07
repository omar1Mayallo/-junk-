/**
 * _____________THE GIVEN PROBLEM 🤔_____________
 * !__1) Maximum Number In An Array
 * @desc |  Write a function to find the maximum number in an array.
 */

//_____________LET'S SOLVE IT 🔧🔑_____________//
/* 
- Example : [11, 20, 35, 9, 100, -52, 20.5, -600, 700, 3.5, 14]
- The expected result is 700, it's a maximum number in the array

MDN Array reference ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

//_ARRAY
const arr = [-52, 20.5, -600, 1000, 3.5, 880, 2500, 500, 200];

//_FUNC[1]_Sort_then_get_first_value
function MaxNumInArray1(arr) {
  const sortedArr = arr.sort((prev, next) => next - prev);
  console.log(sortedArr[0]);
}
MaxNumInArray1(arr); // 2500

/*_FUNC[2]_Loop
  1) we assume maxNum is first value in array (arr[0])
  2) we loop through arr if the (currentVal > maxNum) we change maxNum = currentVal
*/
function MaxNumInArray2(arr) {
  let maxNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    if (currNum > maxNum) {
      maxNum = currNum;
    }
  }
  console.log(maxNum);
}
MaxNumInArray2(arr); // 2500

//_FUNC[3]_Math.max(num1, num2, num3, ...)
function MaxNumInArray3(arr) {
  const maxNum = Math.max(...arr);
  console.log(maxNum);
}
MaxNumInArray3(arr); // 2500
