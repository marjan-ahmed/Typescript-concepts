# Optioanal Parameters (?)
Optional parameters in TypeScript allow you to specify parameters that may or may not be provided when calling a function. These parameters are denoted by a ? after the parameter name in the function declaration. If a value is not provided for an optional parameter when calling the function, it will default to undefined.

<h3>Definition:</h3>
An optional parameter in TypeScript is a parameter that may be omitted when calling a function. It allows for flexibility in function usage, as callers can choose to provide values for optional parameters or leave them unspecified.

<h3>Syntax:</h3>

```
function functionName(param1: type, param2?: type) {
    // Function body
}
```

**In the syntax above:**

- param2 is an optional parameter, denoted by ?.
- If param2 is not provided when calling the function, it defaults to undefined.

<h3>Example:</h3>

```typescript
// Function to greet a person with an optional greeting
function greetPerson(name: string, greeting?: string): void {
    if (greeting) {
        console.log(`${greeting}, ${name}!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}

// Test cases
greetPerson("Alice"); // Output: Hello, Alice!
greetPerson("Bob", "Hi"); // Output: Hi, Bob!
In the example above:

```

- The greeting parameter in the greetPerson function is optional.
- When calling greetPerson("Alice"), the greeting parameter is omitted, so it defaults to undefined.
- When calling greetPerson("Bob", "Hi"), a value is provided for the greeting parameter.

----------------------------------------------------------------

# Default Parameters
Default parameters in TypeScript allow you to specify default values for function parameters. These default values are used when a value is not provided for the parameter or when the provided value is undefined.

<h3>Definition:</h3>
A default parameter in TypeScript is a parameter that has a default value specified in the function declaration. If a value is not provided for a parameter when calling the function, the default value is used instead.

<h3>Syntax:</h3>

```
function functionName(param1: type = defaultValue, param2: type = defaultValue) {
    // Function body
}
```
In the syntax above:

param1 and param2 are parameters with default values specified using the = operator.
If a value is not provided for param1 or param2 when calling the function, the default value defaultValue is used.
<h3>Example:</h3>

```typescript
// Function to calculate the area of a rectangle with default parameters
function calculateArea(width: number, height: number = width) {
    return width * height;
}

// Test cases
const area1 = calculateArea(5);
console.log(`Area: ${area1}`); // Output: Area: 25 (since it's assumed to be a square)

const area2 = calculateArea(5, 10);
console.log(`Area: ${area2}`); // Output: Area: 50

```

----------------------------------------------------------------

# Rest Parameters
Rest parameters in TypeScript allow you to represent an indefinite number of arguments as an array within a function. This allows functions to accept any number of arguments, making them more flexible and versatile.

<h3>Definition:</h3>
A rest parameter in TypeScript is denoted by the ellipsis (...) followed by the parameter name in the function declaration. It allows you to represent an indefinite number of arguments as an array.

<h3>Syntax:</h3>

```
function functionName(param1: type, ...restParams: type[]): returnType {
    // Function body
}
```
<h3>In the syntax above:</h3>
restParams is the rest parameter, indicated by the ellipsis (...) before the parameter name.
It collects all remaining arguments passed to the function into an array.

<h3>Example:</h3>

```typescript
// Function to calculate the sum of numbers using rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// Test cases
const total1 = sum(1, 2, 3);
console.log(`Total: ${total1}`); // Output: Total: 6

const total2 = sum(1, 2, 3, 4, 5);
console.log(`Total: ${total2}`); // Output: Total: 15
```

<h3>In the example above:</h3>

- The sum function accepts any number of arguments.
- The rest parameter numbers collects all the arguments into an array.
- The reduce method is used to calculate the sum of all numbers in the array.