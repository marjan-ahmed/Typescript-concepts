class Fruit {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity =  quantity;
    }

    availableFruit(): string {
        return `${this.quantity} ${this.name} are avaiable`;
    }

}

const fruit1 = new Fruit("Mango",2)
console.log(fruit1); // Fruit { name: 'Mango', quantity: 2 }
console.log(fruit1.name); // Mango
console.log(fruit1.quantity = 3); // 3
console.log(fruit1.availableFruit()); // 3 Mango are avaiable