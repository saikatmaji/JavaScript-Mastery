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

let paragraph1 = document.querySelector("p");

function doubleClick() {
    paragraph1.style.backgroundColor = "green";
}

paragraph1.addEventListener("dblclick", doubleClick);




// ******************************************************************************************************




// ===================================================
// Removing Event Listeners with removeEventListener()
// ===================================================

// The removeEventListener() method is used to remove an event listener from an element.

// Note: The same function reference must be passed to both addEventListener() and removeEventListener().



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




// ******************************************************************************************************




// =========================================
// Handling the input Event
// =========================================

// The input event is triggered whenever the value of an input field changes. It fires immediately as the user types, deletes, or pastes text.



// Syntax
// element.addEventListener("input", callbackFunction);



// Example 1: Detect Input Changes
// This example logs a message every time the user changes the input field.

// let inputBox = document.querySelector("input");

// function handleInput() {
//     console.log("Typed");
// }

// inputBox.addEventListener("input", handleInput);



// Example 2: Get the Typed Character

let inputBox = document.querySelector("input");

function handleInput(event1) {
    if (event1.data !== null) {
        console.log(event1.data);
    }
}

inputBox.addEventListener("input", handleInput);




// ******************************************************************************************************




// =========================================
// Handling the change Event
// =========================================

// The change event is triggered when the value of an input, select, or textarea element changes and the change is confirmed.

// Unlike the input event, the change event does not fire on every keystroke.



// Syntax

// element.addEventListener("change", callbackFunction);




// Example 1: Get the Selected Value

// This example logs the selected option from a <select> element.

// let selectBox = document.querySelector("select");

// function handleChange(event2) {
//     console.log(event2.target.value);
// }

// selectBox.addEventListener("change", handleChange);



// Example 2: Update Text Dynamically

let selectBox = document.querySelector("select");
let heading4 = document.querySelector("h3");

function handleDeviceChange(event2) {
    heading4.textContent = `${event2.target.value} Device Selected`;
}

selectBox.addEventListener("change", handleDeviceChange);




// ******************************************************************************************************




// =========================================
// Handling the keydown Event
// =========================================

// The keydown event is triggered immediately when a keyboard key is pressed.



// Syntax

// element.addEventListener("keydown", callbackFunction);



// Example

// This example displays the key pressed by the user on the screen.

let heading5 = document.querySelector("h1");

function handleKeyDown(event3) {
    if (event3.key === " ") {
        heading5.textContent = "SPC";
    } else {
        heading5.textContent = event3.key;
    }
}

window.addEventListener("keydown", handleKeyDown);




// ******************************************************************************************************




// =========================================
// Handling the keyup Event
// =========================================

// The keyup event is triggered when a keyboard key is released.



// Syntax
// element.addEventListener("keyup", callbackFunction);



// Example

// This example displays the key released by the user on the screen.


let heading6 = document.querySelector("h1");

function handleKeyUp(event4) {
    if (event4.key === " ") {
        heading6.textContent = "SPC";
    } else {
        heading6.textContent = event4.key;
    }
}

window.addEventListener("keyup", handleKeyUp);




// ******************************************************************************************************




// =========================================
// Handling click and change Events
// =========================================

// In this example, we create a custom button to replace the default file input button. When the custom button is clicked, it programmatically opens the file picker. After a file is selected, the button text is updated with the selected file name.



// Step 1: Open the File Picker on Button Click

let newButton = document.querySelector("#btn");
let fileInput = document.querySelector("input");

function handleButtonClick() {
    fileInput.click();
}

newButton.addEventListener("click", handleButtonClick);



// Step 2: Update Button Text After File Selection

function handleFileChange(event5) {
    const file = event5.target.files[0];

    if (file) {
        newButton.textContent = file.name;
    }
}

fileInput.addEventListener("change", handleFileChange);




// ******************************************************************************************************




// =========================================
// Handling Form submit Events
// =========================================

// The submit event is triggered when a form is submitted. By default, submitting a form reloads the page. To prevent this behavior, use event.preventDefault().



// Example 1: Get Form Values

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");

// function handleSubmit(event6) {
//     event6.preventDefault();

//     console.log(
//         inputs[0].value,
//         inputs[1].value,
//         inputs[2].value,
//         inputs[3].value
//     );
// }

// form.addEventListener("submit", handleSubmit);



// Example 2: Create a Profile Card

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

function handleSubmit(event6) {
    event6.preventDefault();

    // Create Card
    let card = document.createElement("div");
    card.classList.add("card");

    // Create Profile Section
    let profile = document.createElement("div");
    profile.classList.add("profile");

    let image = document.createElement("img");
    image.setAttribute("src", inputs[0].value);

    let heading7 = document.createElement("h3");
    heading7.textContent = inputs[1].value;

    let heading8 = document.createElement("h5");
    heading8.textContent = inputs[2].value;

    let paragraph2 = document.createElement("p");
    paragraph2.textContent = inputs[3].value;

    // Append Elements
    profile.appendChild(image);

    card.appendChild(profile);
    card.appendChild(heading7);
    card.appendChild(heading8);
    card.appendChild(paragraph);

    main.appendChild(card);

    // Clear Input Fields
    inputs.forEach(function (input) {
        if (input.type !== "submit") {
            input.value = "";
        }
    });
}

form.addEventListener("submit", handleSubmit);