// =========================================
// What is an Event?
// =========================================

// An event is any action or occurrence that happens in the browser.

// Examples of events include:
// - Clicking a button
// - Typing in an input field
// - Moving the mouse
// - Pressing a keyboard key
// - Submitting a form
// - Scrolling the page




// ******************************************************************************************************




// ==============================================
// Adding Event Listeners with addEventListener()
// ==============================================

// The addEventListener() method is used to attach an event listener to an element.

// Steps:
// 1. Select the HTML element.
// 2. Decide which event to listen for.
// 3. Write the function that should run when the event occurs.




// =========================================
// Syntax
// =========================================

// element.addEventListener("eventName", callbackFunction);




// =========================================
// Example 1: Click Event
// =========================================

let heading = document.querySelector("h2");

function singleClick() {
    heading.style.color = "orangered";
}

heading.addEventListener("click", singleClick);




// =========================================
// Example 2: Double Click Event
// =========================================

let paragraph = document.querySelector("p");

function doubleClick() {
    paragraph.style.backgroundColor = "green";
}

paragraph.addEventListener("dblclick", doubleClick);




// ******************************************************************************************************




// ===============================================
// Removing Event Listeners with removeEventListener()
// ===============================================

// The removeEventListener() method is used to remove an event listener from an element.

// Note:
// The same function reference must be passed to both addEventListener() and removeEventListener().



// Syntax
// element.removeEventListener("eventName", callbackFunction);



// Example

let heading2 = document.querySelector("h1");

function doubleClick() {
    heading2.style.backgroundColor = "orangered";
}

heading2.addEventListener("dblclick", doubleClick);

// Removes the event listener
heading2.removeEventListener("dblclick", doubleClick);




// ******************************************************************************************************




// =========================================
// Handling the click Event
// =========================================

// The click event is triggered when the user clicks on an HTML element.



// Syntax

// element.addEventListener("click", callbackFunction);



// Example

let heading3 = document.querySelector("h2");

let singleClick = () => {
    heading3.style.backgroundColor = "teal";
};

heading3.addEventListener("click", singleClick);