# Inheritance
Inheritance is a fundamental concept in object-oriented programming (OOP) where a class (known as a derived class or subclass) can inherit properties and behaviors (methods) from another class (known as a base class, parent class, or superclass). Inheritance allows classes to be organized in a hierarchical structure, where each subclass inherits the attributes and methods of its superclass, and can also add its own unique attributes and methods.

<h3>Key points about inheritance:</h3>

- Base Class (Superclass): This is the class whose attributes and methods are inherited by other classes. It serves as a blueprint.

- Derived Class (Subclass): This is the class that inherits properties and behaviors from the base class. It can extend or modify these inherited characteristics and can also add its own specific attributes and methods.

Inheritance is a powerful mechanism that promotes modularity, extensibility, and code organization in large-scale software development, particularly in OOP languages like TypeScript, Java, C++, and Python. It forms the basis for building class hierarchies and facilitates the implementation of polymorphism and other advanced OOP concepts.

# Super
It is a keyword that calls the constructor of parent or base class.

```typescript
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
        super(name, age)             // Super
        this.department = department
        this.employeeId = employeeId
    }
}
```

