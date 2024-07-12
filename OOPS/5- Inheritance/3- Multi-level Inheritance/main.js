"use strict";
class Animal {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }
    birth() {
        return `${this.name} can produce young ones by sexual reproduction.`;
    }
    moving() {
        return `The ${this.name} moves with ${this.legs} legs.`;
    }
}
class Vertibrate extends Animal {
    constructor(multiCellular, name, legs) {
        super(name, legs);
        this.multiCellular = multiCellular;
    }
    birth() {
        return `${this.name} is a vertebrate and can produce offspring by various methods.`;
    }
}
class Mammal extends Vertibrate {
    constructor(kind, multiCellular, name, legs) {
        super(multiCellular, name, legs);
        this.kind = kind;
    }
    birth() {
        return `The ${this.name} are ${this.kind} and give birth by live birth (viviparity).`;
    }
}
// Create instances
let animal1 = new Animal("Lion", 4);
console.log(animal1.birth());
console.log(animal1.moving());
let vertibrate1 = new Vertibrate(true, "Snake", 0);
console.log(vertibrate1.birth());
let mammal1 = new Mammal("Viviparous", true, "Human", 2);
console.log(mammal1.birth());
