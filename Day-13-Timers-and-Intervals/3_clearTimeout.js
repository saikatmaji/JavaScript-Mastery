// clearTimeout()

// clearTimeout() is used to cancel a setTimeout() before it gets executed.

// To clear a timeout, we first store the return value of setTimeout() in a variable and then pass that variable to clearTimeout().


// Syntax

// clearTimeout(timeoutID);


// Example

// This timeout is scheduled to run after 5 seconds.

let tm = setTimeout(() => {
    console.log("Hello World");
}, 5000);


// Cancel the timeout before it executes.

clearTimeout(tm);