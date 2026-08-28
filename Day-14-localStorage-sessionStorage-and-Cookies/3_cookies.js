// Cookies

// Cookies are small pieces of data stored inside the browser. Cookies are mainly used to store information that can be sent between the browser and server.



// Main Cookie Operations:-

// There are mainly 3 basic operations-
// 1. Store data   → document.cookie
// 2. Fetch data   → document.cookie
// 3. Remove data → document.cookie



// 1. Store Data - Creating a Cookie

// Cookies can be created using document.cookie.

// Syntax:
// document.cookie = "key=value";

document.cookie = "name=saikat";



// 2. Store Cookie with Expiry

// The expires property is used to specify when the cookie should expire.

// Syntax:
// document.cookie = "key=value; expires=date";

document.cookie = "username=saikat; expires=Fri, 28 Aug 2026 23:59:59 UTC; path=/";



// 3. Fetch Data - Reading Cookies

// document.cookie is used to retrieve all cookies available for the current document.

// Syntax:
// document.cookie;

let cookies = document.cookie;

console.log(cookies);



// 4. Delete Data - Removing a Cookie

// To delete a cookie, we set its expiration date to a past date.

// Syntax:
// document.cookie = "key=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";