abstract class Shape {
    constructor(public color: string) {}

    abstract calculateArea(): number;
    
    displayArea(): void {
        console.log("The Area is: " + this.calculateArea());
    }
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    public calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    
    public displayArea(): void {
        console.log("The area of the circle is: " + this.calculateArea());
    }
}

class Square extends Shape {
    constructor(public side: number, color: string) {
        super(color)    
    }

    public calculateArea(): number {
        return this.side * this.side
    }

    public displayArea(): void {
        console.log("The area of square is: " + this.calculateArea());
        
    }
}


const circle = new Circle(5, 'red');
circle.displayArea(); // Output: The area of the circle is: 78.53981633974483

const square = new Square(5, 'green');
square.displayArea() // Output: The area of square is: 25
