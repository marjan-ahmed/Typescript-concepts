class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Employee extends Person {
    department: string
    employeeId: number

    constructor(department: string, employeeId: number, name: string, age: number) {
        super(name, age)
        this.department = department
        this.employeeId = employeeId
    }

        displayDetails() {
            return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department} department, Employee ID: ${this.employeeId}`;
        }
}

// Object of Person
let person = new Person("Marjan", 15);
console.log(person.displayDetails()); // Name: Marjan, Age: 15

// Object of Employee
let employee = new Employee("Full Stack", 1069, "Marjan", 15);
console.log(employee.displayDetails()); // Name: Marjan, Age: 15, Department: Full Stack, Employee ID: 1069

