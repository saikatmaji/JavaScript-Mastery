// clearInterval()

// clearInterval() is used to stop a setInterval() before or after it starts executing repeatedly.

// To clear an interval, we first store the return value of setInterval() in a variable and then pass that variable to clearInterval().


// Syntax

// clearInterval(intervalID);


// Example

// This interval prints "Hello Duniya" every 5 seconds.

let it = setInterval(() => {
    console.log("Hello Duniya");
}, 5000);


// Stop the interval.

clearInterval(it);