"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
    displayArea() {
        console.log("The Area is: " + this.calculateArea());
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea() {
        console.log("The area of the circle is: " + this.calculateArea());
    }
}
class Square extends Shape {
    constructor(side, color) {
        super(color);
        this.side = side;
    }
    calculateArea() {
        return this.side * this.side;
    }
    displayArea() {
        console.log("The area of square is: " + this.calculateArea());
    }
}
const circle = new Circle(5, 'red');
circle.displayArea(); // Output: The area of the circle is: 78.53981633974483
const square = new Square(5, 'green');
square.displayArea(); // Output: The area of square is: 25
