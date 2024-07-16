# async and await: 
async and await are keywords used in JavaScript (and other programming languages) to handle asynchronous operations more easily and readably. They are part of the ECMAScript 2017 (ES8) standard and are used to work with promises in a way that makes asynchronous code look and behave more like synchronous code.

## **async** Keyword
The async keyword is used to declare a function as asynchronous. When a function is declared with async, it automatically returns a promise, and you can use the await keyword within it to pause the execution of the function until a promise is resolved.

### Example:

```javascript
async function fetchData() {
  return "Data fetched";
}

fetchData().then((data) => console.log(data)); // Output: Data fetched
```

# **await** Keyword
The await keyword can only be used inside async functions. It pauses the execution of the async function and waits for the promise to resolve. Once the promise is resolved, it returns the result. If the promise is rejected, it throws an error, which can be caught using a try...catch block.

### Example:

```javascript
async function fetchUserData() {
  try {
    let response = await fetch('https://api.example.com/user');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchUserData();
```

## Key Points
**Async Function:** A function declared with async always returns a promise.
**Await:** Pauses the execution of an async function and waits for the promise to resolve.

