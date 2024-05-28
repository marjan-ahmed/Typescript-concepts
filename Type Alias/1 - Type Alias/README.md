# Type Alias 
In TypeScript, you can create type aliases using the type keyword. Type aliases are particularly useful when you want to give a name to a complex type or when you want to create more readable and maintainable code.

<h3>Here's a basic example of using a type alias in TypeScript:</h3>

```typescript
// Define a type alias
type Point = {
    x: number;
    y: number;
};

// Use the type alias in a function
function printPoint(point: Point): void {
    console.log(`x: ${point.x}, y: ${point.y}`);
}

// Example usage
const p: Point = { x: 10, y: 20 };
printPoint(p);  // Output: x: 10, y: 20

```

# In this example:

Point is a type alias for an object type with x and y properties, both of which are numbers.
The printPoint function takes a Point as an argument, making the function's purpose and expected input clearer.
Here's a more complex example with a type alias for a union type:

```typescript
// Define a type alias for a union type
type ID = number | string;

// Use the type alias in a function
function printID(id: ID): void {
    if (typeof id === 'string') {
        console.log(`ID is a string: ${id}`);
    } else {
        console.log(`ID is a number: ${id}`);
    }
}

// Example usage
printID(123);        // Output: ID is a number: 123
printID("ABC123");   // Output: ID is a string: ABC123

```
# In this example:

- ID is a type alias for a union type that can be either a number or a string.
- The printID function uses the ID type alias, making it clear that the function can accept either a number or a string as an argument.

Type aliases in TypeScript help to create more expressive, maintainable, and understandable code by providing meaningful names to complex or frequently used types.