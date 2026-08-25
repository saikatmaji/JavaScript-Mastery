// sessionStorage

// sessionStorage is used to temporarily store data inside the browser. The stored data remains available while the current browser tab is open. Once the tab is closed, the stored data is removed.



// Main sessionStorage Methods:-


// There are 4 main operations-
// 1. Store data => setItem()
// 2. Update data => setItem()
// 3. Fetch data => getItem()
// 4. Remove data => removeItem()



// 1. Store Data - setItem()

// setItem() is used to store data in sessionStorage.

// Syntax:
// sessionStorage.setItem(key, value);

sessionStorage.setItem("name", "saikat");



// 2. Update Data - setItem()

// setItem() can also be used to update an existing value. If the key already exists, its value will be replaced.

sessionStorage.setItem("name", "raj");



// 3. Fetch Data - getItem()

// getItem() is used to retrieve data from sessionStorage.

// Syntax:
// sessionStorage.getItem(key);

let val = sessionStorage.getItem("name");



// 4. Remove Data - removeItem()

// removeItem() is used to remove a specific item from sessionStorage.

// Syntax:
// sessionStorage.removeItem(key);

sessionStorage.removeItem("name");