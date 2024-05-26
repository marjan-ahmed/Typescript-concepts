# Task: Create and Use TypeScript Interfaces
<h3>Step 1: Define Interfaces</h3>

Create a new TypeScript file called company.ts.
Define an interface named Address with the following properties:
street: a string
city: a string
postalCode: a string
country: a string
Define another interface named Employee with the following properties:
id: a number
name: a string
position: a string
salary: a number
address: an Address
# Step 2: Create Objects Using the Interfaces
In the same company.ts file, create a constant object named employee1 that adheres to the Employee interface.
Create another constant object named employee2 that also adheres to the Employee interface but with different values.
# Step 3: Create Functions that Use the Interfaces

Define a function named printEmployeeDetails that takes a parameter of type Employee.
Inside the function, log the employee details to the console in a formatted string, including the nested address details, e.g., Employee [ID: 1]: John Doe, Position: Software Engineer, Salary: $100000, Address: 123 Main St, Springfield, 12345, USA.
Define another function named calculateAnnualSalary that takes a parameter of type Employee and returns the annual salary (monthly salary multiplied by 12).
# Step 4: Test the Functions
Call the **printEmployeeDetails** function with both employee1 and employee2.
Call the **calculateAnnualSalary** function with both employee1 and employee2 and log the annual salary.

# Result
The result should be like the following

```
[ID - 123]
 Name: Marjan
 Position: Cloud Engineer
 Salary: 10000
 Address: D-32, Karachi, D7410, Pakistan
[ID - 234]
 Name: Sufyan
 Position: doctor
 Salary: 9000
 Address: E-43, Lahore, U892, Pakistan


Annual Salary of Marjan: $120000
Annual Salary of Sufyan: $108000

```