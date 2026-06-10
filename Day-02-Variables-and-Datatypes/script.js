// Variables

// ***variable declaration with const keyword
const account = 1234;

// account = 5678; // const => re-declare ❌ | re-assign ❌

console.log(account);


// const => Global Scope ✅, Function Scope ✅, Block Scope ✅
if(true){
    // const a = 20;
}

// console.log(a); // ReferenceError




// ***variable declaration with let keyword
let name = "Saikat";
let age = 23;

age = 25; // let => re-declare ❌ | re-assign ✅

console.log(name, age);


// let => Global Scope ✅, Function Scope ✅, Block Scope ✅
if(true){
    // let b = 20;
}

// console.log(b); // ReferenceError




// ***variable declaration with var keyword
var city = "Kolkata";

var city = "Bengaluru"; // var => re-declare ✅ | re-assign ✅

console.log(city);


// var => Global Scope ✅, Function Scope ✅, Block Scope ❌
if(true){
    var c = 20;
}

console.log(c); // 20




// ******************************************************************************************************




// Datatypes

// ***Primitive Datatypes:-
// number, string, boolean, undefined, bigint, null, symbol

// number
let a1 = 10;
let b1 = 2.36;
console.log(a1, b1);

// console.log(typeof a1); // number


// string
let c1 = "Saikat";
let d1 = "BCREC";
console.log(c1, d1);

// console.log(typeof c1); // string


// boolean
let isLoggedIn = true;
let f = false
console.log(isLoggedIn, f);

// console.log(typeof isLoggedIn); // boolean


// undefined
let user;
console.log(user);

// const p; // const must be initialized during declaration
// console.log(p); // SyntaxError

// console.log(typeof user); // undefined


// bigint
let num = 238584875765645356n;
console.log(num);

// console.log(typeof num); // bigint


// null
let weather = null;
console.log(weather);

// console.log(typeof weather); // object


// symbol
const id1 = Symbol("id");
console.log(id1);

// console.log(typeof id1); // symbol




// ***Non-Primitive Datatypes:-
// array, object, function

// array
let arr = [10,20,11,"Saikat",true];
console.log(arr);

// console.log(typeof arr); // object


// object
let obj = {
    name:"Saikat",
    account:12312,
    age:23,
    category:'gen'
}

// console.log(typeof obj); // object


// function
let s = function add(){
    console.log("Hello World");
}

console.log(typeof s); // function




// ***Primitive Datatype is immutable
let num1 = 10;
num1 = 20;

let str = "Saikat";
str = "Raj";

console.log(str);