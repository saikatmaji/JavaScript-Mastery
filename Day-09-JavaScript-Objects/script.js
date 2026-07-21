// =========================================
// Arrays vs Objects
// =========================================

// Arrays are used to store multiple values of the same type or related data.

// Objects are used to store multiple properties of a single entity.



// Example-

// Array
let students = ["Rahul", "Aman", "Priya"];


// Object
let student = {
  name: "Rahul",
  age: 21,
  city: "Kolkata",
};

console.log(students);
console.log(student);




// ******************************************************************************************************




// =========================================
// Creating and Accessing Objects
// =========================================

// Objects are created using key-value pairs.

let student = {
  name: "Saikat",
  age: 23,
  college: "BCREC",
};



// Accessing Object Properties

// Method 1: Dot Notation
console.log(student.name);     // Saikat
console.log(student.age);      // 23
console.log(student.college);  // BCREC


// Method 2: Bracket Notation
console.log(student["name"]);     // Saikat
console.log(student["age"]);      // 23
console.log(student["college"]);  // BCREC



// Dynamic Property Access

// Bracket notation is useful when the property name is stored in a variable.

let key = "name";

console.log(student.key);   // undefined
console.log(student[key]);  // Saikat