Abstraction is a fundamental concept in object-oriented programming (OOP) that focuses on hiding the complex implementation details and showing only the essential features of an object. It allows you to manage complexity by breaking down the system into smaller, more manageable pieces.

In essence, abstraction helps in reducing programming complexity and effort by providing a clear separation between what an object does and how it achieves its functionality.


Here's how you might represent this concept in TypeScript:

```typescript
abstract class Car {
    // Abstract method (no implementation here)
    abstract startEngine(): void;

    // Abstract method (no implementation here)
    abstract stopEngine(): void;

    // Concrete method
    drive(): void {
        this.startEngine();
        console.log("Driving the car...");
    }

    // Concrete method
    park(): void {
        console.log("Parking the car...");
        this.stopEngine();
    }
}

class Tesla extends Car {
    // Implementing the abstract methods
    startEngine(): void {
        console.log("Starting the electric engine...");
    }

    stopEngine(): void {
        console.log("Stopping the electric engine...");
    }
}

class Toyota extends Car {
    // Implementing the abstract methods
    startEngine(): void {
        console.log("Starting the gasoline engine...");
    }

    stopEngine(): void {
        console.log("Stopping the gasoline engine...");
    }
}

// Usage
const myTesla = new Tesla();
myTesla.drive(); // Outputs: Starting the electric engine... Driving the car...
myTesla.park();  // Outputs: Parking the car... Stopping the electric engine...

const myToyota = new Toyota();
myToyota.drive(); // Outputs: Starting the gasoline engine... Driving the car...
myToyota.park();  // Outputs: Parking the car... Stopping the gasoline engine...
```
# Why use abstract class over interface
**We can use this class as a Base or Parent class that the properties or method should be present in the child class. But we can also use an interface, so what's the reason behind?**

- **ANS:** Because interface can only define the properties & methods's data type initially, abstract class has the power to define methods's logic or properties's value. It is is middle of Base Class and interface. It has some feature of class as well as interface

# Note 
Abstract classes can't make an object because it is a base class that defines the blueprint of a parent class.