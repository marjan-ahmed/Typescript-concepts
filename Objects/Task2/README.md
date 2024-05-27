# Task: Manage a Simple Address Book
Create a TypeScript program to manage a simple address book. You need to define objects for people and their addresses, create an array of people, and write functions to display and add entries to the address book.

# Steps:
<h3>Define Address Object:</h3>
Create a nested object named address inside each person object with the following properties:

- street (string)
- city (string)
- zipCode (number)
<h3>Define Person Object:<h3>
Create an object named person with the following properties:

- name (string)
- age (number)

address (object with properties: street, city, zipCode)
displayDetails (method to display person's details)

<h3>Create an Array of People:</h3>
Create an array named addressBook containing a few person objects.

<h3>Functions to Manage Address Book:</h3>

Write a function named displayAddressBook that accepts the address book array and logs the details of each person.
Write a function named addPerson that accepts the address book array and a new person object, and adds the person to the address book.