class Animal {
  name: string;
  legs: number;

  constructor(name: string, legs: number) {
    this.name = name;
    this.legs = legs;
  }

  birth(): string {
    return `${this.name} can produce young ones by sexual reproduction.`;
  }

  moving(): string {
    return `The ${this.name} moves with ${this.legs} legs.`;
  }
}

class Vertibrate extends Animal {
  multiCellular: boolean;

  constructor(multiCellular: boolean, name: string, legs: number) {
    super(name, legs);
    this.multiCellular = multiCellular;
  }

  birth(): string {
    return `${this.name} is a vertebrate and can produce offspring by various methods.`;
  }
}

class Mammal extends Vertibrate {
  kind: string;

  constructor(
    kind: string,
    multiCellular: boolean,
    name: string,
    legs: number
  ) {
    super(multiCellular, name, legs);
    this.kind = kind;
  }

  birth(): string {
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

