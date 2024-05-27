const address = {
    street: "D-32, Al Falah",
    city: "Karachi",
    zipCode: 75210
};

const person1 = {
    name: "Ali",
    age: 25,
    address: address,
    displayDetails: function (){
        console.log(this.name);
        console.log(this.age);
        console.log(this.address.street, this.address.city, this.address.zipCode);
        console.log("-------------------|||------------------|||------------------")
    }
};

const person2 = {
    name: "fahad",
    age: 21,
    address: address,
    displayDetails: function (){
        console.log(this.name);
        console.log(this.age);
        console.log(this.address.street, this.address.city, this.address.zipCode);
        console.log("-------------------|||------------------|||------------------")
    }
};
const addressBook = [person1, person2];

// Function to display the details of each person in the address book
function displayAddressBook(book: { name: string; age: number; address: { street: string; city: string; zipCode: number }; displayDetails: () => void }[]): void {
    book.forEach(person => person.displayDetails());
};

// Function to add a new person to the address book
function addPerson(book: { name: string; age: number; address: { street: string; city: string; zipCode: number }; displayDetails: () => void }[], newPerson: { name: string; age: number; address: { street: string; city: string; zipCode: number }; displayDetails: () => void }): void {
    book.push(newPerson);
};

// Display the initial address book
displayAddressBook(addressBook);

// Create a new person object and add it to the address book
const person3 = {
    name: "Charlie",
    age: 35,
    address: {
        street: "789 Oak St",
        city: "Chicago",
        zipCode: 60601
    },
    displayDetails: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Address: ${this.address.street}, ${this.address.city}, ${this.address.zipCode}`);
        console.log('-----------------------------');
    }
};

addPerson(addressBook, person3);

// Display the updated address book
displayAddressBook(addressBook);   
