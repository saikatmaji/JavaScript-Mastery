// =========================================
// If...Else Statement
// =========================================

// The if...else statement is used to execute different blocks of code based on whether a condition is true or false.

// Example
let a = 12;

if (a > 15) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}




// =========================================
// Else If Ladder
// =========================================

// An Else If ladder is used when you have many conditions to check.

// Example
let marks = 83;

if (marks >= 90) {
  console.log("Grade AA");
} else if (marks >= 80) {
  console.log("Grade A+");
} else if (marks >= 70) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}




// =========================================
// Switch Statement
// =========================================

// The switch statement is used to execute different blocks of code based on the value of an expression.

// Example
switch (3) {
  case 1:
    console.log("Hurrah1");
    break;

  case 2:
    console.log("Hurrah2");
    break;

  case 3:
    console.log("Hurrah3");
    break;

  default:
    console.log("Invalid Choice");
}