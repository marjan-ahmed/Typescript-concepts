# JavaScript Promises

## Introduction

In JavaScript, a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a way to handle asynchronous operations in a more synchronous fashion, making the code easier to read and maintain.

A promise can be in one of three states:

1. **Pending:** The initial state, neither fulfilled nor rejected.
2. **Fulfilled:** The operation completed successfully.
3. **Rejected:** The operation failed.

## Example

Here's an example of how a promise works in JavaScript:

```javascript
// Creating a new promise
let myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    let success = true; // Change this to false to simulate a failure
    if (success) {
      resolve("The operation was successful!");
    } else {
      reject("The operation failed!");
    }
  }, 2000);
});

// Using the promise
myPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
