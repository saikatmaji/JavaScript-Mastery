// =========================================
// What is the DOM?
// =========================================

// DOM (Document Object Model) is a programming interface that represents an HTML document as a tree of objects.

// Everything you see on a webpage, such as headings, paragraphs, images, buttons, links, and forms is part of the DOM.

// The DOM allows JavaScript to:
// - Access HTML elements
// - Modify content
// - Change styles
// - Handle events
// - Create or remove elements



// DOM Tree Structure

// The DOM represents an HTML document as a tree structure.

// Main types of DOM nodes:
// - Document
// - Element
// - Text
// - Comment




// ******************************************************************************************************




// =========================================
// DOM Manipulation Basics
// =========================================

// DOM Manipulation is the process of using JavaScript to access, modify, create, or remove HTML elements on a webpage dynamically.


// To learn DOM Manipulation, you should understand:
// 1. Selecting HTML elements
// 2. Changing text content
// 3. Changing HTML content
// 4. Changing CSS styles
// 5. Modifying attributes
// 6. Adding event listeners




// ******************************************************************************************************




// =========================================
// Selecting Elements with getElementById()
// =========================================

// The getElementById() method selects an element using its unique id.

let heading1 = document.getElementById("abcd");


// Display the selected element.

console.log(heading1);

// Display the DOM object with all its properties.

console.dir(heading1);




// ******************************************************************************************************




// ================================================
// Selecting Elements with getElementsByClassName()
// ================================================

// The getElementsByClassName() method selects all elements that have the specified class name.

// It returns a live HTMLCollection.
let elements = document.getElementsByClassName("abcd");


// Display the HTMLCollection.
console.dir(elements);




// ******************************************************************************************************