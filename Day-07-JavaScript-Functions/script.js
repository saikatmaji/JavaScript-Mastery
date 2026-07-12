// =========================================
// Function Use Case
// =========================================

// Functions allow us to group reusable code. The code inside a function does not execute until the function is called.


// Function Declaration
function dance() {
  console.log("dance");
  console.log("dance");
  console.log("dance");
  console.log("dance");
  console.log("dance");
  console.log("dance");
}


// Function Call
dance();




// ******************************************************************************************************




// =========================================
// Function Creation Techniques
// =========================================

// JavaScript provides multiple ways to create functions.


// 1. Function Declaration

// Syntax:
// function functionName() {
//   // code
// }


// Example:
function hny() {
  console.log("Happy New Year");
}

hny(); // Happy New Year



// 2. Function Expression

// Syntax:
// const functionName = function () {
//   // code
// };


// Example:
const holi = function () {
  console.log("Happy Holi");
};

holi(); // Happy Holi



// 3. Arrow Function

// Syntax:
// const functionName = () => {
//   // code
// };


// Example:
const durgaPuja = () => {
  console.log("Happy Durga Puja");
};

durgaPuja(); // Happy Durga Puja




// ******************************************************************************************************




// =========================================
// Parameters and Arguments
// =========================================

// Parameters are the variables defined in a function.
// Arguments are the actual values passed when calling a function.



// Example 1
function dance(animal) {
  console.log(`${animal} is dancing`);
}

dance("Lion");
dance("Tiger");
dance("Horse");
dance("Dog");



// Example 2
function add(num1, num2) {
  console.log(num1 + num2);
}

add(1, 2);
add(11, 22);
add(111, 222);