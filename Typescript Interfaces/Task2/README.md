# Task: Create and Use a TypeScript Interface
<h3>Step 1: Define an Interface</h3>
Create a new TypeScript file called user.ts.
Define an Interface named User with the following properties:

- id: a number
- name: a string
- email: a string
- isActive: a boolean

<h3>Step 2: Create 2 Objects Using the Interface</h3>
In the same main.ts file, create a constant object named user1 and user2 that adheres to the User Interface.
<h3>Step 3: Create a Function that Uses the Interface</h3>
Define a function named printUserDetails that takes a parameter of type User.
Inside the function, log the user details to the console in a formatted string, e.g., User [ID: 1]: Marjan Ahmed, Email: marjan.hm@example.com, Active: true.
<h3>Step 4: Test the Function</h3>
Call the printUserDetails function with the user1 and user2 object.

# Result
the result should be the same as shown below

```
User [ID: 1]: Marjan Ahmed, Email: marjan.ahm@example.com, Active: true
User [ID: 2]: Mustafa Khalid, Email: mustafa.khd@example.com, Active: false
```