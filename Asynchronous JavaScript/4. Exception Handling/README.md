# Exception Handling
Exception handling is a mechanism for managing errors or exceptional conditions in a program's flow. When an error occurs, the normal flow of the program is interrupted, and control is transferred to an exception handler. The exception handler can then take appropriate action, such as logging the error, cleaning up resources, or retrying the operation.

# Difference Between then, catch and try, catch
- **Promises:** then and catch
In the context of promises, then and catch are methods used to handle asynchronous operations.

- **then():** This method is used to handle the fulfillment of a promise. It takes two optional arguments: a callback for the fulfillment case, and a callback for the rejection case. Usually, only the first argument is used, and catch() is used for errors.

- **catch():** This method is used to handle the rejection of a promise. It takes a single callback function that is invoked when the promise is rejected.

## Example using then and catch:

```javascript
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true; // Change this to false to simulate a failure
    if (success) {
      resolve("The operation was successful!");
    } else {
      reject("The operation failed!");
    }
  }, 2000);
});

myPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

# Synchronous Code: try and catch
try and catch are used to handle exceptions in synchronous code. A try block is used to wrap the code that might throw an error, and a catch block is used to handle the error.

- **try:** This block contains code that might throw an exception. If an exception occurs, control is immediately transferred to the catch block.

- **catch:** This block contains code that is executed if an exception is thrown in the try block. It takes a single argument, which is the exception object.

## Example using try and catch:

```javascript
try {
  // Code that might throw an error
  let result = riskyOperation();
  console.log("Result:", result);
} catch (error) {
  // Handle the error
  console.log("Error:", error.message);
}

function riskyOperation() {
  // Simulate an error
  throw new Error("Something went wrong!");
}
```

### Asynchronous vs. Synchronous:
##### then and catch are designed for handling asynchronous operations. try and catch are used for handling synchronous operations.