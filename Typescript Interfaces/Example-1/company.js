"use strict";

const employee1 = {
    id: 123,
    name: "Marjan",
    position: "Cloud Engineer",
    salary: 10000,
    address: {
        street: "D-32",
        city: "Karachi",
        postalCode: "D7410",
        country: "Pakistan"
    }
};
const employee2 = {
    id: 234,
    name: "Sufyan",
    position: "doctor",
    salary: 9000,
    address: {
        street: "E-43",
        city: "Lahore",
        postalCode: "U892",
        country: "Pakistan"
    }
};
const printEmployeeDetails = (employee) => {
    console.log(`[ID - ${employee.id}] \n Name: ${employee.name} \n Position: ${employee.position} \n Salary: ${employee.salary} \n Address: ${employee.address.street}, ${employee.address.city}, ${employee.address.postalCode}, ${employee.address.country}`);
};
const calculateAnnualSalary = (employee) => {
    const salary = employee.salary * 12;
    return salary;
};
printEmployeeDetails(employee1);
printEmployeeDetails(employee2);
console.log("\n");
console.log(`Annual Salary of ${employee1.name}: $${calculateAnnualSalary(employee1)}`);
console.log(`Annual Salary of ${employee2.name}: $${calculateAnnualSalary(employee2)}`);
