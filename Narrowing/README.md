# Narrowing in TypeScript
Narrowing in TypeScript is the process of refining the type of a variable to a more specific type within a certain block of code, based on checks or conditions. This allows TypeScript to understand and enforce more specific types, leading to safer and more predictable code.

<h2>Example Definitions:</h2>
<h3>1. Basic Definition:</h3>

**Narrowing** is the way TypeScript reduces the type of a variable from a broader type to a more specific type based on certain conditions.
<h3>2. Using Type Guards:</h3>

**Type Guards** are conditions (like `typeof`, `instanceof`, or custom type guard functions) that allow TypeScript to determine the more specific type of a variable within a block of code.
<h3>Example:</h3>

```typescript
function example(value: string | number) {
    if (typeof value === 'string') {
        // value is narrowed to string
        console.log(value.toUpperCase());
    } else {
        // value is narrowed to number
        console.log(value.toFixed(2));
    }
};

```
- Here, `typeof value === 'string'`  narrows the type of `value` to `string` inside the if block.
- Similarly, the else block narrows `value` to `number`.
