// =========================================
// Array Use Case
// =========================================

// Arrays are used to store multiple values in a single variable.


// Example-
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits);




// ******************************************************************************************************




// =========================================
// Creating and Accessing Arrays
// =========================================

// Arrays are used to store multiple values in a single variable.



// Creating an Array
let marks = [10, 40, 52, 37, 92];



// Accessing Array Elements

// Array indexing starts from 0.

console.log(marks[0]); // 10
console.log(marks[1]); // 40
console.log(marks[2]); // 52
console.log(marks[3]); // 37
console.log(marks[4]); // 92



// Accessing an index that does not exist returns undefined.

console.log(marks[10]); // undefined




// ******************************************************************************************************




// =========================================
// Modifying Arrays
// =========================================

// Array elements can be modified by assigning a new value to an index.

let arr1 = [1, 2, 3, 4];

// Modify the element at index 2

arr1[2] = 12;

console.log(arr1); // [1, 2, 12, 4]




// ******************************************************************************************************




// =========================================
// push() Method
// =========================================

// The push() method adds one or more elements to the end of an array.



// Example-
let arr2 = [1, 2, 3, 4, 5];

arr2.push(7000);

console.log(arr2); // [1, 2, 3, 4, 5, 7000]




// ******************************************************************************************************




// =========================================
// unshift() Method
// =========================================

// The unshift() method adds one or more elements to the beginning of an array.



// Example-
let arr3 = [1, 2, 3, 4, 5];

arr3.unshift(7000);

console.log(arr3); // [7000, 1, 2, 3, 4, 5]




// ******************************************************************************************************




// =========================================
// pop() Method
// =========================================

// The pop() method removes the last element from an array.



// Example-
let arr4 = [1, 2, 3, 4, 5];

arr4.pop();

console.log(arr4); // [1, 2, 3, 4]




// ******************************************************************************************************




// =========================================
// shift() Method
// =========================================

// The shift() method removes the first element from an array.



// Example-
let arr5 = [1, 2, 3, 4, 5];

arr5.shift();

console.log(arr5); // [2, 3, 4, 5]