 // --------------------------- Example 1 ------------------------------
 
 // Function to generate a greeting message with an optional greeting parameter
function generateGreeting(name: string, greeting?: string): string {
    // Use the default greeting if the optional parameter is not provided
    const greetingMessage = greeting || "Hello";
    return `${greetingMessage}, ${name}!`;
}

// Test cases
const greeting1 = generateGreeting("Alice");
console.log(greeting1); // Output: Hello, Alice!

const greeting2 = generateGreeting("Bob", "Good morning");
console.log(greeting2); // Output: Good morning, Bob!

const greeting3 = generateGreeting("Charlie", "Hi");
console.log(greeting3); // Output: Hi, Charlie!


// --------------------------- Example 2 ------------------------------

let buildName = (firstName: string, lastName?: string) => {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else{
        return firstName;
    }
};

let name1 = buildName("Bob"); // Bob
let name2 = buildName("Marjan", "Ahmed"); // Marjan Ahmed
let name3 = buildName("Mohammad Bilal Khan");

console.log(name1)
console.log(name2)
console.log(name3)

// anonymous function type with optional parameters
var buildName1 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}