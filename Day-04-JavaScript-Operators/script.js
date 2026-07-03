// =========================================
// Arithmetic Operators
// =========================================

// Arithmetic operators are used to perform mathematical calculations.

// Operators:
// +  Addition
// -  Subtraction
// *  Multiplication
// /  Division
// %  Modulus (Remainder)
// ** Exponentiation (Power)


// Addition (+)

// Number Addition
// 1 + 2 = 3

// String Concatenation
// "ha" + "rsh" = "harsh"


// Subtraction (-)

// 12 - 2 = 10


// Multiplication (*)

// 12 * 2 = 24


// Division (/)

// 12 / 2 = 6


// Modulus (%)

// Returns the remainder after division.
// 12 % 5 = 2




// ******************************************************************************************************




// =========================================
// Comparison Operators
// =========================================

// Comparison operators are used to compare two values.
// They always return either true or false.

// Operators:
// ==   Equal to (Loose Equality)
// ===  Strict Equal to
// !=   Not Equal to (Loose Inequality)
// !==  Strict Not Equal to
// >    Greater Than
// <    Less Than
// >=   Greater Than or Equal to
// <=   Less Than or Equal to


// Equal to (==)

// Performs type conversion before comparison.

// 12 == 13      // false
// 12 == "12"    // true


// Strict Equal to (===)

// Compares both value and data type.

// 12 === "12"   // false
// 12 === 12     // true


// Not Equal to (!=)

// Performs type conversion before comparison.

// 12 != 13          // true
// "harsh" != "ankur" // true


// Strict Not Equal to (!==)

// Compares both value and data type.

// 12 !== "12"   // true
// 12 !== 12     // false


// Greater Than (>)

// 12 > 113      // false


// Less Than (<)

// 12 < 113      // true


// Greater Than or Equal To (>=)

// 22 >= 22      // true


// Less Than or Equal To (<=)

// 32 <= 32      // true




// ******************************************************************************************************




// =========================================
// Assignment Operators
// =========================================

// Assignment operators are used to assign and update values.

// Operators:
// =   Assignment
// +=  Add and Assign
// -=  Subtract and Assign
// *=  Multiply and Assign
// /=  Divide and Assign
// %=  Modulus and Assign


let a = 12;

a += 3;  // 15
a -= 11; // 4
a *= 2;  // 8
a /= 2;  // 4
a %= 3;  // 1

console.log(a); // 1




// ******************************************************************************************************




// =========================================
// Logical Operators
// =========================================

// Logical operators are used to combine or invert conditions.

// Operators:
// &&  Logical AND
// ||  Logical OR
// !   Logical NOT


// Logical AND (&&)

// Returns true only if both conditions are true.

// true && true     // true
// true && false    // false
// false && true    // false
// false && false   // false

// 12 > 13 && 13 > 11   // false


// Logical OR (||)

// Returns true if at least one condition is true.

// true || true     // true
// true || false    // true
// false || true    // true
// false || false   // false

// 12 > 13 || 13 > 11   // true


// Logical NOT (!)

// Reverses the boolean value.

// !false       // true
// !12          // false
// !undefined   // true




// ******************************************************************************************************




// =========================================
// Unary Operators
// =========================================

// Unary operators work with a single operand.

// Operators:
// +       Unary Plus
// -       Unary Minus
// !       Logical NOT
// typeof  Type Operator
// ++      Increment
// --      Decrement


// Unary Plus (+)

// Converts a value into a number.

// +"5"       // 5
// +"harsh"   // NaN


// Unary Minus (-)

// Converts a value into a negative number.

// -"5"       // -5


// Logical NOT (!)

// Reverses the boolean value.

// !12        // false


// Typeof Operator

// Returns the data type of a value.

// typeof 12      // "number"


// Pre-Increment (++)

// Increases the value by 1 before using it.

let a = 12;

++a;

console.log(a); // 13


// Pre-Decrement (--)

// Decreases the value by 1 before using it.

let b = 15;

--b;

console.log(b); // 14




// ******************************************************************************************************




// =========================================
// Ternary Operator
// =========================================

// The ternary operator is a shorthand for an if...else statement.

// Syntax:
// condition ? expressionIfTrue : expressionIfFalse


12 > 13
  ? console.log("true")
  : console.log("false");