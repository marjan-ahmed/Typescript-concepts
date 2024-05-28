# Function overloading
Function overloading in TypeScript refers to the ability to define multiple function signatures for a single function name. This feature allows you to create functions that can accept different combinations of parameter types or counts, providing flexibility in how the function can be invoked. TypeScript's static type checking ensures that the correct overload is selected based on the provided arguments, enhancing type safety during development.

<h3>Here's an example</h3>

```typescript
// Function overloads for 'add' function
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Implementation of 'add' function
function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b; // Adding two numbers
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b; // Concatenating two strings
    } else {
        throw new Error('Invalid arguments for add function.');
    }
}

// Test the 'add' function
console.log(add(2, 3));            // Output: 5 (number)
console.log(add('Hello, ', 'world')); // Output: Hello, world (string)

```