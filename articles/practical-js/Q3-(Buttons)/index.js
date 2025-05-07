//___________QUESTION___________//
// What will alerted to the screen when button5 clicked and why that certain piece of data alerted?
// function createButtons() {
//   for (var i = 1; i <= 5; i++) {
//     var body = document.getElementsByTagName("BODY")[0];
//     var button = document.createElement("BUTTON");
//     button.innerHTML = 'Button ' + i;
//     button.onclick = function() {
//          alert('This is button ' + i);
//     }
//     body.appendChild(button);
//   }
// }
// createButtons();

//___________BEFORE_SOLVE_REFRESH___________//
//_...
/*
  ...
*/

//_Resources
/*
...
*/

//___________MY_SOLVE___________//
// ...

////--------------------------------------------------////
////----------MARKED-[MY_SOLVE]-[Success ❌]----------////
////-------------------------------------------------////

//___________INSTRUCTOR_SOLVE___________//
// Solution 1) Solve By Using IIFE
/* @desc
- when onclick triggered by clicking on button for loop has been finished, so i = 5 and when clicked i++ so i will be 6 in all button clicked events

- each iteration of loop the current value of i is passed to IIFE and the value of i stored as num parameter inside IIFE scope

- and each iteration of loop, there is different instance of IIFE, so they never interfere with each other
*/
// Solution 1:
// function createButtons() {
//   for (var i = 1; i <= 5; i++) {
//     var body = document.getElementsByTagName("BODY")[0];
//     var button = document.createElement("BUTTON");
//     button.innerHTML = 'Button ' + i;
//     (function(num) {
//       button.onclick = function() {
//          alert('This is button ' + num);
//       }
//     })(i);
//     body.appendChild(button);
//   }
// }
// createButtons();

// Solution 2) Solve add another function
// Solution 2:
// function createButtons() {
//   for (var i = 1; i <= 5; i++) {
//     var body = document.getElementsByTagName("BODY")[0];
//     var button = document.createElement("BUTTON");
//     button.innerHTML = "Button " + i;
//     addClickFunctionality(button, i);
//     body.appendChild(button);
//   }
// }
// function addClickFunctionality(button, num) {
//   button.onclick = function () {
//     alert("This is button " + num);
//   };
// }
// createButtons();

// Solution 3) By Using let
// @desc let keyword solve this problem because it is block scope instead of function scope like var keyword
// Solution 3:
// function createButtons() {
//   for (let i = 1; i <= 5; i++) {
//     var body = document.getElementsByTagName("BODY")[0];
//     var button = document.createElement("BUTTON");
//     button.innerHTML = "Button " + i;
//     button.onclick = function () {
//       alert("This is button " + i);
//     };
//     body.appendChild(button);
//   }
// }
// createButtons();

//___________AFTER_INSTRUCTOR_SOLVE_LEARN___________//
// ...
