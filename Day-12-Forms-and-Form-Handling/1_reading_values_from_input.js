// We covered 4 topics:-

// 1. Topic 1 - Reading values from input, textarea, select.

// 2. Topic 2 - Prevent default submission - preventDefault() is used to stop the browser's default behavior for an event. It allows us to handle the event with JavaScript instead. For example, in a form submission, it prevents the page from reloading, so we can validate the data or send it to a server using an API.

// 3. Topic 3 - Showing error messages conditionally

// 4. Topic 4 - JS-based validation


// Example
// JS-based validation
let nm = document.querySelector("#name");
let form = document.querySelector("form");

let hide = document.querySelector("#hide");

let submit_func = (dets) => {
    // Prevent default submission
    dets.preventDefault();

    // Showing error messages conditionally
    if(nm.value.length <= 2){
        hide.style.display = "initial";
    }
    else{
        hide.style.display = "none";
    }
}

form.addEventListener("submit", submit_func);