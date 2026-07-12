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




// ******************************************************************************************************




// =========================================
// Default Parameters
// =========================================

// Default parameters allow a function to use a default value when no argument is provided during the function call.



// Example 1
function add(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}

add(); // 0



// Example 2
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet("Saikat"); // Hello Saikat
greet();         // Hello Guest



// Real-World Example
function login(user = "Anonymous") {
  console.log(`${user} logged in`);
}

login("Rahul"); // Rahul logged in
login();        // Anonymous logged in