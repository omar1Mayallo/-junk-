//___________QUESTION___________//
// What is Closure and Give Example for it?

//___________BEFORE_SOLVE_REFRESH___________//
//_[Closure] a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
/* 
closure can access variables in 3 scopes :
- variables of  own scope
- variables of outer function scope
- variables of global scope
closure can access params in 2 scopes :
- own function params
- outer function params
*/
//_Resources
/*
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures]
[https://blog.hubspot.com/website/javascript-closure]
*/

//___________MY_SOLVE___________//
function funcOut() {
  const x = 10;
  function funcIn(y) {
    console.log(x + y);
  }
  funcIn(10);
}
funcOut();

////--------------------------------------------------////
////----------MARKED-[MY_SOLVE]-[Success ✔]----------////
////-------------------------------------------------////

//___________INSTRUCTOR_SOLVE___________//
const globalVariable = "global var";

function outterFunc(param1) {
  const variable1 = "var one";

  function innerFunc(param2) {
    const variable2 = "var two";

    console.log("globalVariable: ", globalVariable);
    console.log("variable1: ", variable1);
    console.log("variable2: ", variable2);
    console.log("param1: ", param1);
    console.log("param2: ", param2);
  }

  innerFunc("param one");
}

outterFunc("param two");
//___________AFTER_INSTRUCTOR_SOLVE_LEARN___________//
// ...
