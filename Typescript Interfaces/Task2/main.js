"use strict";
// Step 2: Create an object adhering to the User interface
const user1 = {
    id: 1,
    name: "Marjan Ahmed",
    email: "marjan.ahm@example.com",
    isActive: true
};
const user2 = {
    id: 2,
    name: "Mustafa Khalid",
    email: "mustafa.khd@example.com",
    isActive: false
};
// Step 3: Define a function that accepts a User object
function printUserDetails(user) {
    console.log(`User [ID: ${user.id}]: ${user.name}, Email: ${user.email}, Active: ${user.isActive}`);
}
// Step 4: Test the function
printUserDetails(user1);
printUserDetails(user2);
