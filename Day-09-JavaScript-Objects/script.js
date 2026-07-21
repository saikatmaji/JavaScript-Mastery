// =========================================
// Arrays vs Objects
// =========================================

// Arrays are used to store multiple values of the same type or related data.

// Objects are used to store multiple properties of a single entity.



// Example-

// Array
let students = ["Rahul", "Aman", "Priya"];


// Object
let student1 = {
  name: "Rahul",
  age: 21,
  city: "Kolkata",
};

console.log(students);
console.log(student1);




// ******************************************************************************************************




// =========================================
// Creating and Accessing Objects
// =========================================

// Objects are created using key-value pairs.

let student2 = {
  name: "Saikat",
  age: 23,
  college: "BCREC",
};



// Accessing Object Properties

// Method 1: Dot Notation
console.log(student2.name);     // Saikat
console.log(student2.age);      // 23
console.log(student2.college);  // BCREC


// Method 2: Bracket Notation
console.log(student2["name"]);     // Saikat
console.log(student2["age"]);      // 23
console.log(student2["college"]);  // BCREC



// Dynamic Property Access

// Bracket notation is useful when the property name is stored in a variable.

let key = "name";

console.log(student.key);   // undefined
console.log(student[key]);  // Saikat




// ******************************************************************************************************




// =========================================
// Object Key-Value Structure
// =========================================

// Objects store data as key-value pairs.

let student3 = {
  name: "Harsh",
  age: 23,
};

// Key-Value Pairs
// "name" -> Key
// "Harsh" -> Value

// "age" -> Key
// 23 -> Value




// ******************************************************************************************************




// =========================================
// Dot Notation vs Bracket Notation
// =========================================

let student4 = {
  name: "Harsh",
};

// Dot Notation

console.log(student4.name); // Harsh




// Bracket Notation

console.log(student4["name"]); // Harsh