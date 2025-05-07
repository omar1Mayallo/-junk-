//___________QUESTION___________//
// Write a function like tripleAdd(10)(20)(30); which return total of 3 numbers

//___________BEFORE_SOLVE_REFRESH___________//
//_Topics-[Functions]
/*
 * Function creation (Declaration, Expression)
 * Function hoisting
 * Function scope
 * Recursion
 * Nested Functions and closures
 * Name conflicts
 * Function parameters [Default, Rest parameters]
 * Arrow functions
 */

//_Resources
/*
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#preservation_of_variables]
[https://mayanovarini.medium.com/functions-in-javascript-declaration-expression-arrow-d6f907dc850a]
[https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/]
*/

//___________MY_SOLVE___________//
function funcOne(x) {
  function funcTwo(y) {
    function funcThree(z) {
      return z + y + x;
    }
    return funcThree;
  }
  return funcTwo;
}
const res1 = funcOne(10)(20)(30);
console.log(res1); // 60
//@desc
//funcThree access y closure to funcTwo and funcTwo access x closure to funcOne, so funcThree access y , x params

////--------------------------------------------------////
////----------MARKED-[MY_SOLVE]-[Success ✔]----------////
////-------------------------------------------------////

//___________INSTRUCTOR_SOLVE___________//
function tripleAdd(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}
const res2 = tripleAdd(10)(20)(30);
console.log(res2); // 60

//___________AFTER_INSTRUCTOR_SOLVE_LEARN___________//
//Curried function[https://builtin.com/software-engineering-perspectives/currying-javascript]
