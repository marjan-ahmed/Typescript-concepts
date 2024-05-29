// Example 1
let girlAge: null = null;   
// girlAge = 18; // the variable is null
console.log(girlAge); // 18

// Example 2
let myValue: number | null = null;
myValue = 5; // This is valid
myValue = null; // This is also valid

// Example 3
function processValue(value: number | null) {
    if (value !== null) {
        console.log(value * 2); // TypeScript knows value is a number here
    } else {
        console.log("No value to process");
    }
}
processValue(7);
processValue(null);