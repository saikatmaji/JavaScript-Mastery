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




// =========================================
// Selecting Elements with querySelector()
// =========================================

// The querySelector() method selects the first element that matches the specified CSS selector.

let heading2 = document.querySelector("h1");


// Display the selected element.
console.dir(heading2);




// ******************************************************************************************************




// ===========================================
// Selecting Elements with querySelectorAll()
// ===========================================

// The querySelectorAll() method selects all elements that match the specified CSS selector.

// It returns a static NodeList.
let headings = document.querySelectorAll("h1");


// Display the NodeList.
console.dir(headings);




// ******************************************************************************************************




// =========================================
// Accessing and Updating Text Content
// =========================================

// There are three common ways to access and update the content of an element:
// 1. innerText
// 2. textContent
// 3. innerHTML



// 1. innerText

// The innerText property gets or sets only the visible text of an element.

let heading3 = document.querySelector("h1");

heading3.innerText = "Hello Harsh, Kaise Ho?";



// 2. textContent

// The textContent property gets or sets all text inside an element, including hidden text.

// It is generally faster than innerText.

heading3.textContent = "Harsh Badhiya Hai";



// 3. innerHTML

// The innerHTML property gets or sets the HTML content inside an element.

heading3.innerHTML = "<i>Hey</i>";




// ******************************************************************************************************




// =========================================
// Attribute Manipulation
// =========================================

// There are three common methods for working with HTML attributes:
// 1. setAttribute()
// 2. getAttribute()
// 3. removeAttribute()



// 1. setAttribute()

// The setAttribute() method sets or updates the value of an attribute.

let image = document.querySelector("img");

image.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1780552274457-b4d8da874f96?q=80&w=1170&auto=format&fit=crop"
);



// 2. getAttribute()

// The getAttribute() method returns the value of an attribute.

let anchor = document.querySelector("a");

console.log(anchor.getAttribute("href"));



// 3. removeAttribute()

// The removeAttribute() method removes an attribute from an element.

let heading4 = document.querySelector("h1");

heading4.removeAttribute("style");




// ******************************************************************************************************




// =========================================
// Dynamic DOM Manipulation
// =========================================

// Dynamic DOM Manipulation allows you to create, insert, and remove HTML elements using JavaScript.

// Common methods:
// 1. createElement()
// 2. append() & prepend()
// 3. remove()



// 1. createElement()

// The createElement() method creates a new HTML element.

let heading5 = document.createElement("h1");



// 2. append() & prepend()

// append() inserts an element at the end of the parent element.

// prepend() inserts an element at the beginning of the parent element.

let body = document.querySelector("body");

heading5.textContent = "Hello Ji Kaise Ho";

body.prepend(heading5);   // Insert at the beginning

// body.append(heading5); // Insert at the end



// 3. remove()

// The remove() method removes an element from the DOM.

let heading6 = document.querySelector("h2");

heading6.remove();




// ******************************************************************************************************




// =========================================
// Updating Styles with the style Property
// =========================================

// JavaScript can be used to update the CSS styles of HTML elements.

// There are two common ways to update styles:
// 1. Using the style property
// 2. Using classList (Recommended)



// 1. Using the style Property

// The style property is used to change individual CSS properties directly from JavaScript.

let heading7 = document.querySelector("h1");

heading7.style.color = "orangered";
heading7.style.backgroundColor = "dodgerblue";
heading7.style.fontFamily = "Fantasy";
heading7.style.textTransform = "capitalize";




// ******************************************************************************************************