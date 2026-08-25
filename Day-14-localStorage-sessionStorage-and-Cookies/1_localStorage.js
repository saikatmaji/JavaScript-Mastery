// localStorage

// localStorage is used to store data inside the browser. The stored data remains available even after closing or reopening the browser, until it is manually removed.



// Main localStorage Methods:-

// There are 4 main operations-
// 1. Store data => setItem()
// 2. Update data => setItem()
// 3. Fetch data => getItem()
// 4. Remove data => removeItem()



// 1. Store Data - setItem()

// setItem() is used to store data in localStorage.

// Syntax:
// localStorage.setItem(key, value);

localStorage.setItem("name", "harsh");



// 2. Update Data - setItem()

// setItem() can also be used to update an existing value. If the key already exists, its value will be replaced.

localStorage.setItem("name", "harshita");



// 3. Fetch Data - getItem()

// getItem() is used to retrieve data from localStorage.

// Syntax:
// localStorage.getItem(key);

let val = localStorage.getItem("name");



// 4. Remove Data - removeItem()

// removeItem() is used to remove a specific item from localStorage.

// Syntax:
// localStorage.removeItem(key);

localStorage.removeItem("name");