// =========================================
// For Loop
// =========================================

// Loops are used to repeat a block of code.


// The for loop is used when the number of iterations is known before the loop starts.

// Syntax:
// for (initialization; condition; increment/decrement) {
//   // code to execute
// }


// Example:
// Print numbers from 1 to 100

for (let i = 1; i <= 100; i++) {
  console.log(i);
}




// ******************************************************************************************************




// =========================================
// While Loop
// =========================================


// The while loop is used when the number of iterations is not known in advance. It continues to execute as long as the condition is true.

// Syntax:
// initialization;
// while (condition) {
//   // code to execute
//   increment/decrement;
// }


// Example:
// Print numbers from 1 to 32

// let i = 1;

// while (i <= 32) {
//   console.log(i);
//   i++;
// }




// ******************************************************************************************************




// =========================================
// Do...While Loop
// =========================================


// The do...while loop executes the code at least once, even if the condition is false.

// Syntax:
// initialization;
// do {
//   // code to execute
//   increment/decrement;
// } while (condition);


// Example:
// Print numbers from 1 to 20

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 20);




// ******************************************************************************************************




// =========================================
// Break Statement
// =========================================


// The break statement is used to immediately terminate a loop when a specified condition is met.


// Example:
// Print numbers from 1 to 200, but stop the loop when the number reaches 32.

// for (let i = 1; i <= 200; i++) {
//   console.log(i);

//   if (i === 32) {
//     break;
//   }
// }




// ******************************************************************************************************




// =========================================
// Continue Statement
// =========================================


// The continue statement is used to skip the current iteration and move to the next iteration of the loop.


// Example:
// Print numbers from 1 to 200, but skip the number 32.

// for (let i = 1; i <= 200; i++) {
//   if (i === 32) {
//     continue;
//   }

//   console.log(i);
// }