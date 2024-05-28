// Defining the object
let person = {
    name: "Saad",
    age: 19,
    city: "Karachi"
};

// function to display the prperties of an objects
function displayPerson(person: { name: string; age: number; city: string}) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`City: ${person.city}`);
};

displayPerson(person);
