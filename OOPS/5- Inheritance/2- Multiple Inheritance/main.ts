class Shape {
    name: string
    constructor(name:string) {
        this.name = name
    }

    calculateArea() {
        return "Error: There are many shapes, the formula won't be same!";
    }
}

// class Circle inherited from Shape
class Circle extends Shape {
    radius: number
    constructor(radius: number, name: string) {
        super(name);
        this.radius = radius
    }

    calculateArea() {
        const piValue: number = 3.14;
        const radiusSquare: number = this.radius * this.radius;
        return `Area of circle: ${piValue * radiusSquare}`;
    }
}

// class Square inherited from Shape
class Square extends Shape {
    side: number;
    constructor(side: number, name: string) {
        super(name);
        this.side = side
    }

    calculateArea() {
        return `Area of square: ${this.side * this.side}`; 
    }
}

// class Rectangle inherited from Shape
class Rectangle extends Shape {
    length: number;
    width: number;
    constructor(length: number, width: number, name: string) {
        super(name);
        this.length = length
        this.width = width
    }

    calculateArea() {
        return `Area of rectangle: ${this.length * this.width}`;
    }
}

// Instance of inherited or child classes
const cirle1 = new Circle(20, "My Circle");
console.log(cirle1.calculateArea());

const square1 = new Square(4, "My Square")
console.log(square1.calculateArea());

const rectangle1 = new Rectangle(20, 30, "My Rectangle");
console.log(rectangle1.calculateArea());

