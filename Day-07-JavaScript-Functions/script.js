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




// ******************************************************************************************************




// =========================================
// Rest Parameters
// =========================================

// Rest parameters allow a function to accept multiple arguments as a single array.

// The (...) syntax is called the rest operator when used in function parameters.


// Example
function printValues(...values) {
  console.log(values);
}

printValues(1, 2, 3, 4, 5, 6);




// ******************************************************************************************************




// =========================================
// Return Values
// =========================================

// The return statement sends a value back to the place where the function was called.


// Example
function add(value) {
  return 12 + value;
}

let result = add(23);

console.log(result); // 35




// ******************************************************************************************************




// =========================================
// First-Class Functions
// =========================================

// In JavaScript, functions are first-class citizens. They can be passed as arguments, returned from functions, and assigned to variables.


// Example -
function execute(callback) {
  callback();
}

execute(function () {
  console.log("Hello");
});




// ******************************************************************************************************




// =========================================
// Higher-Order Functions
// =========================================

// A Higher-Order Function (HOF) is a function that:
// 1. Accepts another function as an argument, or
// 2. Returns another function.



// Example 1: Returning a Function

function createGreeting() {
  return function () {
    console.log("Hey");
  };
}

createGreeting()();



// Example 2: Accepting a Function

function execute(callback) {
  callback();
}

execute(function () {
  console.log("Hello");
});




// ******************************************************************************************************




// =========================================
// Pure vs Impure Functions
// =========================================

// A pure function always produces the same output for the same input and does not modify external state.


// Example-
function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // 15




// Example: Impure Function

// An impure function modifies external state or depends on values outside the function.


// Example-
let count = 12;

function increment() {
  count++;
}

increment();

console.log(count); // 13




// ******************************************************************************************************




// =========================================
// Closures
// =========================================

// A closure is created when an inner function remembers and accesses variables from its outer function even after the outer function has finished executing.


// Example-
function outer() {
  let value = 12;

  return function () {
    console.log(value);
  };
}

const inner = outer();

inner(); // 12




// ******************************************************************************************************




// =========================================
// Lexical Scoping
// =========================================

// Lexical scoping means an inner function can access variables from its parent (outer) scope. However, a parent function cannot access variables declared inside its child function.


// Example-
function outer() {
  let a = 12;

  function middle() {
    let b = 13;

    function inner() {
      let c = 14;

      console.log(a); // Accessible
      console.log(b); // Accessible
      console.log(c); // Accessible
    }

    inner();
  }

  middle();

  // console.log(b); // ❌ Not Accessible
  // console.log(c); // ❌ Not Accessible
}

outer();