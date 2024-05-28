// ---------------- Example 1 ---------------------

// Variable declaration (hoisted)
//console.log(message); // Output: undefined
var message: string = "Hello, TypeScript!";

// Function declaration (hoisted)
sayHello(); // Output: Hello, world!
function sayHello() {
    console.log("Hello, world!");
};

// ---------------- Example 2 ---------------------

//console.log(x); // Error: Cannot access 'x' before initialization
let x = 10;

function outer() {
    //console.log(innerVar); // Output: undefined
    var innerVar = "Inner variable";
}
outer();

// it can be done only with var keyword & functions