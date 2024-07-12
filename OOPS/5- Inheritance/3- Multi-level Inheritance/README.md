# Multi-level inheritance
![Sample img 1](image-1.png)
![Sample img 2](image-2.png)

**Multi-level inheritance** is a concept in object-oriented programming (OOP) where a class inherits properties and behaviors from another class, which itself is derived from another class. This forms a hierarchy of classes, where each derived class (subclass) inherits characteristics from its immediate superclass and all the way up the chain to the base class (ultimate superclass).

# Example:
Consider an example with classes representing different types of vehicles:

```typescript

// Base class representing a generic vehicle
class Vehicle {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    start(): string {
        return `${this.brand} vehicle started.`;
    }
}

// Subclass Car inherits from Vehicle
class Car extends Vehicle {
    type: string;

    constructor(brand: string, type: string) {
        super(brand);
        this.type = type;
    }

    drive(): string {
        return `Driving ${this.brand} ${this.type}.`;
    }
}

// Subclass ElectricCar inherits from Car
class ElectricCar extends Car {
    batteryCapacity: number;

    constructor(brand: string, type: string, batteryCapacity: number) {
        super(brand, type);
        this.batteryCapacity = batteryCapacity;
    }

    charge(): string {
        return `Charging ${this.brand} ${this.type} with ${this.batteryCapacity} kWh battery.`;
    }
}

// Create instances and demonstrate multi-level inheritance
let myCar = new ElectricCar("Tesla", "Model S", 100);
console.log(myCar.start());      // Output: Tesla vehicle started.
console.log(myCar.drive());      // Output: Driving Tesla Model S.
console.log(myCar.charge());     // Output: Charging Tesla Model S with 100 kWh battery.

```

# Usage:

- Hierarchy: Establishes a clear hierarchy of classes based on specialization and inheritance relationships.

- Polymorphism (we will see it later): Allows for polymorphic behavior where objects of different classes can be treated as instances of their superclass, facilitating flexibility and extensibility in code.

# Benefits:
- Organization: Provides a structured way to model real-world entities and relationships.

- Extensibility: Enables easy extension of functionality by adding new subclasses without modifying existing code in the superclass.

- Abstraction (see later): Encourages abstraction and encapsulation by defining common behaviors and characteristics in the superclass, which subclasses can inherit and specialize.

# Reasons for Using Multi-level Inheritance:
- Specialization: Allows for creating increasingly specialized subclasses that inherit from more general classes, reflecting real-world taxonomy or classification.

- Complex Systems: Useful in complex systems where entities have hierarchical relationships and varying levels of specialization.

- Code Maintenance: Promotes modular design and code maintenance by organizing classes based on their commonalities and differences.

# Conclusion
In summary, multi-level inheritance is a powerful concept in OOP that promotes code reusability, extensibility, and organization by establishing hierarchical relationships among classes, allowing for specialized behaviors and characteristics to be inherited and extended across different levels of abstraction.