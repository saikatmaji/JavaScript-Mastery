// custom regex



// Example 1 - regex code for an valid email.

let form = document.querySelector("form");

let submit_func = (dets) => {
    dets.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // test an email
    let ans = emailRegex.test("harsh@gmail.com"); // true
    // let ans = emailRegex.test("a@.gmail."); // false
    console.log(ans);
}

form.addEventListener("submit", submit_func);




// Example 2 - regex code for an valid username.

// let form = document.querySelector("form");

// let submit_func = (dets) => {
//     dets.preventDefault();

//     const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

//     // test an email
//     let ans = usernameRegex.test("saikat_maji"); // true
//     // let ans = usernameRegex.test("saikat.maji"); // false
//     console.log(ans);
// }

// form.addEventListener("submit", submit_func);