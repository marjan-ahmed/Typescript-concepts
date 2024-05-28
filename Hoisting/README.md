# What is Hoisting?
Hoisting is a behavior in JavaScript and TypeScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, regardless of where the declarations occur within the code. 
    Hoisting applies differently to variable declarations made with `var`, `let`, and `const`, as well as `function` 
declarations and function expressions. With var declarations, the variable is initialized with undefined during `hoisting`, while `let` and `const` declarations remain uninitialized until their actual declaration in the code.

# Uses:
Accessing Variables Before Declaration: Allows you to access variables and functions before their declaration within their respective scopes. This can be helpful in organizing code and making it more readable.

Function Declaration Flexibility: Facilitates the declaration of functions anywhere within their containing scope, enabling more flexible code organization and design patterns like function declarations after their usage.

**<h3>Usign var</h3>**

```typescript
console.log(x); // undefined
var x;
x = 5;

```
**<h3>Usign let & const</h3>**

```typescript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
```


